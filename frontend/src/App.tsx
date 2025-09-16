import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface SymptomReport {
  id: number;
  dolorCabeza: number;
  fiebre: number;
  tos: number;
  dolorPanza: number;
  dolorGarganta: number;
  fatiga: number;
}

function App() {
  const [symptoms, setSymptoms] = useState<SymptomReport[]>([]);
  const [formData, setFormData] = useState({
    dolorCabeza: 0,
    fiebre: 0,
    tos: 0,
    dolorPanza: 0,
    dolorGarganta: 0,
    fatiga: 0
  });
  const [showForm, setShowForm] = useState(true);

  const API_URL = "http://localhost:8081/symptoms";

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const fetchSymptoms = async () => {
    try {
      const response = await axios.get(API_URL);
      setSymptoms(response.data);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar que al menos un s?ntoma tenga nivel mayor a 0
    const hasSymptoms = Object.values(formData).some(value => value > 0);
    if (!hasSymptoms) {
      alert("Debes seleccionar al menos un s?ntoma");
      return;
    }

    try {
      const response = await axios.post(API_URL, formData);
      console.log("Response:", response.data);
      
      // Resetear formulario
      setFormData({
        dolorCabeza: 0,
        fiebre: 0,
        tos: 0,
        dolorPanza: 0,
        dolorGarganta: 0,
        fatiga: 0
      });
      
      // Recargar s?ntomas
      await fetchSymptoms();
      alert("S?ntomas registrados correctamente");
    } catch (error) {
      console.error("Error saving symptoms:", error);
      alert("Error al guardar los s?ntomas: " + (error as any).message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const getSymptomName = (key: string) => {
    const names: { [key: string]: string } = {
      dolorCabeza: "Dolor de cabeza",
      fiebre: "Fiebre",
      tos: "Tos",
      dolorPanza: "Dolor de panza",
      dolorGarganta: "Dolor de garganta",
      fatiga: "Fatiga"
    };
    return names[key] || key;
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Registro de Sintomas</h1>
        <nav>
          <button 
            className={showForm ? "active" : ""} 
            onClick={() => setShowForm(true)}
          >
            Registrar
          </button>
          <button 
            className={!showForm ? "active" : ""} 
            onClick={() => setShowForm(false)}
          >
            Ver Registros
          </button>
        </nav>
      </header>

      <main className="main">
        {showForm ? (
          <form onSubmit={handleSubmit} className="form">
            <h2>Registrar Nuevos Sintomas</h2>
            <p className="form-description">
              Evalua cada sintoma del 0 (sin sintomas) al 10 (muy intenso)
            </p>
            
            {Object.keys(formData).map((symptom) => (
              <div key={symptom} className="form-group">
                <label htmlFor={symptom}>
                  {getSymptomName(symptom)}: {formData[symptom as keyof typeof formData]}/10
                </label>
                <input
                  type="range"
                  id={symptom}
                  name={symptom}
                  min="0"
                  max="10"
                  value={formData[symptom as keyof typeof formData]}
                  onChange={handleInputChange}
                />
                <div className="range-labels">
                  <span>0 - Sin sintomas</span>
                  <span>10 - Muy intenso</span>
                </div>
              </div>
            ))}

            <button type="submit" className="submit-btn">
              Guardar Sintomas
            </button>
          </form>
        ) : (
          <div className="records">
            <h2>Registros de Sintomas</h2>
            {symptoms.length === 0 ? (
              <p>No hay registros disponibles</p>
            ) : (
              <div className="records-list">
                {symptoms.map((symptom) => (
                  <div key={symptom.id} className="record-item">
                    <h3>Registro #{symptom.id}</h3>
                    <div className="symptom-details">
                      {Object.entries(symptom).map(([key, value]) => {
                        if (key === 'id') return null;
                        return (
                          <p key={key}>
                            <strong>{getSymptomName(key)}:</strong> {value}/10
                          </p>
                        );
                      })}
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
