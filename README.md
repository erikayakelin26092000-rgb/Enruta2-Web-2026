# Enruta2 Web 2026

Landing page oficial del sistema de transporte urbano Enrutados Venezuela.

**URL en producción:** https://erikayakelin26092000-rgb.github.io/Enruta2-Web-2026/

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

El bundle se genera en `dist/`.

## Despliegue

Push a `main` dispara automáticamente el workflow `.github/workflows/deploy-web.yml` y publica en GitHub Pages.

## Páginas legales

Las páginas de Términos, Privacidad y Menores están en `public/legal/` y se sirven desde `/legal/*.html` en producción:

- `/legal/terminos.html`
- `/legal/privacidad.html`
- `/legal/menores.html`

## Estructura

```
.
├── public/legal/         Páginas HTML estáticas (Términos, Privacidad, Menores)
├── src/components/       Componentes React (Hero, Footer, FAQ, etc.)
├── src/lib/              Hooks compartidos
├── src/utils/            Utilidades (cn helper)
├── .github/workflows/    CI/CD de deploy
└── .agents/skills/       Skills locales (taste-skill)
```
