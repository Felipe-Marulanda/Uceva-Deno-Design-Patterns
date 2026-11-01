/**
 * Patrón Observer:
 * Define una relación de uno a muchos entre objetos: cuando uno cambia, todos
 * los que están pendientes de él reciben un aviso automático.
 *
 * Problema:
 * Una tienda en línea quiere avisar a los clientes interesados cuando el
 * precio de un producto cambia, sin que cada cliente tenga que revisarlo.
 *
 * Solución:
 * Observer es adecuado porque el producto guarda la lista de clientes
 * suscritos y los notifica cuando cambia su precio, sin conocer los detalles
 * de cada cliente.
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

import { COLORS } from "../../helpers/colors.ts";

interface Observador {
  actualizar(producto: string, precio: number): void;
}

class Producto {
  private observadores: Observador[] = [];

  constructor(private nombre: string, private precio: number) {}

  suscribir(observador: Observador): void {
    this.observadores.push(observador);
  }

  cancelarSuscripcion(observador: Observador): void {
    this.observadores = this.observadores.filter((o) => o !== observador);
  }

  cambiarPrecio(nuevoPrecio: number): void {
    this.precio = nuevoPrecio;
    this.notificar();
  }

  private notificar(): void {
    this.observadores.forEach((o) => o.actualizar(this.nombre, this.precio));
  }
}

class Cliente implements Observador {
  constructor(private nombre: string) {}

  actualizar(producto: string, precio: number): void {
    console.log(
      `${this.nombre} recibe aviso: ${producto} ahora cuesta $${
        precio.toLocaleString("es-CO")
      }`,
    );
  }
}

function main(): void {
  const audifonos = new Producto("Audífonos inalámbricos", 150000);
  const ana = new Cliente("Ana");
  const carlos = new Cliente("Carlos");
  const laura = new Cliente("Laura");

  audifonos.suscribir(ana);
  audifonos.suscribir(carlos);
  audifonos.suscribir(laura);

  console.log("%cPrimera oferta, tres clientes suscritos:", COLORS.blue);
  audifonos.cambiarPrecio(120000);

  audifonos.cancelarSuscripcion(carlos);

  console.log("%cSegunda oferta, Carlos canceló su suscripción:", COLORS.blue);
  audifonos.cambiarPrecio(99000);
}

main();
