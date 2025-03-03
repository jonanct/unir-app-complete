package com.unir_app.buscadorservice.repository;

import com.unir_app.buscadorservice.model.Producto;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends ElasticsearchRepository<Producto, String> {
}