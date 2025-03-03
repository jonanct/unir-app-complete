package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Carrito;
import com.unir_app.buscadorservice.model.Producto;
import com.unir_app.buscadorservice.service.CarritoService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/carritos")
@CrossOrigin(origins = "http://localhost:5173")
public class CarritoController {

    private final CarritoService service;

    public CarritoController(CarritoService service) {
        this.service = service;
    }

    @PostMapping
    public Carrito crearCarrito(@RequestBody Carrito carrito) {
        return service.crearCarrito(carrito);
    }

    @GetMapping("/{id}")
    public Optional<Carrito> obtenerCarrito(@PathVariable String id) {
        return service.obtenerCarrito(id);
    }

    @PostMapping("/{carritoId}/productos")
    public Carrito agregarProducto(@PathVariable String carritoId, @RequestBody Producto producto) {
        return service.agregarProducto(carritoId, producto);
    }

    @DeleteMapping("/{carritoId}/productos/{productoId}")
    public Carrito eliminarProducto(@PathVariable String carritoId, @PathVariable String productoId) {
        return service.eliminarProducto(carritoId, productoId);
    }
}