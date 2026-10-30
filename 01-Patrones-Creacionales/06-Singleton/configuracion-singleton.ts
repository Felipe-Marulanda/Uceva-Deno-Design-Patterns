/**
 * Patrón Singleton:
 * Garantiza que una clase tenga una sola instancia y ofrece un punto de
 * acceso común a esa instancia.
 *
 * Problema:
 * Una aplicación necesita compartir la configuración general, pero no debe
 * crear varias configuraciones independientes con valores diferentes.
 *
 * Solución:
 * Singleton es adecuado porque centraliza la configuración en un único
 * objeto y todos los módulos pueden consultar los mismos valores.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../../helpers/colors.ts";

class ConfiguracionApp {
  private static instancia: ConfiguracionApp;
  private configuracion: Record<string, string> = {};

  private constructor() {}

  static obtenerInstancia(): ConfiguracionApp {
    if (!ConfiguracionApp.instancia) {
      ConfiguracionApp.instancia = new ConfiguracionApp();
      console.log("Se creó la configuración única de la aplicación.");
    }

    return ConfiguracionApp.instancia;
  }

  establecer(clave: string, valor: string): void {
    this.configuracion[clave] = valor;
  }

  obtener(clave: string): string | undefined {
    return this.configuracion[clave];
  }
}

function main(): void {
  const configuracionPrincipal = ConfiguracionApp.obtenerInstancia();
  configuracionPrincipal.establecer("idioma", "español");
  configuracionPrincipal.establecer("modo", "producción");

  const configuracionSecundaria = ConfiguracionApp.obtenerInstancia();

  console.log("%cConfiguración compartida:", COLORS.blue);
  console.log(`Idioma: ${configuracionSecundaria.obtener("idioma")}`);
  console.log(`Modo: ${configuracionSecundaria.obtener("modo")}`);
  console.log(
    `¿Las dos variables usan la misma instancia?: ${
      configuracionPrincipal === configuracionSecundaria
    }`,
  );
}

main();
