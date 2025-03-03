package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Orden;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdenRepository extends ElasticsearchRepository<Orden, String> {
}