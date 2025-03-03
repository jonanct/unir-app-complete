package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Registro;
import com.unir_app.buscadorservice.repository.RegistroRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RegistroService {

    private final RegistroRepository repository;

    public RegistroService(RegistroRepository repository) {
        this.repository = repository;
    }

    public Registro crearRegistro(Registro registro) {
        return repository.save(registro);
    }

    public List<Registro> obtenerRegistros() {
        List<Registro> registros = new ArrayList<>();
        repository.findAll().forEach(registros::add);
        return registros;
    }

    public Registro actualizarRegistro(Registro registro) {
        return repository.save(registro);
    }

    public void eliminarRegistro(String id) {
        repository.deleteById(id);
    }
}