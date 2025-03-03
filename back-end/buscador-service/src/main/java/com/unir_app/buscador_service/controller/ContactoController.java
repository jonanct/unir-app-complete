package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Contacto;
import com.unir_app.buscadorservice.service.ContactoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contactos")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactoController {

    private final ContactoService service;

    public ContactoController(ContactoService service) {
        this.service = service;
    }

    @PostMapping
    public Contacto crearContacto(@RequestBody Contacto contacto) {
        return service.crearContacto(contacto);
    }

    @GetMapping
    public List<Contacto> obtenerContactos() {
        return service.obtenerContactos();
    }

    @PutMapping("/{id}")
    public Contacto actualizarContacto(@PathVariable String id, @RequestBody Contacto contacto) {
        contacto.setId(id);
        return service.actualizarContacto(contacto);
    }

    @DeleteMapping("/{id}")
    public void eliminarContacto(@PathVariable String id) {
        service.eliminarContacto(id);
    }
}