![Banner IterLens](./src/assets/banner.png)

> _See every step of the journey._

Landing page estática para **IterLens**, una plataforma SaaS que permite a plantas manufactureras reportar fallas de mantenimiento vía WhatsApp y visualizar KPIs en tiempo real.

---

## Estructura de archivos

```
iterlens/
├── assets/
|    ├── logo.png
|    ├── banner.png
├── src/
|    ├── index.html     # Estructura y contenido HTML
|    ├── styles.css     # Estilos, variables CSS y animaciones
|    ├── main.js        # Interactividad (cursor, scroll reveal, contadores, chat)
└── README.md
```

---

## Secciones

| Sección           | Descripción                                                       |
| ----------------- | ----------------------------------------------------------------- |
| **Hero**          | Título principal, subtítulo y mockup animado del chat de WhatsApp |
| **Stats bar**     | 4 contadores animados al hacer scroll                             |
| **Ticker**        | Banda de características en loop continuo                         |
| **El problema**   | 4 tarjetas describiendo los puntos de dolor                       |
| **Cómo funciona** | 4 pasos del flujo operario → dashboard                            |
| **Features**      | 6 tarjetas de funcionalidades con iconos SVG                      |
| **Métricas**      | Números de impacto con glow effect                                |
| **Precios**       | 3 planes: Starter, Pro (destacado), Enterprise                    |
| **CTA**           | Llamado a acción final                                            |
| **Footer**        | Links y copyright                                                 |

---

## Tipografías

Cargadas desde Google Fonts, no requieren instalación local:

- **Bebas Neue** — títulos y números grandes
- **DM Sans** — cuerpo de texto y botones
- **JetBrains Mono** — etiquetas de sección, código, datos técnicos

---

## Variables CSS

Todas las variables de diseño están centralizadas en `:root` en `styles.css`:

```css
:root {
  --bg: #070b12; /* Fondo principal */
  --bg2: #0c1120; /* Fondo secundario */
  --accent: #00c8d4; /* Cian — color de marca */
  --accent2: #0ea5e9; /* Cian alternativo */
  --teal: #00e5cc; /* Teal para gradientes */
  --text: #e8f0f8; /* Texto principal */
  --muted: #6b8aad; /* Texto secundario */
  --border: #1e2d45; /* Bordes y líneas */
  --card: #0d1626; /* Fondo de tarjetas */
}
```

---

## JavaScript — `main.js`

| Función                | Descripción                                             |
| ---------------------- | ------------------------------------------------------- |
| `animateCursor()`      | Cursor personalizado con lag suavizado                  |
| Scroll listener        | Agrega clase `scrolled` al nav al bajar                 |
| `IntersectionObserver` | Activa `.reveal` al entrar en viewport                  |
| `animateCounter()`     | Cuenta del 0 al valor objetivo al llegar a stats bar    |
| Chat animation         | Muestra los mensajes del mockup en secuencia con delays |

---

## Uso

Abre `index.html` directamente en el navegador o sirve la carpeta con cualquier servidor estático:

```bash
# Python
python -m http.server 3000

# Node (npx)
npx serve .
```

---

## Personalización rápida

**Cambiar colores de marca** → edita `--accent` y `--teal` en `:root` de `styles.css`.

**Cambiar precios** → busca las clases `.pricing-price` en `index.html`.

**Cambiar contadores de stats** → edita los valores en `animateCounter('c1', 18)` etc. en `main.js`.

**Agregar sección** → crea un `<section>` con clase `reveal` en `index.html` y agrega los estilos correspondientes en `styles.css`.

---

## Íconos

Todos los íconos son SVG inline estilo **Feather Icons** — sin dependencias externas, sin requests adicionales.

---

## Responsive

El layout colapsa a una sola columna en pantallas menores a `1024px`. El mockup del teléfono se oculta en mobile (`display: none`).

---

_© 2026 IterLens_
