/**
 * Patrón Adapter:
 * Permite que una clase con una interfaz diferente pueda usarse donde se
 * espera otra interfaz.
 *
 * Problema:
 * El sistema nuevo de una oficina espera una impresora con el método
 * `print()`, pero la impresora antigua solo tiene `printDocument()`.
 *
 * Solución:
 * Adapter es adecuado porque crea una conexión entre las dos interfaces sin
 * modificar la impresora antigua ni el código del sistema nuevo.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { COLORS } from "../../helpers/colors.ts";

interface Impresora {
  print(documento: string): void;
}

class ImpresoraAntigua {
  printDocument(documento: string): void {
    console.log(`Impresora antigua: ${documento}`);
  }
}

class ImpresoraAdapter implements Impresora {
  constructor(private impresoraAntigua: ImpresoraAntigua) {}

  print(documento: string): void {
    this.impresoraAntigua.printDocument(documento);
  }
}

class Oficina {
  imprimirDocumento(impresora: Impresora, documento: string): void {
    impresora.print(documento);
  }
}

function main(): void {
  const impresoraAntigua = new ImpresoraAntigua();
  const impresora = new ImpresoraAdapter(impresoraAntigua);
  const oficina = new Oficina();

  console.log("%cImprimiendo documento:", COLORS.blue);
  oficina.imprimirDocumento(impresora, "Informe de ventas de octubre");
}

main();
