# ⚡ Valo — Conversor de Divisas Standalone

<p align="center">
  <strong>Una herramienta web progresiva (PWA) de consulta y conversión rápida de divisas en tiempo real diseñada específicamente para el mercado de Venezuela.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versión-v1.7.0-blue?style=for-the-badge&logo=semver" alt="Version">
  <img src="https://img.shields.io/badge/PWA-Soportado-brightgreen?style=for-the-badge&logo=progressive-web-apps" alt="PWA">
  <img src="https://img.shields.io/badge/Offline-100%25_Autónomo-success?style=for-the-badge" alt="Offline Ready">
</p>

---

## ✨ Características Principales

*   **🕒 Historial de Cálculos Integrado**: Sección desplegable que registra cronológicamente cada conversión efectuada (`localStorage`), detallando fecha/hora, divisa, tipo de tasa aplicada, monto de entrada y total resultante, con botones de un toque para copiar montos formateados a 2 decimales para bancos o recargar los valores en los campos de la calculadora.
*   **🏦 Copiado Bancario Estricto a 2 Decimales**: El botón "Copiar número" normaliza estrictamente a dos cifras decimales con coma decimal y sin separadores de miles (ej. `162938,16`), evitando que se trasladen 3 o más decimales que multipliquen por 10 el importe en apps bancarias móviles (Pago Móvil / Transferencias).
*   **✍️ Solución a Copiado en Tasa Personalizada y Montos Redondos**: Eliminación de bloqueos silenciosos al copiar cifras con `0,00` y reconocimiento pleno de etiquetas y símbolos para tasas personalizadas.
*   **📶 Blindaje 100% Offline y Estilos Autónomos**: Hoja de estilos autónoma local (`styles.css`) precacheada en `sw.js` (`valo-v33`), tipografía de sistema de alta fidelidad y contrastes oscuros reforzados para erradicar la pérdida de diseño y textos ilegibles ante fallos de CDN o sesiones offline prolongadas.
*   **⚡ Modo de Prueba Offline por URL (`?test_offline=true`)**: Parámetro especial para auditar y verificar el comportamiento y renderizado completamente offline de la app directamente desde el smartphone sin apagar el Wi-Fi.
*   **🔢 Calculadora Aritmética Integrada (+, −, ×, ÷)**: Posibilidad de escribir y resolver operaciones matemáticas directamente en los campos de entrada de Divisa y Bolívares con barra táctil de operadores rápidos especialmente diseñada para su uso en smartphones.
*   **🏛️ Sincronización en Vivo de Tasa Emitida (Próximo Día / Lunes)**: Aviso informativo y selector unificados entre el cuadro principal y los selectores; al seleccionar `[ ✨ Nueva ]`, el cuadro principal de tasas (Hero Rates) y los diferenciales se actualizan de forma instantánea.
*   **🔄 Conversión Bidireccional en Vivo**: Conversiones instantáneas de *Divisa ⇄ Bolívares* mostrando resultados en formato estándar (`USD`, `EUR`, `USDT`) con cuatro opciones segmentadas:
    *   **🏛️ Dólar Oficial (BCV)** (con spread comparativo vs USDT P2P).
    *   **🇪🇺 Euro Oficial (BCV)** (con spread comparativo vs USDT P2P).
    *   **🪙 USDT (Binance P2P)** (con cálculo automático de la brecha/spread cambiario respecto al BCV).
    *   **✍️ Tasa Personalizada** (guardada persistentemente en `localStorage`).
*   **📊 Diferenciales Cambiarios Duales en el Panel de Tasas**: Indicadores de spread en tiempo real para **USD BCV vs USDT P2P** y el nuevo **EUR BCV vs USDT P2P**, permitiendo comparar ambas tasas oficiales contra el mercado P2P al mismo tiempo.
*   **📐 Selector de Tamaño de Interfaz**: Permite cambiar la escala de la aplicación entre 3 tamaños (*Compacto*, *Normal* y *Amplio*) adaptándose perfectamente a cualquier preferencia de pantalla.
*   **📱 Botón de Refrescar Flotante en Móvil**: Botón de acción flotante (FAB) posicionado de forma fija en la esquina inferior derecha en dispositivos móviles para un acceso rápido y sin esfuerzo al desplazarse por la página.
*   **📊 Gráficas de Tendencia Interactivas**: Widget colapsable con curvas SVG interactivas y táctiles que muestran el historial de tasas para rangos de `10d`, `1m`, `3m`, `6m` y `1a` (incluyendo la variación porcentual diaria en el tooltip táctil).
*   **🔍 Buscador Histórico**: Consulta tasas de cambio de fechas anteriores para Dólar BCV, Euro BCV y Dólar Paralelo (Referencial USDT) con un selector inteligente que limpia el estado al alternar entre divisas.
*   **🎨 Personalización Premium y Modo Claro Ajustado**: Cambia el color de acento, el tema (Claro / Oscuro con legibilidad completa en módulos de tasas) y el fondo (*Sólido Pizarra*, *Aurora Cósmica*, *Rejilla Cibernética*) adaptándose y sincronizándose con la barra de navegación del móvil.
*   **📶 Soporte Offline-First**: Funciona 100% sin conexión una vez instalada en tu ordenador o dispositivo móvil gracias a su Service Worker integrado.

---

## 🛠️ Stack Tecnológico

*   **Frontend**: HTML5, CSS3 (Vanilla + Tailwind CSS v3 vía CDN).
*   **Lógica**: JavaScript (ES6 Modules) sin frameworks pesados para un rendimiento óptimo.
*   **APIs Externas**:
    *   [DolarVzla](https://rates.dolarvzla.com/) para cotizaciones oficiales actuales y emitidas del BCV.
    *   [DolarAPI](https://dolarapi.com/) para históricos y como fallback.
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
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o alternativamente:
   node server.js
   ```
5. Abre tu navegador en la URL indicada por la consola (ej. [http://localhost:3001](http://localhost:3001) o la ruta de archivo `index.html` con parámetros).

---

## 📱 Soporte PWA

Para instalar la aplicación en tu pantalla de inicio en Android, iOS o tu Escritorio:
1. Abre el enlace del sitio desplegado en tu navegador preferido.
2. Haz clic en el botón de **Instalar aplicación** en la barra del navegador o selecciona **Agregar a la pantalla de inicio** en el menú de compartir de Safari (iOS).
