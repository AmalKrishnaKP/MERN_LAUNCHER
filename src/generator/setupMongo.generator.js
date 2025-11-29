import { execa } from "execa";
import fs from 'fs'
import path from "path";

export const setupMongo=async(backPath,answer)=>{
    try {
        await execa("npm",["install","mongoose"])
        fs.mkdirSync(path.join(backPath,"src/lib"))

        fs.writeFileSync(path.join(backPath,"src/lib/db.js"),`
import mongoose from 'mongoose'

export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("${answer.mongoURL}")
        console.log("connectd in "+ conn.connection.host);
        
    } catch (error) {
        console.log(error); 
        
    }
}
        `)
    } catch (error) {
        console.log(error);
        
    }
}