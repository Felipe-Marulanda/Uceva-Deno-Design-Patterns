/**
 * Patrón Decorator:
 * Permite agregar funciones nuevas a un objeto envolviéndolo en otros
 * objetos, sin modificar su clase.
 *
 * Problema:
 * Una cafetería vende café con extras como leche, chocolate o crema. Crear
 * una clase para cada combinación posible sería imposible de mantener.
 *
 * Solución:
 * Decorator es adecuado porque cada extra envuelve al café y suma su
 * descripción y su precio. Así se pueden combinar en cualquier orden.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

import { COLORS } from "../../helpers/colors.ts";

interface Bebida {
  descripcion(): string;
  precio(): number;
}

class CafeSimple implements Bebida {
  descripcion(): string {
    return "Café";
  }

  precio(): number {
    return 3000;
  }
}

abstract class ExtraDecorator implements Bebida {
  constructor(protected bebida: Bebida) {}

  abstract descripcion(): string;
  abstract precio(): number;
}

class ConLeche extends ExtraDecorator {
  descripcion(): string {
    return `${this.bebida.descripcion()} + leche`;
  }

  precio(): number {
    return this.bebida.precio() + 1000;
  }
}

class ConChocolate extends ExtraDecorator {
  descripcion(): string {
    return `${this.bebida.descripcion()} + chocolate`;
  }

  precio(): number {
    return this.bebida.precio() + 1500;
  }
}

class ConCrema extends ExtraDecorator {
  descripcion(): string {
    return `${this.bebida.descripcion()} + crema`;
  }

  precio(): number {
    return this.bebida.precio() + 800;
  }
}

function mostrarPedido(bebida: Bebida): void {
  console.log(
    `${bebida.descripcion()}: $${bebida.precio().toLocaleString("es-CO")}`,
  );
}

function main(): void {
  console.log("%cPedidos de la cafetería:", COLORS.blue);

  const cafeSolo = new CafeSimple();
  mostrarPedido(cafeSolo);

  const cafeConLeche = new ConLeche(new CafeSimple());
  mostrarPedido(cafeConLeche);

  const mocaConCrema = new ConCrema(
    new ConChocolate(new ConLeche(new CafeSimple())),
  );
  mostrarPedido(mocaConCrema);
}

main();
