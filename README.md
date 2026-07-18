# Valo

Valo es una herramienta web progresiva (PWA) de consulta y conversión rápida de divisas en tiempo real diseñada para el mercado de Venezuela.

## 🚀 Características
*   **Conversión en tiempo real**: Tasas de Dólar Oficial (BCV), Euro Oficial (BCV), USDT (Binance P2P) y Tasa Propia/Personalizada.
*   **Histórico y Tendencias**: Gráficas SVG interactivas con historial de tasas para rangos de 10 días, 1 mes, 3 meses, 6 meses y 1 año.
*   **Buscador Histórico**: Permite consultar tasas de fechas anteriores para Dólar BCV, Euro BCV y Dólar Paralelo.
*   **Soporte Offline (PWA)**: Funciona sin conexión a internet una vez instalada en tu PC o móvil.
*   **Ajustes de Diseño**: Personalización del color de acento, tema claro/oscuro y estilos de fondo.

## 🛠️ Stack Tecnológico
*   HTML5 y CSS3 (Vanilla + Tailwind CSS v3 vía CDN).
*   JavaScript (ES6 Modules).
*   Express JS (Servidor simple para serving local de SPA).
*   Service Worker para soporte de red y caché sin conexión.

## 💻 Ejecución en Local
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   node server.js
   ```
4. Abre [http://localhost:3001](http://localhost:3001) en tu navegador.
