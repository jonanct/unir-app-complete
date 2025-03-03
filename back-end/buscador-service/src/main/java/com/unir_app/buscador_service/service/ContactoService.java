package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Contacto;
import com.unir_app.buscadorservice.repository.ContactoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContactoService {

    private final ContactoRepository repository;

    public ContactoService(ContactoRepository repository) {
        this.repository = repository;
    }

    public Contacto crearContacto(Contacto contacto) {
        return repository.save(contacto);
    }

    public List<Contacto> obtenerContactos() {
        List<Contacto> contactos = new ArrayList<>();
        repository.findAll().forEach(contactos::add);
        return contactos;
    }

    public Contacto actualizarContacto(Contacto contacto) {
        return repository.save(contacto);
    }

    public void eliminarContacto(String id) {
        repository.deleteById(id);
    }
}