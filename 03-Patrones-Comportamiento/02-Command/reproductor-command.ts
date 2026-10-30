/**
 * Patrón Command:
 * Encapsula una solicitud como un objeto para separar quien ejecuta una
 * acción de quien conoce la forma de realizarla.
 *
 * Problema:
 * Los botones de un control deben manejar un reproductor de música sin
 * depender directamente de la implementación de sus acciones.
 *
 * Solución:
 * Command es adecuado porque cada acción se convierte en un objeto que puede
 * asignarse a un botón y ejecutarse sin acoplar el control al reproductor.
 *
 * https://refactoring.guru/es/design-patterns/command
 */

import { COLORS } from "../../helpers/colors.ts";

interface Comando {
  ejecutar(): void;
}

class Reproductor {
  reproducir(): void {
    console.log("Reproduciendo la canción.");
  }

  pausar(): void {
    console.log("Canción pausada.");
  }

  detener(): void {
    console.log("Reproducción detenida.");
  }
}

class ReproducirCommand implements Comando {
  constructor(private reproductor: Reproductor) {}

  ejecutar(): void {
    this.reproductor.reproducir();
  }
}

class PausarCommand implements Comando {
  constructor(private reproductor: Reproductor) {}

  ejecutar(): void {
    this.reproductor.pausar();
  }
}

class DetenerCommand implements Comando {
  constructor(private reproductor: Reproductor) {}

  ejecutar(): void {
    this.reproductor.detener();
  }
}

class ControlMusica {
  private comandos: Record<string, Comando> = {};

  asignarComando(boton: string, comando: Comando): void {
    this.comandos[boton] = comando;
  }

  presionarBoton(boton: string): void {
    const comando = this.comandos[boton];

    if (!comando) {
      console.log(`No hay un comando asignado al botón ${boton}.`);
      return;
    }

    comando.ejecutar();
  }
}

function main(): void {
  const reproductor = new Reproductor();
  const control = new ControlMusica();

  control.asignarComando("reproducir", new ReproducirCommand(reproductor));
  control.asignarComando("pausar", new PausarCommand(reproductor));
  control.asignarComando("detener", new DetenerCommand(reproductor));

  console.log("%cControl del reproductor:", COLORS.blue);
  control.presionarBoton("reproducir");
  control.presionarBoton("pausar");
  control.presionarBoton("detener");
}

main();
