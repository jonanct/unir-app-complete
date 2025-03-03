package com.unir_app.buscadorservice.service;

import com.unir_app.buscadorservice.model.Carrito;
import com.unir_app.buscadorservice.model.Producto;
import com.unir_app.buscadorservice.repository.CarritoRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarritoService {

    private final CarritoRepository repository;

    public CarritoService(CarritoRepository repository) {
        this.repository = repository;
    }

    public Carrito crearCarrito(Carrito carrito) {
        return repository.save(carrito);
    }

    public Optional<Carrito> obtenerCarrito(String id) {
        return repository.findById(id);
    }

    public Carrito agregarProducto(String carritoId, Producto producto) {
        Optional<Carrito> carritoOpt = repository.findById(carritoId);
        if (carritoOpt.isPresent()) {
            Carrito carrito = carritoOpt.get();
            carrito.getProductos().add(producto);
            return repository.save(carrito);
        }
        return null;
    }

    public Carrito eliminarProducto(String carritoId, String productoId) {
        Optional<Carrito> carritoOpt = repository.findById(carritoId);
        if (carritoOpt.isPresent()) {
            Carrito carrito = carritoOpt.get();
            carrito.getProductos().removeIf(producto -> producto.getId().equals(productoId));
            return repository.save(carrito);
        }
        return null;
    }
}