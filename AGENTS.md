# 🤖 AGENTS.md - Developer & Agent Guide for ITBANK Homebanking

Welcome to the **ITBANK Frontend** codebase. This file serves as the definitive reference manual for AI coding agents and human developers working on, maintaining, or refactoring this project.

<!-- BEGIN:nextjs-agent-rules -->
## This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.
This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.
<!-- END:nextjs-agent-rules -->

---

## 📌 Project Overview

**ITBANK** is a fictional digital homebanking platform built with **Next.js 16 (App Router)** and **React 19**, designed as the frontend client for a comprehensive full-stack banking ecosystem.

- **Backend Repository (FastAPI)**: [itba-full-stack-back-fastapi](https://github.com/AgusT613/itba-full-stack-back-fastapi) 🚀

### Core Capabilities:

- **Landing & Public Portal**: Marketing landing page, customer resources, branch office locator, newsletter subscription, and legal information.
- **Authentication & Route Guard**: User registration and login with cookie-based JWT sessions (`session_token`), with backend health checks and route protection via Next.js `proxy.ts`.
- **Accounts Dashboard**: Consolidated balance overview, recent transaction feeds, profile summary, and multi-account breakdown.
- **Card Management**: Credit and debit card visualizer with card details, expiration, CVV preview, and individual card routing (`/inicio/tarjetas/[tarjetaId]`).
- **Transfers & Contact Aliases**: Alias-based internal/external transfers, alias directory (`/inicio/alias` and `/inicio/agregar-alias`), and historical transfer ledger.
- **Loans & Financial Tools**: Loan application requests, list of active loans with cancellation/deletion, and an interactive loan amortization calculator.
- **Currency Converter**: Dynamic multi-currency converter (ARS, USD, EUR, etc.) with real-time exchange rates.
- **Deposits & Payments**: Account balance deposits and utility bill payment stubs.

---

## 🛠️ Technology Stack

| Layer                    | Technology                             | Details                                                                          |
| :----------------------- | :------------------------------------- | :------------------------------------------------------------------------------- |
| **Framework**            | Next.js 16.4.5                         | App Router (`app/` directory), React Server Components (RSC)                     |
| **UI Library**           | React 19.3.1                           | React 19 hooks (`useActionState`, `useFormStatus`, `cache`)                      |
| **Language**             | TypeScript 6.0.3                       | Target `ES2017`, paths mapped to `@/*`                                           |
| **Styling**              | Tailwind CSS v4 & CSS Modules          | `@tailwindcss/postcss` 4.3.4 alongside scoped `*.module.css`                     |
| **Icons**                | Lucide React 1.70.0                    | Modern, unified vector icons (`lucide-react`)                                    |
| **Images**               | Sharp 0.35.5 & `next/image`            | Optimized remote images from `randomuser.me`                                     |
| **Routing Guard**        | Next.js `proxy.ts`                     | Modern Next.js file convention for proxying and routing control                  |
| **Linting & Formatting** | Biome 2.6 (`biome.json`)               | High-performance Rust-based linter, formatter and import organizer               |
| **Backend Integration**  | FastAPI Backend                        | Communicates via REST over `NEXT_PUBLIC_API_URL` (default `http://0.0.0.0:8000`) |

---

## 📁 Repository Structure

```text
itba_full_stack_front/
├── actions/                     # Next.js Server Actions ('use server')
│   ├── deleteLoanAction.ts       # Loan deletion mutation
│   ├── depositToAccountAction.ts # Account deposit mutation
│   ├── makeTransferAction.ts     # Balance transfer mutation
│   ├── requestLoanAction.ts      # Loan application mutation
│   ├── saveAliasAction.ts        # Save recipient alias mutation
│   └── signOutAction.ts          # Session cookie invalidation
├── app/                          # Next.js App Router (Routes & Layouts)
│   ├── globals.css               # Global stylesheet & Tailwind CSS import
│   ├── normalize.css             # CSS reset
│   ├── layout.tsx                # Root layout (HTML wrapper, lang='es')
│   ├── page.tsx                  # Public homepage (Hero, BankActions, BankResources)
│   ├── page.module.css           # Homepage styling
│   ├── login/                    # Authentication route group
│   │   ├── layout.tsx            # Login layout
│   │   ├── iniciar-sesion/       # Sign In page
│   │   └── registrarse/          # Sign Up page
│   ├── inicio/                   # Protected Homebanking dashboard & sub-routes
│   │   ├── layout.tsx            # Dashboard shell (AsideNav sidebar + main container)
│   │   ├── page.tsx              # Main dashboard overview
│   │   ├── cuentas/              # User bank accounts list
│   │   ├── tarjetas/             # Cards viewer and [tarjetaId] detail page
│   │   ├── transferencias/       # Money transfer form & transfer history table
│   │   ├── alias/                # Current user alias & account identifiers
│   │   ├── agregar-alias/        # Add recipient alias form
│   │   ├── conversor/            # Currency exchange rate converter
│   │   ├── prestamos/            # Loans management & amortization calculator
│   │   ├── depositar/            # Balance top-up / deposit form
│   │   ├── pagos/ & facturas/    # Utility bills payment system
│   │   └── contacto/             # Support & contact information
│   └── legal/                    # Public legal routes (terminos, privacidad, faq)
├── src/
│   ├── components/               # Modular UI Components (Tailwind CSS v4)
│   │   ├── ui/                   # Accessible headless primitives (AlertDialog, Select, Accordion)
│   │   ├── accountCard/          # Individual bank account card
│   │   ├── accountMoney/         # Primary balance display widget
│   │   ├── activityRecord/       # Transaction history activity record
│   │   ├── addAliasForm/         # Add recipient alias (React 19 useActionState + Tailwind)
│   │   ├── asideNav/             # Collapsible / fixed navigation sidebar
│   │   ├── bankCards/ & card/    # Credit/debit card rendering & flip card logic
│   │   ├── currencyConverter/    # Currency converter UI & form
│   │   ├── deposit/              # Cash deposit component
│   │   ├── footer/               # Footer with newsletter and branch office cards
│   │   ├── home/                 # Landing page sections (hero, bankActions, bankResources)
│   │   ├── loan/ & loanCalculator/# Loan request & calculator components
│   │   ├── login/                # LoginForm, SignInForm, SignUpForm
│   │   ├── table/                # Reusable table component
│   │   ├── transfers/            # Transfer submission form
│   │   └── userProfile/          # User greeting & profile header
│   ├── hooks/                    # Custom React hooks (useCardCarrousel, useCurrencyConverter)
│   ├── lib/                      # Core data fetching & utilities
│   │   ├── dataFetch.ts          # Server-side data fetching with react `cache()`
│   │   ├── getSessionToken.ts    # Reads 'session_token' cookie from request headers
│   │   └── pingServer.ts         # Backend healthcheck utility
│   ├── services/                 # API service handlers (userSignIn, userSignUp, currency)
│   └── types/                    # Domain TypeScript definitions (cards, loans, alias, etc.)
├── utils/                        # Shared utility functions and static definitions
│   ├── apiEndpoints.ts           # REST endpoint URLs derived from process.env
│   ├── headerLinks.ts            # Sidebar navigation item configurations
│   ├── tableHeaders.ts           # Column headers for history tables
│   └── toDate.ts, toCapitalize.ts# Formatting helpers
├── proxy.ts                      # Route guard & redirection logic (Next.js proxy convention)
├── tests/                        # Automated testing suite
│   ├── e2e/                      # Playwright End-to-End tests
│   ├── unit/                     # Vitest unit and component tests
│   ├── mocks/                    # MSW (Mock Service Worker) API handlers & server
│   └── setup.ts                  # Test environment setup & MSW lifecycle
├── vitest.config.mts             # Vitest configuration with React plugin and path alias
├── playwright.config.ts          # Playwright configuration with Chromium project
├── next.config.js                # Next.js config (remote image patterns)
├── tsconfig.json                 # TypeScript compiler options
├── package.json                  # Scripts and dependencies
└── biome.json                    # Biome linter and formatter configuration
```

---

## ⚙️ Key Architectural Patterns & Data Flow

### 1. Server Components for Data Fetching

- Routes under `app/inicio/*` are primarily React Server Components (RSC).
- Data fetching logic is centralized in `src/lib/dataFetch.ts` wrapped in React’s `cache()` to deduplicate requests during rendering.
- Requests pass the JWT token retrieved from incoming cookies via `getSessionToken()`.

### 2. React 19 Server Actions for Mutations

- State mutations (transfers, alias creation, loan applications, deposits) reside in the `actions/` folder and use `'use server'`.
- Client components consume Server Actions using React 19’s `useActionState`:
  ```tsx
  const [state, formAction, pending] = useActionState(
    handleTransfer,
    initialState,
  )
  ```
- This pattern eliminates the need for separate API route handlers (`app/api/*`) for standard form submissions.

### 3. Session & Route Protection (`proxy.ts`)

- Next.js evolved its routing proxy convention ([Next.js Proxy File Convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy#migration-to-proxy)), using `proxy.ts` at the project root.
- The `proxy` handler inspects the incoming `session_token` cookie for routes matching `/inicio/:path*`, redirecting unauthenticated visitors to `/login/iniciar-sesion`.
- On login (`src/services/userSignIn.ts`), cookies are set with:
  - `httpOnly: true`
  - `secure: process.env.NODE_ENV === 'production'`
  - `sameSite: 'strict'`
- Logout is handled by `actions/signOutAction.ts` which clears `session_token`.

---

## ⚠️ Known Issues, Technical Debt & Gotchas

When modifying this repository, be aware of the following:

1. **TypeScript Strictness**:
   - `tsconfig.json` currently has `"strict": false`.
   - Multiple components have untyped event handlers or implicit `any` parameters (e.g. `(e) => ...`, `RootLayout({ children })`).
   - Any new code written by agents must use explicit TypeScript typing.

2. **Styling Architecture (Tailwind CSS v4 Complete Migration)**:
   - All legacy CSS Modules have been completely refactored to **Tailwind CSS v4** utility classes with centralized design tokens in `app/globals.css` (`@theme`).
   - Reusable class composition is standardized via `cn()` in `src/lib/utils.ts` (`clsx` + `tailwind-merge`).
   - Keep styles consistent with the `@theme` semantic tokens (`bg-surface`, `border-surface-border`, `text-primary-500`, etc.).

3. **Cookie Access Null Safety**:
   - In `src/lib/getSessionToken.ts`, accessing `(await cookies()).get('session_token').value` directly causes a `TypeError` if the cookie is undefined.
   - Always verify existence before reading `.value`:
     ```ts
     const cookie = (await cookies()).get('session_token')
     if (!cookie?.value) throw new Error('Session token not found')
     return cookie.value
     ```

4. **Hardcoded Identifiers**:
   - In `app/inicio/alias/page.tsx`, account `'1'` is hardcoded (`getAccountById('1')`). It should dynamically resolve the active user's primary account.

---

## 🧪 Testing Architecture & Standards

The testing strategy is structured into unit, integration/mocking, and end-to-end layers:

### 1. Unit & Component Testing (Vitest + React Testing Library)

- **Engine**: **Vitest** configured in `vitest.config.mts` with `@vitejs/plugin-react` and `jsdom`.
- **Location**: `tests/unit/**/*.{test,spec}.{ts,tsx}`.
- **Coverage focus**:
  - Financial calculations and math formulas (e.g. `LoanCalculator.tsx` amortization formula).
  - Utility and date formatters (`utils/toDate.ts`).
  - React 19 Client and Server Components interaction.

### 2. Network & API Mocking (MSW v2)

- **Engine**: **Mock Service Worker (MSW v2)** configured in `tests/mocks/handlers.ts` and `tests/mocks/server.ts`.
- **Lifecycle**: Integrated into Vitest via `tests/setup.ts` (`server.listen()`, `server.resetHandlers()`, `server.close()`).
- Simulates FastAPI backend endpoints (`/api/homebanking/`, `/api/itbank/branch-offices`, `/api/homebanking/deposit`) so tests run deterministically offline and in CI.

### 3. End-to-End Testing (Playwright)

- **Engine**: **@playwright/test** configured in `playwright.config.ts`.
- **Location**: `tests/e2e/**/*.spec.ts`.
- **Coverage focus**:
  - Route guards and unauthenticated redirections via `proxy.ts`.
  - Public landing page rendering and navigation flows.

---

## 🚀 Recommended Improvements Roadmap

### 1. Robustness & Architecture

- [ ] **Type Safety**: Enable `"strict": true` in `tsconfig.json` and type all component props and event handlers.
- [ ] **Error & Loading Boundaries**: Add `loading.tsx` (skeleton screens) and `error.tsx` (fallback boundaries) inside `app/inicio/` to prevent whole-page crashes on network failures.
- [ ] **Validation Schema**: Integrate [Zod](https://zod.dev/) for client-side and server action form validation (amounts > 0, valid CBU/alias formats, due dates).

### 2. UI/UX & Design Modernization

- [x] **shadcn/ui & Radix UI Primitives**: Replaced custom dropdowns, dialogs, and alerts with accessible, headless primitives styled with Tailwind CSS v4.
- [ ] **Tremor / Recharts Financial Visualizations**:
  - Add expense categorization and cash flow charts to the dashboard.
  - Interactive loan amortization breakdown charts.
- [x] **Toast Notifications**: Replaced inline status messages with Sonner toasts for instant transfer and deposit feedback.
- [x] **Lucide Icons**: Standardized iconography across all navigation and card components with `lucide-react` for a cleaner, modern aesthetic.
- [ ] **Framer Motion**: Add tactile micro-interactions (e.g., 3D flipping credit cards, smooth accordion menus, animated balance increments).
- [ ] **Design Tokens & Dark Mode**: Unify purple/indigo gradient accents into CSS variables / Tailwind theme configuration, supporting seamless dark/light mode switching.

---

## 🧑‍💻 Agent Working Guidelines & Commands

### Commands:

```bash
# Start development server
npm run dev

# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run Playwright E2E tests
npm run test:e2e

# Run Biome linter
npm run lint

# Run Biome linter with auto-fixes
npm run lint:fix

# Format code with Biome
npm run format

# Verify formatting without modifying files
npm run format:check

# Production build check
npm run build
```

### Coding Rules:

- **Never commit broken builds**: Always run `npm run lint` and verify type validity before completing your task.
- **Server vs Client**: Clearly mark files with `'use client'` or `'use server'` at the very top line. Server Actions must remain strictly separated from client bundle code.
- **Paths**: Use the `@/*` alias for imports (e.g. `@/src/components/...`, `@/actions/...`, `@/utils/...`).
