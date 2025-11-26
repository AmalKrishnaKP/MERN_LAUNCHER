# 📁 Project Structure — `mern-launcher`

mern-launcher-cli/
│
├── bin/
│   └── cli.js                 # Main entrypoint (executes when user runs: mern-launcher)
│
├── src/
│   ├── prompts/               # All inquirer prompts
│   │   └── projectQuestions.js
│   │
<!-- │   ├── utils/                 # Helper functions and utilities
│   │   ├── logger.js          # Logging + spinner (chalk, ora)
│   │   ├── pathUtils.js       # Helpers for handling paths
│   │   └── fileUtils.js       # Helpers for writing, copying, creating files/folders -->
│   │
│   ├── generator/             # Main automation code (Milestones 2–10)
│   │   ├── createStructure.js # Creates myapp/, client/, server/ folder structure
│   │   ├── setupVite.js       # Automates `npm create vite@latest`
│   │   ├── setupTailwind.js   # Installs & configures Tailwind CSS
│   │   ├── setupShadcn.js     # Installs & configures shadcn/ui
│   │   ├── setupExpress.js    # Generates backend Express boilerplate
│   │   ├── setupMongo.js      # Auto-creates MongoDB connection file (db/connect.js)
│   │   ├── setupEnv.js        # Generates .env file with defaults
│   │   ├── setupDocker.js     # Adds docker-compose.yml for full MERN stack
│   │   └── setupRootScripts.js# Adds root-level npm scripts (run client + server)
│   │
│   ├── index.js               # Controls full CLI flow (ask Qs → generate project)
│   │
│   └── templates/             # Base template files copied into new project
│       ├── express/
│       │   ├── index.js
│       │   ├── db/
│       │   │   └── connect.js
│       │   └── routes/
│       │
│       ├── tailwind/
│       │   ├── tailwind.config.js
│       │   └── index.css
│       │
│       └── docker/
│           └── docker-compose.yml
│
├── package.json
├── README.md
└── .gitignore
