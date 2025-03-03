package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Producto;
import com.unir_app.buscadorservice.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository repository;

    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }

    public Producto crearProducto(Producto producto) {
        return repository.save(producto);
    }

    public List<Producto> obtenerProductos() {
        List<Producto> productos = new ArrayList<>();
        repository.findAll().forEach(productos::add);
        return productos;
    }

    public Producto actualizarProducto(Producto producto) {
        return repository.save(producto);
    }

    public void eliminarProducto(String id) {
        repository.deleteById(id);
    }
}