package com.example.symptoms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/symptoms")
@CrossOrigin(origins = "http://localhost:3000")
public class SymptomController {

    @Autowired
    private SymptomReportRepository repository;

    @PostMapping
    public SymptomReport createSymptomReport(@RequestBody SymptomReport symptomReport) {
        return repository.save(symptomReport);
    }

    @GetMapping
    public List<SymptomReport> getAllSymptomReports() {
        return repository.findAll();
    }
}
