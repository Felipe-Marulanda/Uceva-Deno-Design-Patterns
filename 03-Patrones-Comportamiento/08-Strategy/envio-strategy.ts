/**
 * Patrón Strategy:
 * Define una familia de algoritmos, los encapsula y permite intercambiarlos.
 *
 * Problema:
 * Una tienda necesita calcular el costo de envío con varias opciones y el
 * cálculo puede cambiar según la opción elegida por el cliente.
 *
 * Solución:
 * Strategy es adecuado porque cada forma de envío tiene su propio cálculo y
 * el pedido puede cambiar de estrategia sin modificar su estructura.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

import { COLORS } from "../../helpers/colors.ts";

interface EstrategiaEnvio {
  calcularCosto(peso: number): number;
}

class EnvioTerrestre implements EstrategiaEnvio {
  calcularCosto(peso: number): number {
    return 5000 + peso * 2000;
  }
}

class EnvioExpress implements EstrategiaEnvio {
  calcularCosto(peso: number): number {
    return 12000 + peso * 3500;
  }
}

class PuntoDeRecogida implements EstrategiaEnvio {
  calcularCosto(peso: number): number {
    return 3000 + peso * 1000;
  }
}

class CalculadoraEnvio {
  constructor(private estrategia: EstrategiaEnvio) {}

  cambiarEstrategia(estrategia: EstrategiaEnvio): void {
    this.estrategia = estrategia;
  }

  calcular(peso: number): number {
    return this.estrategia.calcularCosto(peso);
  }
}

function mostrarCosto(
  calculadora: CalculadoraEnvio,
  nombre: string,
  peso: number,
): void {
  const costo = calculadora.calcular(peso);
  console.log(`${nombre}: $${costo.toLocaleString("es-CO")}`);
}

function main(): void {
  const pesoDelPedido = 2;
  const calculadora = new CalculadoraEnvio(new EnvioTerrestre());

  console.log("%cCostos de envío para un pedido de 2 kg:", COLORS.blue);
  mostrarCosto(calculadora, "Envío terrestre", pesoDelPedido);

  calculadora.cambiarEstrategia(new EnvioExpress());
  mostrarCosto(calculadora, "Envío express", pesoDelPedido);

  calculadora.cambiarEstrategia(new PuntoDeRecogida());
  mostrarCosto(calculadora, "Punto de recogida", pesoDelPedido);
}

main();
