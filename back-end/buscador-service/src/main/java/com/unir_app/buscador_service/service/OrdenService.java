package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Orden;
import com.unir_app.buscadorservice.repository.OrdenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class OrdenService {

    @Autowired
    private OrdenRepository ordenRepository;

    public Orden crearOrden(Orden orden) {
        return ordenRepository.save(orden);
    }

    public List<Orden> obtenerOrdenes() {
        Iterable<Orden> iterable = ordenRepository.findAll();
        return StreamSupport.stream(iterable.spliterator(), false)
                            .collect(Collectors.toList());
    }
}