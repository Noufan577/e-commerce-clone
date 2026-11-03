# 🛒 E-Commerce Clone

A full-stack e-commerce web application built with **React** (frontend) and **Node.js/Express/SQLite** (backend). Deployed as a single service on [Render](https://render.com).

---

## 📸 Features

- 🏠 **Home Page** — Browse all products with live search by name or keyword
- 🛒 **Cart** — Add, update quantity, change delivery option, and remove items
- 💳 **Checkout** — View order summary with itemized shipping and tax breakdown
- 📦 **Orders** — View past placed orders with product details
- 🚚 **Tracking** — Track individual order deliveries
- 🔄 **Auto-seed** — Database auto-populates with default data on first boot

---

## 🗂️ Project Structure

```
e-commerce-clone/              ← Git repo root
├── e-commerce-clone/          ← React frontend (Vite)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home/          ← HomePage, ProductGrid, Product
│   │   │   ├── checkout/      ← CheckoutPage, OrderSummary, PaymentSummary, DeliveryOptions
│   │   │   ├── Orders.jsx
│   │   │   └── Tracking.jsx
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── utils/
│   │   │   └── money.js       ← Currency formatting helpers
│   │   ├── App.jsx            ← Routes + global cart state
│   │   └── main.jsx
│   ├── public/                ← Static assets (images, icons)
│   ├── vite.config.js
│   ├── vitest.config.js
│   └── package.json
│
└── ecommerce-backend-ai-main/ ← Node.js/Express backend
    ├── routes/
    │   ├── products.js        ← GET /api/products
    │   ├── cartItems.js       ← GET/POST/PUT/DELETE /api/cart-items
    │   ├── orders.js          ← GET/POST /api/orders
    │   ├── deliveryOptions.js ← GET /api/delivery-options
    │   ├── paymentSummary.js  ← GET /api/payment-summary
    │   └── reset.js           ← POST /api/reset
    ├── models/                ← Sequelize models (Product, CartItem, Order, DeliveryOption)
    ├── defaultData/           ← Seed data loaded on first boot
    ├── dist/                  ← Built React app (served as static files)
    ├── images/                ← Product images served at /images
    ├── server.js              ← Express entry point
    └── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router 7, Axios, Day.js |
| Build Tool | Vite 8 |
| Testing | Vitest, Testing Library |
| Backend | Node.js, Express 4 |
| Database | SQLite (via `sql.js-as-sqlite3` + Sequelize) |
| Deployment | Render (single web service) |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the repo

```bash
git clone https://github.com/Noufan577/e-commerce-clone.git
cd e-commerce-clone
```

### 2. Start the backend

```bash
cd ecommerce-backend-ai-main
npm install
npm run dev        # uses nodemon — auto-restarts on changes
```

The backend runs on **http://localhost:3000**.  
On first start it auto-seeds the database with default products, cart items, delivery options, and orders.

### 3. Start the frontend

Open a **new terminal**:

```bash
cd e-commerce-clone
npm install
npm run dev        # Vite dev server with HMR
```

The frontend runs on **http://localhost:5173** and proxies `/api` requests to the backend.

---

## 🧪 Tests

Run from the `e-commerce-clone/` directory:

```bash
npm run test
```

Tests:
- `src/utils/money.test.js` — currency formatting helpers
- `src/pages/home/Product.test.jsx` — Product component rendering

---

## 🌐 API Reference

All endpoints are prefixed with `/api`.

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products?search=shoes` | Search by name or keyword |

### Cart Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cart-items` | Get all cart items |
| `GET` | `/api/cart-items?expand=product` | Get cart items with product details |
| `POST` | `/api/cart-items` | Add item `{ productId, quantity }` |
| `PUT` | `/api/cart-items/:productId` | Update `quantity` or `deliveryOptionId` |
| `DELETE` | `/api/cart-items/:productId` | Remove item from cart |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders` | Get all orders |
| `GET` | `/api/orders?expand=products` | Get orders with product details |
| `GET` | `/api/orders/:orderId` | Get a single order |
| `POST` | `/api/orders` | Place order from current cart (clears cart) |

### Delivery Options

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/delivery-options` | Get all delivery options |

### Payment Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/payment-summary` | Get totals: items, product cost, shipping, tax |

### Reset

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/reset` | Reset DB to default seed data |

---

## ☁️ Deployment (Render)

The app is deployed as a **single web service** on Render. The Express backend serves the built React frontend from the `dist/` folder.

### Render Settings

| Setting | Value |
|---------|-------|
| Root Directory | `ecommerce-backend-ai-main` |
| Build Command | `npm install` |
| Start Command | `node server.js` |
| Environment | Node |

### Deploy a new version

```bash
# 1. Build the frontend
cd e-commerce-clone
npm run build

# 2. Copy dist to backend
Copy-Item -Recurse -Force dist ..\ecommerce-backend-ai-main\dist   # PowerShell
# or on macOS/Linux:
# cp -r dist ../ecommerce-backend-ai-main/dist

# 3. Commit and push
cd ..
git add ecommerce-backend-ai-main/dist/
git commit -m "Update frontend build"
git push origin main
```

Render auto-deploys on push, or use **Manual Deploy** in the dashboard.

> **Note:** Render's free tier uses ephemeral disk storage. The SQLite database resets on every redeploy/restart. The app automatically re-seeds default data on boot.

---

## 📝 Scripts Reference

### Frontend (`e-commerce-clone/`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

### Backend (`ecommerce-backend-ai-main/`)

| Command | Description |
|---------|-------------|
| `npm start` | Start server with Node |
| `npm run dev` | Start with nodemon (auto-restart) |

---

## 📄 License

ISC
