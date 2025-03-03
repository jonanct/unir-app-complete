package com.unir_app.buscadorservice.controller;

import com.unir_app.buscadorservice.model.Producto;
import com.unir_app.buscadorservice.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductoController {

    private final ProductoService service;

    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {
        return service.crearProducto(producto);
    }

    @GetMapping
    public List<Producto> obtenerProductos() {
        return service.obtenerProductos();
    }

    @PutMapping("/{id}")
    public Producto actualizarProducto(@PathVariable String id, @RequestBody Producto producto) {
        producto.setId(id);
        return service.actualizarProducto(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable String id) {
        service.eliminarProducto(id);
    }
}