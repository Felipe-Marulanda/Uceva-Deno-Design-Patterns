/**
 * Patrón State:
 * Permite que un objeto cambie su comportamiento cuando cambia su estado
 * interno, como si fuera de otra clase.
 *
 * Problema:
 * Un artículo de un blog pasa por los estados borrador, en revisión y
 * publicado. La acción de avanzar hace algo distinto en cada estado y
 * llenar el código de condicionales sería difícil de mantener.
 *
 * Solución:
 * State es adecuado porque cada estado es una clase con su propio
 * comportamiento y el artículo solo delega en el estado actual.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

import { COLORS } from "../../helpers/colors.ts";

interface Estado {
  avanzar(articulo: Articulo): void;
}

class Articulo {
  private estado: Estado;

  constructor(private titulo: string) {
    this.estado = new Borrador();
  }

  cambiarEstado(estado: Estado): void {
    this.estado = estado;
  }

  avanzar(): void {
    this.estado.avanzar(this);
  }

  mostrar(mensaje: string): void {
    console.log(`"${this.titulo}": ${mensaje}`);
  }
}

class Borrador implements Estado {
  avanzar(articulo: Articulo): void {
    articulo.mostrar("el borrador se envía a revisión.");
    articulo.cambiarEstado(new EnRevision());
  }
}

class EnRevision implements Estado {
  avanzar(articulo: Articulo): void {
    articulo.mostrar("la revisión fue aprobada y el artículo se publica.");
    articulo.cambiarEstado(new Publicado());
  }
}

class Publicado implements Estado {
  avanzar(articulo: Articulo): void {
    articulo.mostrar("ya está publicado, no hay más pasos.");
  }
}

function main(): void {
  const articulo = new Articulo("Introducción a los patrones de diseño");

  console.log("%cFlujo de publicación del artículo:", COLORS.blue);
  articulo.avanzar();
  articulo.avanzar();
  articulo.avanzar();
}

main();
