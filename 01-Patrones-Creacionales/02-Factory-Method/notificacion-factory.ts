/**
 * Patrón Factory Method:
 * Define un método para crear objetos y permite que las clases hijas decidan
 * qué objeto concreto deben crear.
 *
 * Problema:
 * Una aplicación debe enviar notificaciones por correo, SMS o mensaje push,
 * pero el código principal no debería conocer las clases concretas.
 *
 * Solución:
 * Factory Method es adecuado porque separa la creación de cada notificación
 * y permite agregar nuevos canales sin cambiar la lógica que envía mensajes.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

import { COLORS } from "../../helpers/colors.ts";

interface Notificacion {
  enviar(mensaje: string): void;
}

class NotificacionCorreo implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`Correo enviado: ${mensaje}`);
  }
}

class NotificacionSMS implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`SMS enviado: ${mensaje}`);
  }
}

class NotificacionPush implements Notificacion {
  enviar(mensaje: string): void {
    console.log(`Notificación push enviada: ${mensaje}`);
  }
}

abstract class ServicioNotificaciones {
  protected abstract crearNotificacion(): Notificacion;

  enviarNotificacion(mensaje: string): void {
    const notificacion = this.crearNotificacion();
    notificacion.enviar(mensaje);
  }
}

class ServicioCorreo extends ServicioNotificaciones {
  protected crearNotificacion(): Notificacion {
    return new NotificacionCorreo();
  }
}

class ServicioSMS extends ServicioNotificaciones {
  protected crearNotificacion(): Notificacion {
    return new NotificacionSMS();
  }
}

class ServicioPush extends ServicioNotificaciones {
  protected crearNotificacion(): Notificacion {
    return new NotificacionPush();
  }
}

function main(): void {
  const servicios: ServicioNotificaciones[] = [
    new ServicioCorreo(),
    new ServicioSMS(),
    new ServicioPush(),
  ];

  console.log("%cEnvío de notificaciones:", COLORS.blue);
  for (const servicio of servicios) {
    servicio.enviarNotificacion("Tu pedido ha sido confirmado.");
  }
}

main();
