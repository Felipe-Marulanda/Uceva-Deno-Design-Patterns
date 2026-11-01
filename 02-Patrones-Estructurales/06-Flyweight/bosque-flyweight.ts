/**
 * Patrón Flyweight:
 * Permite compartir los datos que se repiten entre muchos objetos para
 * ahorrar memoria, en lugar de guardarlos una y otra vez.
 *
 * Problema:
 * Un videojuego debe dibujar un bosque con miles de árboles. Cada árbol
 * repetiría el mismo nombre, color y textura, lo que gasta memoria sin
 * necesidad.
 *
 * Solución:
 * Flyweight es adecuado porque los datos comunes de cada tipo de árbol se
 * crean una sola vez y se comparten. Cada árbol solo guarda lo que cambia:
 * su posición.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

import { COLORS } from "../../helpers/colors.ts";

class TipoArbol {
  constructor(
    private nombre: string,
    private color: string,
    private textura: string,
  ) {}

  dibujar(x: number, y: number): void {
    console.log(
      `${this.nombre} (${this.color}, ${this.textura}) en la posición ${x}, ${y}`,
    );
  }
}

class FabricaTiposArbol {
  private tipos: Record<string, TipoArbol> = {};

  obtenerTipo(nombre: string, color: string, textura: string): TipoArbol {
    if (!this.tipos[nombre]) {
      console.log(`%cSe crea el tipo de árbol ${nombre}`, COLORS.red);
      this.tipos[nombre] = new TipoArbol(nombre, color, textura);
    }

    return this.tipos[nombre];
  }

  cantidadTipos(): number {
    return Object.keys(this.tipos).length;
  }
}

class Arbol {
  constructor(
    private x: number,
    private y: number,
    private tipo: TipoArbol,
  ) {}

  dibujar(): void {
    this.tipo.dibujar(this.x, this.y);
  }
}

class Bosque {
  private arboles: Arbol[] = [];

  constructor(private fabrica: FabricaTiposArbol) {}

  plantar(
    x: number,
    y: number,
    nombre: string,
    color: string,
    textura: string,
  ): void {
    const tipo = this.fabrica.obtenerTipo(nombre, color, textura);
    this.arboles.push(new Arbol(x, y, tipo));
  }

  dibujar(): void {
    this.arboles.forEach((arbol) => arbol.dibujar());
  }

  cantidadArboles(): number {
    return this.arboles.length;
  }
}

function main(): void {
  const fabrica = new FabricaTiposArbol();
  const bosque = new Bosque(fabrica);

  console.log("%cPlantando el bosque:", COLORS.blue);
  bosque.plantar(10, 20, "Pino", "verde oscuro", "corteza rugosa");
  bosque.plantar(15, 35, "Pino", "verde oscuro", "corteza rugosa");
  bosque.plantar(30, 12, "Roble", "verde claro", "corteza gruesa");
  bosque.plantar(42, 50, "Roble", "verde claro", "corteza gruesa");
  bosque.plantar(60, 25, "Abedul", "blanco", "corteza lisa");
  bosque.plantar(75, 40, "Pino", "verde oscuro", "corteza rugosa");

  console.log("%cDibujando el bosque:", COLORS.blue);
  bosque.dibujar();

  console.log("%cResumen:", COLORS.blue);
  console.log(`Árboles en el bosque: ${bosque.cantidadArboles()}`);
  console.log(`Tipos de árbol creados: ${fabrica.cantidadTipos()}`);
}

main();
