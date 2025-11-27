import { match } from 'assert';
import { execa } from 'execa';
import fs from 'fs'
import path from 'path';
import { exitCode } from 'process';

export const setupShadCN=async(frontPath)=>{
    try {
        const jsConfigPath=path.join(frontPath,"jsconfig.json")
        const jsConfigContent=`{
  "files": [],
  "references": [
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`
        fs.writeFileSync(jsConfigPath,jsConfigContent)
        await execa("npm",["install", "-D", "@types/node"],{
            cwd:frontPath,
            stdio:"inherit"
        })
        const viteConfigPath=path.join(frontPath,"vite.config.js")
        const viteConfigContent=fs.readFileSync(viteConfigPath,'utf8')
        const updatedCon=`import path from "path"\n`+viteConfigContent
        const finalCont=updatedCon.replace(/plugins:\s*\[[^\]]*\]/,
            match=>`
                ${match},
                resolve: {
                    alias: {
                    "@": path.resolve(__dirname, "./src"),
                    },
                }`
        )
        fs.writeFileSync(viteConfigPath,finalCont)

        await execa("npx",["shadcn@latest", "init","--yes"],{
            cwd:frontPath,
            stdio:"inherit"
        })
        
        await execa("npx",[ "shadcn@latest" ,"add" ,"button"],{
            cwd:frontPath,
            stdio:"inherit"
        })
        fs.writeFileSync(path.join(frontPath,"src/App.jsx"),`import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>This botton is created from shadcn</h1>
      <h2>vite ,tailwind and shadcn are setted now just go and enjoy coding</h2>
      <Button>Click me</Button>
    </div>
  )
}

export default App`)

    
        
           
    } catch (error) {
        console.log(error);
        
    }
}