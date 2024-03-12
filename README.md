# Astro Bento Grid

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Características:

- ✅ Construído en Astro
- ✅ Diseño basado en **Bento Grid**
- ✅ 100% responsive

## 🚀 Estructura del proyecto

El proyecto cuenta con la siguiente estructura de directorios y archivos:
```text
├── public/                 // Recursos estáticos (imágenes, fuentes, JSON...)
├── src/                    // Código fuente
│   ├── components/         // Componentes
│   ├── content/            // Contenido en formato Markdown o MDX.
│   ├── layouts/            // Layouts
│   ├── styles/            // Hojas de estilo
│   └── pages/              // Páginas
├── astro.config.mjs        // Configuración de Astro
├── README.md               // Este archivo de README
├── package.json
└── tsconfig.json           // Configuración de TypeScript
```
## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde la terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia el entorno de desarrollo en `localhost:4321`      |
| `npm run build`           | Construye la versión de producción en `./dist/`          |
| `npm run preview`         | Inicia el entorno de producción, antes del despliegue     |
| `npm run astro ...`       | Ejecuta comandos de la CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtiene la ayuda del CLI de Astro                     |
