import { execa } from "execa"
import { setupVite } from "../generator/setupVite.generator.js";

export const frontendSetup=async(frontPath)=>{
    try {

        await setupVite(frontPath)

        
    } catch (error) {
        console.log(error);
        
    }
}