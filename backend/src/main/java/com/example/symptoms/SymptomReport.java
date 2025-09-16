package com.example.symptoms;

import jakarta.persistence.*;

@Entity
@Table(name = "symptom_reports")
public class SymptomReport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "dolor_cabeza")
    private Boolean dolorCabeza;
    
    private Boolean fiebre;
    private Boolean tos;
    
    @Column(name = "nivel_dolor")
    private Integer nivelDolor;
    
    public SymptomReport() {}
    
    public SymptomReport(Boolean dolorCabeza, Boolean fiebre, Boolean tos, Integer nivelDolor) {
        this.dolorCabeza = dolorCabeza;
        this.fiebre = fiebre;
        this.tos = tos;
        this.nivelDolor = nivelDolor;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Boolean getDolorCabeza() {
        return dolorCabeza;
    }
    
    public void setDolorCabeza(Boolean dolorCabeza) {
        this.dolorCabeza = dolorCabeza;
    }
    
    public Boolean getFiebre() {
        return fiebre;
    }
    
    public void setFiebre(Boolean fiebre) {
        this.fiebre = fiebre;
    }
    
    public Boolean getTos() {
        return tos;
    }
    
    public void setTos(Boolean tos) {
        this.tos = tos;
    }
    
    public Integer getNivelDolor() {
        return nivelDolor;
    }
    
    public void setNivelDolor(Integer nivelDolor) {
        this.nivelDolor = nivelDolor;
    }
}
