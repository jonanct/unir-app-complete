package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Carrito;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarritoRepository extends ElasticsearchRepository<Carrito, String> {
}
