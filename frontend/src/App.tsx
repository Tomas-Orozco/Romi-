import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface SymptomReport {
  id: number;
  dolorCabeza: boolean;
  fiebre: boolean;
  tos: boolean;
  nivelDolor: number;
}

function App() {
  const [symptoms, setSymptoms] = useState<SymptomReport[]>([]);
  const [formData, setFormData] = useState({
    dolorCabeza: false,
    fiebre: false,
    tos: false,
    nivelDolor: 1
  });
  const [showForm, setShowForm] = useState(true);

  const API_URL = 'http://localhost:8080/symptoms';

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get(API_URL);
      setSymptoms(response.data);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.nivelDolor < 1 || formData.nivelDolor > 10) {
      alert('El nivel de dolor debe estar entre 1 y 10');
      return;
    }

    try {
      await axios.post(API_URL, formData);
      setFormData({
        dolorCabeza: false,
        fiebre: false,
        tos: false,
        nivelDolor: 1
      });
      fetchSymptoms();
      alert('Síntomas registrados correctamente');
    } catch (error) {
      console.error('Error saving symptoms:', error);
      alert('Error al guardar los síntomas');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value)
    }));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Registro de Síntomas</h1>
        <nav>
          <button 
            className={showForm ? 'active' : ''} 
            onClick={() => setShowForm(true)}
          >
            Registrar
          </button>
          <button 
            className={!showForm ? 'active' : ''} 
            onClick={() => setShowForm(false)}
          >
            Ver Registros
          </button>
        </nav>
      </header>

      <main className="main">
        {showForm ? (
          <form onSubmit={handleSubmit} className="form">
            <h2>Registrar Nuevos Síntomas</h2>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="dolorCabeza"
                  checked={formData.dolorCabeza}
                  onChange={handleInputChange}
                />
                Dolor de cabeza
              </label>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="fiebre"
                  checked={formData.fiebre}
                  onChange={handleInputChange}
                />
                Fiebre
              </label>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="tos"
                  checked={formData.tos}
                  onChange={handleInputChange}
                />
                Tos
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="nivelDolor">
                Nivel de dolor (1-10): {formData.nivelDolor}
              </label>
              <input
                type="range"
                id="nivelDolor"
                name="nivelDolor"
                min="1"
                max="10"
                value={formData.nivelDolor}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Guardar Síntomas
            </button>
          </form>
        ) : (
          <div className="records">
            <h2>Registros de Síntomas</h2>
            {symptoms.length === 0 ? (
              <p>No hay registros disponibles</p>
            ) : (
              <div className="records-list">
                {symptoms.map((symptom) => (
                  <div key={symptom.id} className="record-item">
                    <h3>Registro #{symptom.id}</h3>
                    <div className="symptom-details">
                      <p><strong>Dolor de cabeza:</strong> {symptom.dolorCabeza ? 'Sí' : 'No'}</p>
                      <p><strong>Fiebre:</strong> {symptom.fiebre ? 'Sí' : 'No'}</p>
                      <p><strong>Tos:</strong> {symptom.tos ? 'Sí' : 'No'}</p>
                      <p><strong>Nivel de dolor:</strong> {symptom.nivelDolor}/10</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
