# Patrones de diseño

Taller de Arquitectura de Software de la UCEVA sobre patrones de diseño.
Los ejemplos están escritos en TypeScript y se ejecutan con Deno.

## Integrantes

- Felipe Marulanda
- Santiago Santacruz

## Patrones utilizados

Creacionales: Builder, Factory Method y Singleton.

Estructurales: Adapter, Flyweight y Decorator.

De comportamiento: Strategy, Command, Observer y State.

## Descripción de los ejercicios

Cada ejercicio es independiente y muestra un problema pequeño resuelto con un
patrón de diseño. Al inicio de cada archivo se explica qué hace el patrón, qué
problema resuelve y por qué es adecuado.

### Patrones creacionales

1. Builder: construye pedidos de hamburguesa paso a paso, permitiendo elegir
   solo las opciones necesarias.
   - Archivo: `01-Patrones-Creacionales/01-Builder/pedido-builder.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/01-Builder/pedido-builder.ts`

2. Factory Method: crea notificaciones por correo, SMS o mensaje push sin que
   el código principal conozca las clases concretas.
   - Archivo: `01-Patrones-Creacionales/02-Factory-Method/notificacion-factory.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/02-Factory-Method/notificacion-factory.ts`

3. Singleton: mantiene una única configuración compartida de la aplicación y
   demuestra que sus accesos usan la misma instancia.
   - Archivo: `01-Patrones-Creacionales/06-Singleton/configuracion-singleton.ts`
   - Ejecución: `deno run 01-Patrones-Creacionales/06-Singleton/configuracion-singleton.ts`

### Patrones estructurales

4. Adapter: adapta una impresora antigua para que pueda utilizarse con la
   interfaz de impresión que espera un sistema nuevo.
   - Archivo: `02-Patrones-Estructurales/01-Adapter/impresora-adapter.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/01-Adapter/impresora-adapter.ts`

5. Flyweight: dibuja un bosque de un videojuego donde los árboles del mismo
   tipo comparten nombre, color y textura, y cada uno guarda solo su posición.
   - Archivo: `02-Patrones-Estructurales/06-Flyweight/bosque-flyweight.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/06-Flyweight/bosque-flyweight.ts`

6. Decorator: prepara pedidos de una cafetería agregando extras como leche,
   chocolate o crema a un café, sumando descripción y precio sin crear una
   clase por cada combinación.
   - Archivo: `02-Patrones-Estructurales/04-Decorator/cafe-decorator.ts`
   - Ejecución: `deno run 02-Patrones-Estructurales/04-Decorator/cafe-decorator.ts`

### Patrones de comportamiento

7. Strategy: calcula el costo de envío con estrategias terrestre, express y
   punto de recogida, intercambiables durante la ejecución.
   - Archivo: `03-Patrones-Comportamiento/08-Strategy/envio-strategy.ts`
   - Ejecución: `deno run 03-Patrones-Comportamiento/08-Strategy/envio-strategy.ts`

8. Command: encapsula las acciones de un reproductor de música para que un
   control pueda ejecutarlas sin depender directamente del reproductor.
   - Archivo: `03-Patrones-Comportamiento/02-Command/reproductor-command.ts`
   - Ejecución: `deno run 03-Patrones-Comportamiento/02-Command/reproductor-command.ts`

9. Observer: avisa a los clientes suscritos de una tienda cuando cambia el
   precio de un producto, y permite cancelar la suscripción.
   - Archivo: `03-Patrones-Comportamiento/06-Observer/oferta-observer.ts`
   - Ejecución: `deno run 03-Patrones-Comportamiento/06-Observer/oferta-observer.ts`

10. State: controla el flujo de un artículo de blog que pasa de borrador a
    revisión y luego a publicado, con un comportamiento distinto en cada
    estado.
    - Archivo: `03-Patrones-Comportamiento/07-State/documento-state.ts`
    - Ejecución: `deno run 03-Patrones-Comportamiento/07-State/documento-state.ts`

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
