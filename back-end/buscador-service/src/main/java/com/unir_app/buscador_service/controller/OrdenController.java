package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Orden;
import com.unir_app.buscadorservice.service.OrdenService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ordenes")
@CrossOrigin(origins = "http://localhost:5173")
public class OrdenController {

    private final OrdenService service;

    public OrdenController(OrdenService service) {
        this.service = service;
    }

    @PostMapping
    public Orden crearOrden(@RequestBody Orden orden) {
        return service.crearOrden(orden);
    }

    @GetMapping
    public List<Orden> obtenerOrdenes() {
        return service.obtenerOrdenes();
    }
}