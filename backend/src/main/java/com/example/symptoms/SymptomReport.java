package com.example.symptoms;

import jakarta.persistence.*;

@Entity
@Table(name = "symptom_reports")
public class SymptomReport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    private Integer edad;
    
    @Column(name = "dolor_cabeza")
    private Integer dolorCabeza;
    
    private Integer fiebre;
    private Integer tos;
    
    @Column(name = "dolor_panza")
    private Integer dolorPanza;
    
    @Column(name = "dolor_garganta")
    private Integer dolorGarganta;
    
    private Integer fatiga;
    
    public SymptomReport() {}
    
    public SymptomReport(String nombre, Integer edad, Integer dolorCabeza, Integer fiebre, Integer tos, 
                        Integer dolorPanza, Integer dolorGarganta, Integer fatiga) {
        this.nombre = nombre;
        this.edad = edad;
        this.dolorCabeza = dolorCabeza;
        this.fiebre = fiebre;
        this.tos = tos;
        this.dolorPanza = dolorPanza;
        this.dolorGarganta = dolorGarganta;
        this.fatiga = fatiga;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Integer getDolorCabeza() {
        return dolorCabeza;
    }
    
    public void setDolorCabeza(Integer dolorCabeza) {
        this.dolorCabeza = dolorCabeza;
    }
    
    public Integer getFiebre() {
        return fiebre;
    }
    
    public void setFiebre(Integer fiebre) {
        this.fiebre = fiebre;
    }
    
    public Integer getTos() {
        return tos;
    }
    
    public void setTos(Integer tos) {
        this.tos = tos;
    }
    
    public Integer getDolorPanza() {
        return dolorPanza;
    }
    
    public void setDolorPanza(Integer dolorPanza) {
        this.dolorPanza = dolorPanza;
    }
    
    public Integer getDolorGarganta() {
        return dolorGarganta;
    }
    
    public void setDolorGarganta(Integer dolorGarganta) {
        this.dolorGarganta = dolorGarganta;
    }
    
    public Integer getFatiga() {
        return fatiga;
    }
    
    public void setFatiga(Integer fatiga) {
        this.fatiga = fatiga;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public Integer getEdad() {
        return edad;
    }
    
    public void setEdad(Integer edad) {
        this.edad = edad;
    }
}
