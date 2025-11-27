import { execa } from "execa";
import fs from 'fs'
import path from "path";

export const setupExpress=async(backPath)=>{
    try {
        await execa("npm",["install","express"],{
            cwd:backPath,
            stdio:"inherit"
        })
        fs.writeFileSync(path.join(backPath,"src/server.js"),`import express from 'express'
import { connectDB } from './lib/db.js';
const app=express() 
const PORT = process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log("server listening on:" ,PORT);
    connectDB()
})
        
        `)
    } catch (error) {
        console.log(error);
        
    }
}