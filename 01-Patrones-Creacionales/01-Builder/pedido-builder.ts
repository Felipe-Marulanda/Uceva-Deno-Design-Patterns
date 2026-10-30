/**
 * Patrón Builder:
 * Permite construir un objeto complejo paso a paso mediante métodos claros.
 *
 * Problema:
 * Una hamburguesa puede tener muchas opciones y sería difícil crear cada
 * combinación usando un constructor con muchos parámetros.
 *
 * Solución:
 * Builder es adecuado porque permite agregar solo las opciones necesarias,
 * mantiene el proceso ordenado y facilita crear pedidos diferentes.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../../helpers/colors.ts";

class Pedido {
  constructor(
    public producto: string,
    public tamano: string,
    public ingredientes: string[],
    public bebida: string,
    public entrega: string,
  ) {}

  mostrar(): void {
    console.log(`Producto: ${this.producto}`);
    console.log(`Tamaño: ${this.tamano}`);
    console.log(`Ingredientes: ${this.ingredientes.join(", ") || "Ninguno"}`);
    console.log(`Bebida: ${this.bebida}`);
    console.log(`Entrega: ${this.entrega}`);
  }
}

class PedidoBuilder {
  private producto = "Hamburguesa";
  private tamano = "Mediana";
  private ingredientes: string[] = [];
  private bebida = "Sin bebida";
  private entrega = "Recoger en el local";

  elegirProducto(producto: string): PedidoBuilder {
    this.producto = producto;
    return this;
  }

  elegirTamano(tamano: string): PedidoBuilder {
    this.tamano = tamano;
    return this;
  }

  agregarIngrediente(ingrediente: string): PedidoBuilder {
    this.ingredientes.push(ingrediente);
    return this;
  }

  elegirBebida(bebida: string): PedidoBuilder {
    this.bebida = bebida;
    return this;
  }

  elegirEntrega(entrega: string): PedidoBuilder {
    this.entrega = entrega;
    return this;
  }

  construir(): Pedido {
    return new Pedido(
      this.producto,
      this.tamano,
      [...this.ingredientes],
      this.bebida,
      this.entrega,
    );
  }
}

function main(): void {
  const pedidoBasico = new PedidoBuilder()
    .elegirProducto("Hamburguesa de pollo")
    .construir();

  console.log("%cPedido básico:", COLORS.blue);
  pedidoBasico.mostrar();

  const pedidoCompleto = new PedidoBuilder()
    .elegirProducto("Hamburguesa de res")
    .elegirTamano("Grande")
    .agregarIngrediente("Queso")
    .agregarIngrediente("Tocineta")
    .elegirBebida("Limonada")
    .elegirEntrega("Domicilio")
    .construir();

  console.log("\n%cPedido completo:", COLORS.green);
  pedidoCompleto.mostrar();
}

main();
