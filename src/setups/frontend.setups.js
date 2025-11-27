import { execa } from "execa"
import { setupVite } from "../generator/setupVite.generator.js";
import { setupTailwind } from "../generator/setupTailwind.generator.js";
import { setupShadCN } from "../generator/setupShadCN.generator.js";

export const frontendSetup=async(frontPath)=>{
    try {

        await setupVite(frontPath)
        await setupTailwind(frontPath)
        await setupShadCN(frontPath)
        
    } catch (error) {
        console.log(error);
        
    }
}