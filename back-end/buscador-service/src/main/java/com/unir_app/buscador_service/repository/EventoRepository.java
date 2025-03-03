package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Evento;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepository extends CrudRepository<Evento, String> {
}
