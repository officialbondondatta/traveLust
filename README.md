# 🌍 traveLust

### Discover your next adventure.

traveLust is a travel web application for exploring destinations, viewing travel packages, and managing bookings. Built with Next.js, React, and TypeScript, it combines a responsive interface with account authentication and destination management.

**[🌐 Live Demo](https://trave-lust.vercel.app) · [📂 Repository](https://github.com/officialbondondatta/traveLust)**

---

## ✨ Features

- **Destination discovery** — Browse travel packages with destination images, countries, categories, prices, and durations.
- **Detailed package pages** — Explore descriptions, highlights, departure dates, and available inclusions.
- **User authentication** — Create an account and sign in with email and password using Better Auth.
- **Trip booking** — Book a destination with a selected departure date.
- **Booking management** — View personal bookings, check their status, and cancel bookings.
- **Destination management** — Add, edit, and delete travel packages.
- **Protected routes** — Require authentication for selected destination and booking pages.
- **Responsive interface** — Layouts that adapt to mobile, tablet, and desktop screens.
- **Loading states** — Skeleton components provide feedback while destination content loads.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | Application framework and App Router |
| React 19 | User interface |
| TypeScript | Static typing |
| Tailwind CSS 4 | Styling and responsive layouts |
| shadcn/ui and Base UI | Reusable interface components |
| Better Auth | Email/password authentication and sessions |
| JWT | Token-based API authentication |
| MongoDB | Authentication data storage |
| Lucide React | Icons |
| Embla Carousel | Carousel functionality |
| Vercel | Live application hosting |

## 🧩 Architecture

This repository contains the Next.js application and its Better Auth integration.

- **Authentication:** Better Auth connects to MongoDB using the `travelust` database.
- **Travel data:** Destination and booking operations communicate with a separate backend API.
- **API access:** Server components use `LOCALURL`, while browser components use `NEXT_PUBLIC_LOCALURL`.

> The destination and booking backend is not included in this repository. A compatible backend must be running for those features to work locally.

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

- A Node.js version compatible with Next.js 16
- npm
- A local MongoDB instance or MongoDB Atlas connection
- Access to the compatible destination and booking backend API

### 1. Clone the repository

```bash
git clone https://github.com/officialbondondatta/traveLust.git
cd traveLust
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# MongoDB connection used by Better Auth
MONGODBURI=your_mongodb_connection_string

# Better Auth configuration
BETTER_AUTH_SECRET=replace_with_a_strong_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Separate destination and booking backend API
LOCALURL=http://localhost:5000
NEXT_PUBLIC_LOCALURL=http://localhost:5000
```

Replace the example backend URLs with your actual API address. The port `5000` is an example.

| Variable | Description |
| --- | --- |
| `MONGODBURI` | MongoDB connection string for authentication data |
| `BETTER_AUTH_SECRET` | Secret used by Better Auth |
| `BETTER_AUTH_URL` | Base URL of the Next.js application |
| `LOCALURL` | Backend API base URL used by server-side requests |
| `NEXT_PUBLIC_LOCALURL` | Backend API base URL used by browser-side requests |

`NEXT_PUBLIC_LOCALURL` is exposed to the browser and must contain a publicly reachable API address in production. Keep database credentials and authentication secrets private.

### 4. Start the development server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production server after building |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```text
traveLust/
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── add-destinations/   # Create travel packages
│   │   ├── api/auth/           # Better Auth route handler
│   │   ├── bookings/           # Personal bookings
│   │   ├── destinations/
│   │   │   └── [id]/           # Individual destination pages
│   │   ├── profile/            # User profile
│   │   ├── signin/             # Sign-in page
│   │   ├── signup/             # Registration page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── booking/            # Booking components
│   │   ├── ui/                 # Reusable UI primitives
│   │   └── ...                 # Destination cards, forms, and page sections
│   ├── lib/                    # Authentication and token helpers
│   ├── types/                  # Destination and booking types
│   └── proxy.ts                # Route protection
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🔌 Backend Integration

The application expects the following endpoints from the separate backend:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/destinations` | Retrieve destination packages |
| `GET` | `/destinations/:id` | Retrieve a specific destination |
| `POST` | `/add-destination` | Create a destination package |
| `PATCH` | `/edit-destination/:id` | Update a destination package |
| `DELETE` | `/destinations/:id` | Delete a destination package |
| `GET` | `/booking` | Retrieve bookings |
| `POST` | `/booking` | Create a booking |
| `DELETE` | `/booking/:id` | Cancel a booking |

Authenticated requests attach the JWT obtained through Better Auth to the `authorization` header. Configure the backend to accept the application's tokens and allow requests from the frontend origin.

## 🌐 Deployment

The live application is hosted on **Vercel**.

To deploy your own instance:

1. Import the repository into Vercel.
2. Add the environment variables from the setup section.
3. Set `BETTER_AUTH_URL` to your deployed frontend URL.
4. Set `LOCALURL` and `NEXT_PUBLIC_LOCALURL` to your deployed backend API URL.
5. Ensure MongoDB is reachable from the deployment environment.
6. Configure the backend's allowed origins and authentication settings for your deployed frontend.
7. Deploy the application.

## 🤝 Contributing

Suggestions, bug reports, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run `npm run lint` and `npm run build`.
5. Open a pull request explaining your changes.

You can report bugs or suggest features through **[GitHub Issues](https://github.com/officialbondondatta/traveLust/issues)**.

## 👤 Author

**Bondon Datta**

GitHub: **[@officialbondondatta](https://github.com/officialbondondatta)**

---

If you find this project useful, consider giving it a ⭐ on GitHub.
