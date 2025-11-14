# Citas Evento Dorcas 2025

Carrusel de imágenes a pantalla completa para el evento Dorcas 2025.

## Ejecutar Localmente

**Prerrequisitos:** Node.js y Yarn

1. Instalar dependencias:
   ```bash
   yarn install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   yarn dev
   ```

3. Construir para producción:
   ```bash
   yarn build
   ```

## Deploy en GitHub Pages

El proyecto está configurado para hacer deploy automático en GitHub Pages.

### Pasos para activar GitHub Pages:

1. **Habilitar GitHub Pages en el repositorio:**
   - Ve a Settings → Pages en tu repositorio de GitHub
   - En "Source", selecciona "GitHub Actions"

2. **El workflow se ejecutará automáticamente:**
   - Cada vez que hagas push a la rama `main` o `master`
   - El workflow construirá y desplegará automáticamente la aplicación

3. **Tu sitio estará disponible en:**
   - `https://[tu-usuario].github.io/[nombre-del-repositorio]/`

### Nota importante:

Si el nombre de tu repositorio no es `citas-evento-dorcas-2025`, necesitarás actualizar la variable `VITE_BASE_PATH` en el archivo `.github/workflows/deploy.yml` con el nombre correcto de tu repositorio.
