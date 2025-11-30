import fs from 'fs'
import path from 'path';

export const setupDotEnv=async(backPath,answer)=>{
    try {
        fs.writeFileSync(path.join(backPath,".env"),`
NODE_ENV=development
MONGO_URL=${answer.mongoURL}        
        `)
    } catch (error) {
        console.log(error);
        
    }
}