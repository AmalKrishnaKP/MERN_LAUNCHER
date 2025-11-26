# 📁 Project Structure — `mern-launcher-cli`

```text
mern-launcher-cli/
│
├── bin/
│   └── cli.js                 # runs mern-launcher
│
├── src/
│   ├── prompts/               # All questions go here
│   │   └── projectQuestions.js
│   │
│   ├── generator/             # Main 
│   │   ├── createStructure.js # creates myapp/, frontend/, backend/
│   │   ├── setupVite.js       # runs npm create vite
│   │   ├── setupTailwind.js   # installs & configures Tailwind
│   │   ├── setupShadcn.js     # installs & configures shadcn/ui
│   │   ├── setupExpress.js    # creates backend
│   │   ├── setupMongo.js      # db/connect.js auto-generator
│   │   ├── setupEnv.js        # generates .env
│   │   ├── setupDocker.js     # docker-compose.yml
│   │   └── setupRootScripts.js# dev scripts for running client/server
│   │
│   ├── index.js               # Controls flow: ask questions → run steps
│   │
│   └── templates/             # Ready-made template files
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
```
