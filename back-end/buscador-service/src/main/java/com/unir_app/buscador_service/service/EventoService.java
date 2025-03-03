package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Evento;
import com.unir_app.buscadorservice.repository.EventoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventoService {

    private final EventoRepository repository;

    public EventoService(EventoRepository repository) {
        this.repository = repository;
    }

    public Evento crearEvento(Evento evento) {
        return repository.save(evento);
    }

    public List<Evento> obtenerEventos() {
        List<Evento> eventos = new ArrayList<>();
        repository.findAll().forEach(eventos::add);
        return eventos;
    }

    public Evento actualizarEvento(Evento evento) {
        return repository.save(evento);
    }

    public void eliminarEvento(String id) {
        repository.deleteById(id);
    }
}