# Patrones de diseño

Taller de Arquitectura de Software de la UCEVA sobre patrones de diseño.
Los ejemplos están escritos en TypeScript y se ejecutan con Deno.

## Integrantes

- Felipe Marulanda
- Santiago **[completar nombres y apellidos]**

## Ejercicios

Cada ejercicio es independiente y muestra un problema pequeño resuelto con un
patrón de diseño.

### Patrones creacionales

1. **Builder** — Construye pedidos de hamburguesa paso a paso, permitiendo
   elegir solo las opciones necesarias.
   - Archivo: `01-Patrones-Creacionales/01-Builder/pedido-builder.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/01-Builder/pedido-builder.ts`

2. **Factory Method** — Crea notificaciones por correo, SMS o mensaje push
   sin que el código principal conozca las clases concretas.
   - Archivo: `01-Patrones-Creacionales/02-Factory-Method/notificacion-factory.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/02-Factory-Method/notificacion-factory.ts`

3. **Singleton** — Mantiene una única configuración compartida de la
   aplicación y demuestra que sus accesos usan la misma instancia.
   - Archivo: `01-Patrones-Creacionales/06-Singleton/configuracion-singleton.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/06-Singleton/configuracion-singleton.ts`

### Patrones estructurales

4. **Adapter** — Adapta una impresora antigua para que pueda utilizarse con la
   interfaz de impresión que espera un sistema nuevo.
   - Archivo: `02-Patrones-Estructurales/01-Adapter/impresora-adapter.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/01-Adapter/impresora-adapter.ts`

5. **Flyweight** — **Pendiente (Santiago)**.
   - Archivo: `02-Patrones-Estructurales/06-Flyweight/flyweight.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/06-Flyweight/flyweight.ts`

6. **Decorator** — **Pendiente (Santiago)**.
   - Archivo: `02-Patrones-Estructurales/04-Decorator/decorator.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/04-Decorator/decorator.ts`

### Patrones de comportamiento

7. **Strategy** — Calcula el costo de envío con estrategias terrestre,
   express y punto de recogida, intercambiables durante la ejecución.
   - Archivo: `03-Patrones-Comportamiento/08-Strategy/envio-strategy.ts`
   - Ejecución: `deno run 03-Patrones-Comportamiento/08-Strategy/envio-strategy.ts`

8. **Command** — Encapsula las acciones de un reproductor de música para que
    un control pueda ejecutarlas sin depender directamente del reproductor.
    - Archivo: `03-Patrones-Comportamiento/02-Command/reproductor-command.ts`
    - Ejecución: `deno run 03-Patrones-Comportamiento/02-Command/reproductor-command.ts`

9. **Observer** — **Pendiente (Santiago)**.
    - Archivo: `03-Patrones-Comportamiento/06-Observer/observer.ts`
    - Ejecución: `deno run 03-Patrones-Comportamiento/06-Observer/observer.ts`

10. **State** — **Pendiente (Santiago)**.
    - Archivo: `03-Patrones-Comportamiento/07-State/state.ts`
    - Ejecución: `deno run 03-Patrones-Comportamiento/07-State/state.ts`

## Ejecución

Desde la raíz del repositorio, ejecuta el comando indicado para cada archivo.
Por ejemplo:

```bash
deno run 01-Patrones-Creacionales/01-Builder/pedido-builder.ts
```

También se puede ejecutar un archivo desde su carpeta:

```bash
cd 01-Patrones-Creacionales/01-Builder
deno run pedido-builder.ts
```

## Recursos

- [Refactoring Guru](https://refactoring.guru/es/design-patterns/catalog)
- [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans)
- [Patterns.dev](https://www.patterns.dev/)
- [Java Design Patterns](https://github.com/iluwatar/java-design-patterns)
- [Design Patterns TypeScript](https://github.com/torokmark/design_patterns_in_typescript)
