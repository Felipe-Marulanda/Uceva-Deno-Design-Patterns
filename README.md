# Patrones de diseño con Deno

Colección de ejercicios TypeScript del taller de Arquitectura de Software de
la UCEVA. Los ejemplos se ejecutan con Deno y se agrupan en patrones
creacionales, estructurales y de comportamiento. El showcase web estático no
requiere backend.

## Aplicaciones

- URL de Pages configurada para el showcase: <https://felipe-marulanda.github.io/Uceva-Deno-Design-Patterns/>
- Repositorio: <https://github.com/Felipe-Marulanda/Uceva-Deno-Design-Patterns>

## Requisitos e instalación

- Deno para ejecutar los ejercicios.
- Node.js y npm para construir el showcase estático.

```bash
npm ci
npm run build -- --base-href "/Uceva-Deno-Design-Patterns/"
deno run 01-Patrones-Creacionales/01-Builder/pedido-builder.ts
```

Para servir el resultado localmente:

```bash
cd dist
python3 -m http.server 8000
```

## Estructura

```text
01-Patrones-Creacionales/       Ejercicios creacionales
02-Patrones-Estructurales/      Ejercicios estructurales
03-Patrones-Comportamiento/     Ejercicios de comportamiento
helpers/                        Utilidades compartidas
showcase/                       Sitio estático para Pages
scripts/build.mjs               Copia el sitio y establece el base-href
.github/workflows/              CI/CD y comprobación de disponibilidad
```

## Convención de commits

Se usa Conventional Commits: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`,
`ci`, `build` y `style`. Mantén cada commit pequeño y enfocado.

## Recursos

- [Refactoring Guru](https://refactoring.guru/es/design-patterns/catalog)
- [Patterns.dev](https://www.patterns.dev/)
- [Design Patterns TypeScript](https://github.com/torokmark/design_patterns_in_typescript)
