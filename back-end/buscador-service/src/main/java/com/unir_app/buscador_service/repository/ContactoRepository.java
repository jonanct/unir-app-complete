package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Contacto;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactoRepository extends ElasticsearchRepository<Contacto, String> {
}