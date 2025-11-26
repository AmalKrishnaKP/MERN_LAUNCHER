import { execa } from "execa";

export const setupVite=async(frontPath)=>{
    try {
         await execa("npm",["create","vite@latest",".","--","--template","react"],{
                    cwd:frontPath,
                    stdio:"inherit"})
        
    } catch (error) {
        console.log(error);
        
    }
}