# 🚀 Guía Técnica: Despliegue en GitHub Pages

**Última actualización:** 1 de Septiembre de 2026  
**Proyecto:** Enruta2-Web-2026  
**Stack:** Vite 7 + React 19 + TypeScript 5.9 + Tailwind 4

---

## 📋 Arquitectura de Despliegue

```
┌─────────────────────────────────────────────────────────────┐
│                    Local Development                        │
│  npm run dev  →  Vite DevServer @ localhost:5173           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓ (git push origin main)
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Repository                        │
│  • erikayakelin26092000-rgb/Enruta2-Web-2026              │
│  • Default branch: main                                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓ (Webhook trigger)
┌─────────────────────────────────────────────────────────────┐
│              GitHub Actions: deploy-web.yml                 │
│  Step 1: Checkout código                                   │
│  Step 2: Setup Node 22                                     │
│  Step 3: npm ci (instalar deps)                           │
│  Step 4: npm run build (compilar)                         │
│  Step 5: Upload artifact → GitHub Pages                   │
│  Step 6: Deploy desde artifact                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────┐
│            GitHub Pages: Public CDN                         │
│  URL: https://erikayakelin26092000-rgb.github.io/         │
│       Enruta2-Web-2026/                                    │
│                                                             │
│  /Enruta2-Web-2026/                                        │
│  ├── index.html                 (1.58 kB)                 │
│  ├── assets/                                               │
│  │   ├── index-B_vLP3NC.js     (317.76 kB)                │
│  │   └── index-DhiR-0eN.css    (73.87 kB)                 │
│  └── legal/                                                │
│      ├── privacidad.html                                   │
│      ├── terminos.html                                     │
│      └── menores.html                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Configuración Crítica

### 1. `vite.config.ts`

```typescript
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],  // ✅ Plugins correctos
  base: "/Enruta2-Web-2026/",         // ✅ Subpath para GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),  // ✅ Alias para imports
    },
  },
});
```

**Puntos críticos:**
- ✅ NO incluir `viteSingleFile` (problemático)
- ✅ `base` debe coincidir con el nombre del repositorio
- ✅ Plugins listados en orden: react → tailwindcss

### 2. `.github/workflows/deploy-web.yml`

```yaml
name: Deploy Web to GitHub Pages

on:
  push:
    branches: [main]  # ✅ Solo en main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: package-lock.json
      
      - name: Install dependencies
        run: npm ci  # ✅ Usar ci en CI, no install
      
      - name: Build
        run: npm run build  # ✅ Compila a dist/
      
      - name: Setup Pages
        uses: actions/configure-pages@v5
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist  # ✅ Solo subir dist/
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4  # ✅ Deploy desde artifact
```

**Puntos críticos:**
- ✅ Solo `main` branch dispara el deploy
- ✅ Usa `npm ci` (limpia antes de instalar)
- ✅ Sube solo carpeta `dist/`
- ✅ Workflow de 2 trabajos: build → deploy

### 3. `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "03:00"
    groups:
      security-updates:
        dependency-types: ["production"]
        patterns: ["*"]
        update-types: ["patch"]
  
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
```

### 4. `package.json`

```json
{
  "name": "react-vite-tailwind",
  "type": "module",
  "homepage": "/Enruta2-Web-2026/",  // ✅ Coincide con base en Vite
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "vite": "^7.3.2",
    "@vitejs/plugin-react": "^5.1.1",
    "@tailwindcss/vite": "^4.1.17",
    "typescript-eslint": "^8.0.0"
  }
}
```

---

## 🚨 Problemas Comunes y Soluciones

### Problema: Página en Blanco
**Causa:** Plugin `viteSingleFile` incrustando incompleto  
**Solución:** Remover plugin, usar build estándar Vite

```bash
# Identificar el problema
npm run build
# Verificar dist/ tiene archivos JS y CSS separados
ls -lah dist/assets/
```

### Problema: Rutas 404 en Recursos
**Causa:** `base` no configurado en `vite.config.ts`  
**Solución:** Agregar `base: "/Enruta2-Web-2026/"`

```typescript
export default defineConfig({
  base: "/Enruta2-Web-2026/",  // ✅ Obligatorio
  // ...
});
```

### Problema: CSS/JS no cargan
**Causa:** Build incompleto o paths incorrectos  
**Solución:** Validar manualmente

```bash
# 1. Verificar que dist/ tiene contenido
ls -lah dist/
# Debe mostrar: index.html, assets/

# 2. Verificar que index.html referencia correctamente
grep 'src=' dist/index.html
# Debe tener: /Enruta2-Web-2026/assets/index-*.js

# 3. Preview local antes de push
npm run preview
# Acceder a: http://localhost:4173/Enruta2-Web-2026/
```

### Problema: Dos Workflows Compitiendo
**Causa:** Múltiples archivos `.github/workflows/*.yml`  
**Solución:** Mantener uno solo, eliminar otros

```bash
# Listar workflows
ls -la .github/workflows/

# Debe haber SOLO:
# - deploy-web.yml (para production)
# - dependabot-auto-merge.yml (para PRs automáticos)
# - (opcional) pull-request-checks.yml (para testing)
```

---

## 📊 Ciclo de Vida del Deploy

```
1. LOCAL DEVELOPMENT
   ├─ npm run dev      → Servidor local en 5173
   ├─ npm run build    → Genera dist/
   └─ npm run preview  → Valida build en 4173

2. GIT COMMIT & PUSH
   ├─ git add .
   ├─ git commit -m "..."
   └─ git push origin main

3. GITHUB ACTIONS TRIGGER
   ├─ Detecta push a main
   ├─ Ejecuta deploy-web.yml
   │  ├─ Checkout del código
   │  ├─ Setup Node 22
   │  ├─ npm ci (instalar)
   │  ├─ npm run build (compilar)
   │  └─ Upload artifact
   └─ Ejecuta deploy job
      ├─ Deploy a GitHub Pages
      └─ Actualiza URL

4. PRODUCCIÓN
   ├─ CDN GitHub Pages distribuye archivos
   ├─ Usuarios acceden a la URL
   └─ Browser descarga index.html, CSS, JS
      └─ React renderiza la aplicación
```

---

## ✅ Checklist Pre-Deploy

Antes de hacer `git push origin main`:

- [ ] ¿El código compila sin errores? `npm run build`
- [ ] ¿El preview funciona? `npm run preview`
- [ ] ¿TypeScript valida? `npm run typecheck`
- [ ] ¿ESLint pasa? `npm run lint`
- [ ] ¿`vite.config.ts` tiene `base: "/Enruta2-Web-2026/"`?
- [ ] ¿Solo existe `deploy-web.yml` en `.github/workflows/`?
- [ ] ¿Dependabot está configurado?
- [ ] ¿No hay cambios incidentales en archivos críticos?

---

## 🔍 Debugging en Producción

Si el sitio no carga en producción:

### Paso 1: Verificar Workflow
```bash
gh run list --workflow=deploy-web.yml --limit=3
# Si hay X (failed), revisa el log
gh run view <run-id> --log
```

### Paso 2: Verificar Archivo Generado
```bash
# SSH a la máquina o acceder a GitHub Pages
# Abrir inspector de navegador (F12)
# Network tab → index.html → Headers
# Verificar Content-Type: text/html
```

### Paso 3: Verificar Assets
```bash
# Browser console (F12 → Console)
# Buscar errores de 404 en:
# - /Enruta2-Web-2026/assets/index-*.js (debe existir)
# - /Enruta2-Web-2026/assets/index-*.css (debe existir)
```

### Paso 4: Limpiar Cache
```bash
# GitHub Pages tiene CDN con cache
# Esperar 5 minutos o
# Hacer un push vacío:
git commit --allow-empty -m "refresh: trigger deploy"
git push origin main
```

---

## 📈 Monitoreo Continuo

### Dependabot
- Corre automáticamente los lunes a las 3 AM
- Crea PRs para actualizar dependencias
- Auto-merge configurado para PRs de bajo riesgo

### GitHub Actions
- Todos los pushes a `main` disparan deploy
- Status visible en: https://github.com/erikayakelin26092000-rgb/Enruta2-Web-2026/actions

### Uptime
- Sitio alojado en CDN de GitHub Pages (99.9% SLA)
- Monitoreo recomendado: Uptime Robot, Pingdom, etc.

---

## 🎓 Aprendizajes Clave

1. **Plugin `viteSingleFile` es problemático** para React
   - Embebe CSS pero no JS correctamente
   - Usar build estándar Vite es más confiable

2. **`base` en vite.config.ts es crítico** para GitHub Pages
   - Debe coincidir con nombre de repositorio
   - Afecta todas las rutas de assets

3. **Un workflow por objetivo** previene conflictos
   - deploy-web.yml para producción
   - dependabot-auto-merge.yml para automación de PRs
   - Mantener `.github/workflows/` limpia

4. **Dependabot desde el inicio** es mejor
   - Automatiza seguridad
   - Evita acumulación de vulnerabilidades
   - Auto-merge reduce trabajo manual

5. **Siempre validar builds localmente**
   - `npm run build` → `npm run preview`
   - Simula exactamente lo que ve producción
   - Detecta problemas antes de CI/CD

---

## 📞 Recursos

- **Documentación Vite:** https://vitejs.dev/guide/
- **GitHub Pages:** https://pages.github.com/
- **GitHub Actions:** https://github.com/features/actions
- **Dependabot:** https://dependabot.com/
- **React 19:** https://react.dev/

---

*Documento técnico interno - Enruta2-Web-2026*  
*Última revisión: 1 de Septiembre de 2026*
