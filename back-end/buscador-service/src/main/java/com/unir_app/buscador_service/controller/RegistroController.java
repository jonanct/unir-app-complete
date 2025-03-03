package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Registro;
import com.unir_app.buscadorservice.service.RegistroService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registros")
@CrossOrigin(origins = "http://localhost:5173")
public class RegistroController {

    private final RegistroService service;

    public RegistroController(RegistroService service) {
        this.service = service;
    }

    @PostMapping
    public Registro crearRegistro(@RequestBody Registro registro) {
        return service.crearRegistro(registro);
    }

    @GetMapping
    public List<Registro> obtenerRegistros() {
        return service.obtenerRegistros();
    }

    @PutMapping("/{id}")
    public Registro actualizarRegistro(@PathVariable String id, @RequestBody Registro registro) {
        registro.setId(id);
        return service.actualizarRegistro(registro);
    }

    @DeleteMapping("/{id}")
    public void eliminarRegistro(@PathVariable String id) {
        service.eliminarRegistro(id);
    }
}