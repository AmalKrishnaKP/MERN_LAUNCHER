import { execa } from "execa"
import fs from "fs"
import path from "path"

export const setupTailwind=async(frontPath)=>{
    try {
        await execa("npm",["install", "tailwindcss", "@tailwindcss/vite"],{
            cwd:frontPath,
            stdio:"inherit"
        })

        const cssFile= path.join(frontPath,"src/index.css")
        const updatedCssCont=`@import "tailwindcss";`
        fs.writeFileSync(cssFile,updatedCssCont)

        console.log("css updated");
        


        const htmlFile= path.join(frontPath,"index.html")
        const htmlContent= fs.readFileSync(htmlFile,'utf8')
        
        const updatedHtmlCont= htmlContent.replace(/<\/title>\s*/i,`</title> \n \t <link href="/src/style.css" rel="stylesheet"> \n`)
        console.log(updatedHtmlCont);
        fs.writeFileSync(htmlFile,updatedHtmlCont)

        console.log("html updated");
        
        
        const configFile= path.join(frontPath,"vite.config.js")
        const configCont= fs.readFileSync(configFile,'utf8')
        const updatedConfigCont= configCont.replace(/plugins: \[\s*/,`plugins: [tailwindcss(),`)
        fs.writeFileSync(configFile,`import tailwindcss from '@tailwindcss/vite' \n`+updatedConfigCont)
        console.log(updatedConfigCont);

        console.log("pluggin updated");
        


        
    } catch (error) {
        console.log(error);
        
    }
}