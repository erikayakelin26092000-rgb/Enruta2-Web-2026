# Agentes / Convenciones del proyecto

## Entorno

- Stack: Vite 7 + React 19 + TypeScript 5.9 + Tailwind 4.
- Gestor de paquetes declarado: `package.json` con `"type": "module"`.
- En este equipo el binario `node` **no está instalado** (los symlinks `npm`/`pnpm`/`yarn` están rotos). Antes de cualquier `npm install` o `pnpm install`, instalar Node 20+ (recomendado 22 LTS) y `npm` con `sudo apt install -y nodejs npm`.

## Scripts

- `npm run dev` — servidor Vite
- `npm run build` — build de producción
- `npm run preview` — preview del build
- `npm run lint` — ESLint (flat config)
- `npm run lint:fix` — ESLint con autofix
- `npm run typecheck` — `tsc --noEmit`

## Lint y TypeScript

- Configuración ESLint flat: `eslint.config.js` (typescript-eslint v8, react-hooks, react-refresh).
- `tsconfig.json` usa `moduleResolution: "bundler"` con alias `@/*` → `src/*`.
- Reglas estrictas activas: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitOverride`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`, `verbatimModuleSyntax`.
- Tras instalar deps, ejecutar siempre:
  1. `npm run typecheck`
  2. `npm run lint`

## Instalar dependencias de lint (una vez)

```bash
npm install -D eslint@9 @eslint/js typescript-eslint \
  eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```