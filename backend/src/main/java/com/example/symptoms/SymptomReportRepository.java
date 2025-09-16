package com.example.symptoms;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomReportRepository extends JpaRepository<SymptomReport, Long> {
}
