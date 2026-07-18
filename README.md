# ⚡ Valo — Conversor de Divisas Standalone

<p align="center">
  <strong>Una herramienta web progresiva (PWA) de consulta y conversión rápida de divisas en tiempo real diseñada específicamente para el mercado de Venezuela.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versión-v1.0.0-blue?style=for-the-badge&logo=semver" alt="Version">
  <img src="https://img.shields.io/badge/PWA-Soportado-brightgreen?style=for-the-badge&logo=progressive-web-apps" alt="PWA">
  <img src="https://img.shields.io/badge/Diseño-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
</p>

---

## ✨ Características Principales

*   **🔄 Conversión Bidireccional en Vivo**: Conversiones instantáneas de *Divisa ⇄ Bolívares* con cuatro opciones segmentadas:
    *   **🏛️ Dólar Oficial (BCV)**
    *   **🇪🇺 Euro Oficial (BCV)**
    *   **🪙 USDT (Binance P2P)** (con cálculo automático de la brecha/spread cambiario respecto al BCV).
    *   **✍️ Tasa Propia** (personalizada y guardada persistentemente en `localStorage`).
*   **📊 Gráficas de Tendencia Interactivas**: Widget colapsable con curvas SVG interactivas y táctiles que muestran el historial de tasas para rangos de `10d`, `1m`, `3m`, `6m` y `1a`, utilizando caché en memoria para una navegación ultra veloz.
*   **🔍 Buscador Histórico**: Consulta tasas de cambio de fechas anteriores para Dólar BCV, Euro BCV y Dólar Paralelo con un selector inteligente que limpia el estado al alternar entre divisas.
*   **🎨 Personalización Premium**: Cambia el color de acento, el tema (Claro / Oscuro) y el fondo (*Sólido Pizarra*, *Aurora Cósmica*, *Rejilla Cibernética*) adaptándose y sincronizándose con la barra de navegación del móvil.
*   **📶 Soporte Offline-First**: Funciona 100% sin conexión una vez instalada en tu ordenador o dispositivo móvil gracias a su Service Worker integrado.

---

## 🛠️ Stack Tecnológico

*   **Frontend**: HTML5, CSS3 (Vanilla + Tailwind CSS v3 vía CDN).
*   **Lógica**: JavaScript (ES6 Modules) sin frameworks pesados para un rendimiento óptimo.
*   **APIs Externas**:
    *   [DolarAPI](https://dolarapi.com/) para cotizaciones oficiales e históricos de tiempo.
    *   [CriptoYa](https://criptoya.com/) y [Yadio](https://yadio.io/) (como fallback) para tasas promedio de Binance P2P.
*   **Servidor**: Express JS (servidor local mínimo de contingencia para Single Page Apps).

---

## 💻 Instalación y Ejecución Local

Para ejecutar Valo en tu máquina de desarrollo de forma local:

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Clona el repositorio e ingresa a la carpeta del proyecto:
   ```bash
   git clone https://github.com/tu-usuario/valo.git
   cd valo
