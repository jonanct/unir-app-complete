package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Registro;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroRepository extends ElasticsearchRepository<Registro, String> {
}