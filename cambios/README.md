![Banner IterLens](./src/assets/banner.png)

> _See every step of the journey._

Landing page estática para **IterLens**, una plataforma SaaS que permite a plantas manufactureras reportar fallas de mantenimiento vía WhatsApp y visualizar KPIs en tiempo real.

---

## Estructura de archivos

```
IterLens-landingPage/
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── banner.png
│   ├── empresas/                    # 🏢 Landing page para empresas
│   │   ├── index.html              # Página principal
│   │   ├── styles.css              # Estilos y animaciones
│   │   ├── main.js                 # Interactividad (cursor, scroll reveal, contadores, chat)
│   │   └── dashboard.js            # Lógica de gráficos del dashboard
│   └── operarios/                   # 👷 TODO - Landing page para operarios
│       ├── index.html              # [Por implementar]
│       ├── styles.css              # [Por implementar]
│       └── main.js                 # [Por implementar]
└── README.md
```

### 📍 Descripciones

- **`empresas/`** — Landing page diseñada para gerentes y responsables de plantas de manufactura. Presenta la solución desde la perspectiva de ROI, ahorro de costos y KPIs en tiempo real.
- **`operarios/`** — [TODO] Landing page orientada a operarios de planta. Debe enfatizar la facilidad de uso, integración con WhatsApp, y la ausencia de capacitación técnica requerida.

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
| **Precios**       | Plan basado en ahorro                                             |
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
  --bg: #050a0f;
  --bg2: #0a0f1a;
  --bg3: #0f172a;
  --border: #334155;
  --border-light: rgba(100, 116, 139, 0.2);
  --accent: #06b6d4;
  --accent2: #0284c7;
  --accent-glow: rgba(6, 182, 212, 0.2);
  --accent-dim: rgba(6, 182, 212, 0.35);
  --teal: #14b8a6;
  --text: #f1f5f9;
  --muted: #94a3b8;
  --muted-light: #cbd5e1;
  --card: #0f172a;
  --error: #f87171;
  --success: #06b6d4;
  --phone-header: #1f2c34;
  --phone-text: #e9edef;
  --phone-muted: #8696a0;
  --phone-bg: #0b141a;
  --msg-in-bg: #202c33;
  --msg-out-bg: #005c4b;
  --radius-lg: 28px;
  --radius-md: 18px;
  --space-2xl: 120px;
  --input-bg: rgba(15, 23, 42, 0.95);
  --shadow-deep: 0 40px 120px rgba(0, 0, 0, 0.35);
  --positive: #22c55e;
  --card-hover: rgba(30, 41, 59, 0.92);
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
