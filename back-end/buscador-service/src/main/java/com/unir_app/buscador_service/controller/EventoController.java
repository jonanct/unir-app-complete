package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Evento;
import com.unir_app.buscadorservice.service.EventoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "http://localhost:5173")
public class EventoController {

    private final EventoService service;

    public EventoController(EventoService service) {
        this.service = service;
    }

    @PostMapping
    public Evento crearEvento(@RequestBody Evento evento) {
        return service.crearEvento(evento);
    }

    @GetMapping
    public List<Evento> obtenerEventos() {
        return service.obtenerEventos();
    }

    @PutMapping("/{id}")
    public Evento actualizarEvento(@PathVariable String id, @RequestBody Evento evento) {
        evento.setId(id);
        return service.actualizarEvento(evento);
    }

    @DeleteMapping("/{id}")
    public void eliminarEvento(@PathVariable String id) {
        service.eliminarEvento(id);
    }
}