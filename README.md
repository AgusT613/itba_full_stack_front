# 🔷 ITBANK - Frontend Homebanking Next.js 🔷

Plataforma moderna de **Homebanking** desarrollada con **Next.js 16 (App Router)** y **React 19**, diseñada para ofrecer una experiencia bancaria digital completa, intuitiva y segura.

> 🔗 **Backend del proyecto (FastAPI)**: [itba-full-stack-back-fastapi](https://github.com/AgusT613/itba-full-stack-back-fastapi) 🚀

---

## 📑 Tabla de Contenidos

- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
  - [Prerrequisitos](#prerrequisitos)
  - [Variables de Entorno](#variables-de-entorno)
  - [Comandos Disponibles](#comandos-disponibles)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)

---

## ✨ Características Principales

La plataforma cuenta con un portal público y un panel privado de homebanking protegido por sesiones:

1. **🏠 Landing Page Pública**:
   - Presentación de servicios bancarios, recursos destacados, accesos rápidos y cotizaciones.
   - Buscador de sucursales bancarias y suscripción a newsletter en el pie de página.
   - Páginas legales: términos y condiciones, política de privacidad y preguntas frecuentes (FAQ).

2. **🔐 Autenticación y Control de Acceso**:
   - Registro de nuevos usuarios e inicio de sesión con JWT (`session_token`).
   - Guardián de rutas mediante la convención moderna [`proxy.ts`](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy) de Next.js, protegiendo todas las rutas bajo `/inicio/*`.

3. **📊 Panel de Control y Cuentas**:
   - Vista general de saldo disponible en pesos y dólares.
   - Detalle de cuentas bancarias asociadas con número de cuenta y CBU.
   - Registro en tiempo real de actividad y últimos movimientos.

4. **💳 Visualizador y Gestión de Tarjetas**:
   - Visualización gráfica de tarjetas de crédito y débito (número enmascarado, fecha de vencimiento y CVV).
   - Navegación a vista detallada por tarjeta (`/inicio/tarjetas/[tarjetaId]`).

5. **💸 Transferencias y Libreta de Alias**:
   - Envío de transferencias entre cuentas propias o a destinatarios externos por Alias/CBU.
   - Gestión de contactos frecuentes mediante libreta de alias guardados (`/inicio/agregar-alias`).
   - Tabla histórica de transferencias con detalle de emisor, receptor, fecha y monto.

6. **📈 Calculadora y Solicitud de Préstamos**:
   - Calculadora financiera interactiva de cuotas mensuales basada en capital, interés anual y plazos de amortización.
   - Formulario de solicitud formal de préstamo indicando cuenta de acreditación y sucursal.
   - Listado y cancelación de préstamos activos.

7. **💱 Conversor de Monedas en Tiempo Real**:
   - Conversión dinámica multidivisa (ARS, USD, EUR, etc.) con consulta a tipos de cambio actualizados.

8. **💰 Depósitos y Servicios**:
   - Carga y acreditación de saldo en cuentas.
   - Sección de pago de facturas y servicios (`/inicio/pagos` y `/inicio/facturas`).

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 16.4.5](https://nextjs.org/) con App Router y React Server Components (RSC).
- **Librería UI**: [React 19.3.1](https://react.dev/) aprovechando `useActionState` y `cache()`.
- **Lenguaje**: [TypeScript 6.0.3](https://www.typescriptlang.org/).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) combinado con CSS Modules (`*.module.css`) y CSS personalizado.
- **Iconos**: [Lucide React 1.70.0](https://lucide.dev/).
- **Optimización de Imágenes**: [Sharp 0.35.5](https://sharp.pixelplumbing.com/) junto a `next/image`.
- **Linter & Formatter**: [Biome 2.6](https://biomejs.dev/) (linter, formateador y organizador de imports unificado en Rust).
- **Backend API**: [FastAPI](https://github.com/AgusT613/itba-full-stack-back-fastapi).

---

## 🏗️ Arquitectura del Proyecto

- **Renderizado Híbrido**: Las vistas de consulta de datos (`/inicio/*`) se resuelven como Server Components, reduciendo el bundle de JavaScript en el cliente y cacheando llamadas concurrentes con `cache()` de React.
- **Server Actions (`'use server'`)**: Todas las operaciones de mutación (transferencias, solicitud de préstamos, depósitos, alias) se ejecutan mediante Server Actions directas en `actions/`, consumidas en el cliente mediante el hook `useActionState` de React 19.
- **Proxy de Enrutamiento**: Archivo `proxy.ts` que intercepta solicitudes entrantes y redirige usuarios no autenticados a `/login/iniciar-sesion`.

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos

- **Node.js**: Versión 20.x o superior (ver `.nvmrc`).
- **npm** o **pnpm**.
- Tener en ejecución el backend en [FastAPI](https://github.com/AgusT613/itba-full-stack-back-fastapi).

### Variables de Entorno

Crear un archivo `.env` o `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_URL="http://0.0.0.0:8000"
```

### Comandos Disponibles

1. **Clonar el repositorio e ingresar a la carpeta**:

   ```bash
   git clone https://github.com/AgusT613/itba_full_stack_front.git
   cd itba_full_stack_front
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

   Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

4. **Compilar para producción**:

   ```bash
   npm run build
   npm run start
   ```

5. **Ejecutar las pruebas unitarias y de componentes (Vitest)**:

   ```bash
   npm test
   ```

6. **Ejecutar las pruebas E2E (Playwright)**:

   ```bash
   npm run test:e2e
   ```

7. **Ejecutar el linter y formateador (Biome)**:
   ```bash
   npm run lint        # Verificación de lint y formato
   npm run lint:fix    # Corrección automática de lint e imports
   npm run format      # Formateo de código
   ```

---

## 📂 Estructura del Proyecto

```text
itba_full_stack_front/
├── actions/                     # Server Actions de React ('use server')
│   ├── deleteLoanAction.ts       # Cancelación y baja de préstamos
│   ├── depositToAccountAction.ts # Depósito y acreditación de saldo
│   ├── makeTransferAction.ts     # Procesamiento de transferencias
│   ├── requestLoanAction.ts      # Envío de solicitud de préstamo
│   ├── saveAliasAction.ts        # Guardado de alias en agenda de contactos
│   └── signOutAction.ts          # Cierre de sesión y eliminación de cookie
├── app/                          # App Router (Páginas, Rutas y Layouts)
│   ├── globals.css               # Estilos globales y directivas de Tailwind CSS
│   ├── normalize.css             # Reseteo CSS consistente
│   ├── layout.tsx                # Root layout HTML
│   ├── page.tsx                  # Landing page pública
│   ├── login/                    # Grupo de rutas de autenticación
│   │   ├── layout.tsx            # Layout visual para login y registro
│   │   ├── iniciar-sesion/       # Formulario de inicio de sesión
│   │   └── registrarse/          # Formulario de registro de usuario
│   ├── inicio/                   # Panel privado protegido del Homebanking
│   │   ├── layout.tsx            # Layout con barra de navegación lateral (AsideNav)
│   │   ├── page.tsx              # Resumen general del cliente y cuentas
│   │   ├── cuentas/              # Listado y detalle de cuentas bancarias
│   │   ├── tarjetas/             # Visor de tarjetas y ruta dinámica [tarjetaId]
│   │   ├── transferencias/       # Formulario de transferencias e historial
│   │   ├── alias/                # Consulta de alias y CBU de la cuenta propia
│   │   ├── agregar-alias/        # Formulario para registrar alias de terceros
│   │   ├── conversor/            # Conversor interactivo de divisas
│   │   ├── prestamos/            # Simulador y solicitud de préstamos
│   │   ├── depositar/            # Formulario para depositar fondos
│   │   ├── pagos/ y facturas/    # Pago de servicios y facturación
│   │   └── contacto/             # Canales de atención y soporte al cliente
│   └── legal/                    # Secciones legales (términos, privacidad, FAQ)
├── public/                       # Assets estáticos (logos, imágenes, favicon)
├── src/
│   ├── components/               # Componentes de UI modulares
│   │   ├── accountCard/          # Tarjetas de cuentas bancarias
│   │   ├── accountMoney/         # Widget de saldo principal
│   │   ├── activityRecord/       # Registro histórico de actividad
│   │   ├── addAliasForm/         # Formulario de alias con Tailwind CSS
│   │   ├── asideNav/             # Menú de navegación lateral
│   │   ├── bankCards/ & card/    # Componentes de tarjetas de crédito/débito
│   │   ├── currencyConverter/    # Widget interactivo de conversión de divisas
│   │   ├── deposit/              # Formulario de depósito
│   │   ├── footer/               # Pie de página con newsletter y sucursales
│   │   ├── home/                 # Secciones del landing (Hero, BankActions, etc.)
│   │   ├── loan/ & loanCalculator/# Componentes de préstamos y calculadora
│   │   ├── login/                # Formularios de login y registro
│   │   ├── table/                # Componente de tabla reutilizable
│   │   ├── transfers/            # Formulario para emitir transferencias
│   │   └── userProfile/          # Encabezado con información del perfil
│   ├── hooks/                    # Hooks personalizados (useCurrencyConverter, useCardCarrousel)
│   ├── lib/                      # Lógica de datos (dataFetch, pingServer, getSessionToken)
│   ├── services/                 # Llamadas de autenticación y servicios auxiliares
│   └── types/                    # Definiciones TypeScript de entidades y dominio
├── utils/                        # URLs de endpoints, formato de fechas y cabeceras
├── tests/                        # Suite de pruebas automatizadas
│   ├── e2e/                      # Pruebas End-to-End con Playwright
│   ├── unit/                     # Pruebas unitarias y de componentes con Vitest
│   ├── mocks/                    # Mock Service Worker (MSW v2) para endpoints de FastAPI
│   └── setup.ts                  # Configuración y ciclo de vida de tests
├── proxy.ts                      # Enrutador y middleware de protección de sesiones
├── vitest.config.mts             # Configuración de Vitest y alias de rutas
├── playwright.config.ts          # Configuración de Playwright y navegador Chromium
├── next.config.js                # Configuración de Next.js y dominios de imágenes
├── tsconfig.json                 # Configuración de compilación de TypeScript
├── package.json                  # Definición de dependencias y scripts
└── biome.json                    # Configuración de Biome (linter y formatter)
```
