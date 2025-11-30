# MERN Launcher 🚀

A powerful CLI tool that automates MERN stack project setup, specifically designed for development environments. Get from zero to production-ready development setup in minutes!

## ✨ Features

### 🎯 Complete MERN Stack Setup
- **MongoDB** with Mongoose ODM and environment configuration
- **Express.js** server with CORS and development settings
- **React** with Vite for lightning-fast development
- **Node.js** backend with modern ES modules

### 🔥 Development Optimized
- **Hot Reload Development** - Vite for frontend, Nodemon for backend
- **Development CORS** - Pre-configured for `http://localhost:5173`
- **Development Scripts** - Ready-to-run `npm run dev` commands
- **Local Environment** - Perfect for local development and testing

### 🛠️ Built-in Tools & Libraries
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Axios** - HTTP client with development baseURL
- **Dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### ⚡ Smart CLI Features
- **Flexible Setup** - Use current folder or create new project
- **Interactive Prompts** - User-friendly configuration
- **Robust Process Management** - Uses Execa for reliable command execution
- **Cross-Platform** - Works on Windows, Mac, and Linux

## 🚀 Quick Start

### Installation

```bash
npx mern-launcher
```

### Usage

1. **Run the CLI tool:**
   ```bash
   npx mern-launcher
   ```

2. **Answer the interactive prompts:**
   - Choose to use current folder or create new one
   - Enter your project name (if creating new folder)
   - Provide your MongoDB connection string

3. **Start development:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend  
   cd frontend
   npm run dev
   ```

4. **Open your browser:**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## 📁 Project Structure

```
your-project/
├── backend/
│   ├── src/
│   │   ├── lib/
│   │   │   └── db.js
│   │   └── server.js
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    │   ├── lib/
    │   │   └── axios.js
    │   ├── components/
    │   │   └── ui/
    │   ├── App.jsx
    │   └── index.css
    ├── jsconfig.json
    └── vite.config.js
```

## 🛠️ What Gets Installed

### Backend Dependencies
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `nodemon` - Development hot reload

### Frontend Dependencies
- `react` - UI library
- `vite` - Build tool and dev server
- `tailwindcss` - CSS framework
- `@tailwindcss/vite` - Tailwind Vite integration
- `shadcn/ui` - UI components
- `axios` - HTTP client
- `@types/node` - Type definitions

## 🔧 Configuration

### Environment Variables (Backend/.env)
```env
NODE_ENV=development
MONGO_URL=your_mongodb_connection_string
```

### API Client (Frontend)
```javascript
// Pre-configured Axios instance
import { axiosInstance } from '@/lib/axios'

// Usage in components
axiosInstance.get('/api/users')
axiosInstance.post('/api/users', data)
```

### Development URLs
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000`
- **API Base**: `http://localhost:5000` (in development)

## 🎯 Use Cases

### Perfect For:
- 🏗️ **Rapid Prototyping** - Quickly test ideas and concepts
- 🎓 **Learning & Education** - Perfect for students and tutorials
- 🔬 **Proof of Concepts** - Validate ideas without setup overhead
- 🚀 **Hackathons** - Get started coding immediately
- 💼 **Side Projects** - Focus on building, not configuring

### Development Workflow
1. **Idea** → Have a project idea
2. **Setup** → Run `npx mern-launcher`
3. **Develop** → Start coding immediately
4. **Test** → Both servers running with hot reload
5. **Deploy** → Ready for production deployment

## 🔄 Development Commands

### Backend
```bash
cd backend
npm run dev    # Start development server with nodemon
npm start     # Start production server
```

### Frontend
```bash
cd frontend
npm run dev    # Start Vite development server
npm run build  # Build for production
npm run preview # Preview production build
```

## 🎨 UI Components

The setup includes **shadcn/ui** with pre-configured:
- Button components
- Tailwind CSS integration
- Path aliases (`@/*` for `./src/*`)
- Responsive design utilities

Example component usage:
```jsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```

## 🌟 Why Use MERN Launcher?

### Time Savings
- ⏱️ **Save 1-2 hours** per project on initial setup
- 🔧 **No configuration headaches** - everything just works
- 📚 **Best practices** built-in from start

### Developer Experience
- 🚀 **Instant hot reload** for both frontend and backend
- 🎯 **Consistent structure** across all projects
- 🔥 **Modern tooling** with latest versions
- 📱 **Mobile-responsive** from day one

### Production Ready
- ⚡ **Optimized build** configuration
- 🔒 **Security practices** implemented
- 📦 **Clean, maintainable** code structure

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Check if ports 5173 or 5000 are occupied
   - Kill existing processes or change ports in configuration

2. **MongoDB connection issues**
   - Verify your connection string
   - Ensure MongoDB is running and accessible

3. **Permission errors**
   - Run with appropriate permissions
   - Check file/folder permissions in project directory

### Getting Help

- Check the [GitHub Issues](https://github.com/AmalKrishnaKP/MERN_LAUNCHER/issues) page
- Verify all prerequisites are installed
- Ensure stable internet connection for package downloads

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests, report bugs, or suggest new features.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with amazing open-source tools
- Inspired by the need for faster project setup
- Thanks to all contributors and users

---

**Happy Coding!** 🚀

If you find this tool helpful, please give it a ⭐ on GitHub!