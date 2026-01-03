# @amalkrishnakp/mern_launcher

A CLI tool for instant MERN stack project setup. Get from zero to fully configured development environment in minutes.

[![npm version](https://img.shields.io/npm/v/@amalkrishnakp/mern_launcher.svg)](https://www.npmjs.com/package/@amalkrishnakp/mern_launcher)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Quick Start

```bash
npx @amalkrishnakp/mern_launcher
```

## Features

- **Complete MERN Stack** - MongoDB, Express, React, Node.js with modern tooling
- **Development Optimized** - Hot reload for both frontend (Vite) and backend (Nodemon)
- **Production Ready** - Best practices and security configurations included
- **Pre-configured Tools** - Tailwind CSS, shadcn/ui, Axios, CORS, environment variables
- **Smart CLI** - Interactive prompts, flexible project location, cross-platform support

## Usage

1. **Run the CLI:**
   ```bash
   npx @amalkrishnakp/mern_launcher
   ```

2. **Answer the prompts:**
   - Choose to use current folder or create new project
   - Enter project name (if creating new)
   - Provide MongoDB connection string

3. **Start development:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

4. **Access your app:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## What Gets Installed

### Backend
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin requests
- `dotenv` - Environment management
- `nodemon` - Hot reload

### Frontend
- `react` - UI library
- `vite` - Build tool & dev server
- `tailwindcss` - CSS framework
- `shadcn/ui` - UI components
- `axios` - HTTP client

## Configuration

### Environment (.env)
```env
NODE_ENV=development
MONGO_URL=your_mongodb_connection
```

### API Client
```javascript
import { axiosInstance } from '@/lib/axios'
// Pre-configured for http://localhost:5000
```

## Development Commands

```bash
# Backend
npm run dev    # Development with hot reload
npm start      # Production

# Frontend
npm run dev    # Development server
npm run build  # Production build
npm run preview # Preview build
```

## Perfect For

- **Rapid Prototyping** - Test ideas quickly
- **Learning MERN** - Complete setup for students
- **Hackathons** - Start coding immediately
- **Side Projects** - Focus on building, not configuring
- **Proof of Concepts** - Validate ideas fast

## Troubleshooting

**Port conflicts**: Check if ports 5173 or 5000 are in use
**MongoDB connection**: Verify your connection string
**Permission errors**: Check project directory permissions

## Links

- [GitHub Repository](https://github.com/AmalKrishnaKP/MERN_LAUNCHER)
- [Report Issues](https://github.com/AmalKrishnaKP/MERN_LAUNCHER/issues)

---

Save hours of setup time. Start coding your MERN application immediately.