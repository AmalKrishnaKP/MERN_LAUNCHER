import { setupAxios } from "../generator/setupAxios.generator.js";
import { setupDotEnv } from "../generator/setupDotEnv.generator.js";
import { setupExpress } from "../generator/setupExpress.generator.js";
import { setupMongo } from "../generator/setupMongo.generator.js";

export const backendSetup=async(backPath,answer)=>{
    try {
        await setupExpress(backPath)
        await setupMongo(backPath,answer)
        await setupDotEnv(backPath,answer)
    } catch (error) {
        console.log(error);
        
    }
}