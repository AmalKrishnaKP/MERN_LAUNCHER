import { match } from "assert";
import { execa } from "execa";
import fs from 'fs'
import path from "path";
import { inherits } from "util";

export const setupExpress=async(backPath)=>{
    try {
        await execa("npm",["install","express","cors"],{
            cwd:backPath,
            stdio:"inherit"
        })
        fs.writeFileSync(path.join(backPath,"src/server.js"),`import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'

import { connectDB } from './lib/db.js';

dotenv.config()

const app=express() 

app.use(cors({
    origin: process.env.NODE_ENV==="development" ? "http://localhost:5173" || true:true,
    credentials:true,
}))
const PORT = process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log("server listening on:" ,PORT);
    connectDB()
})
        
        `)
        await execa("npm",["install","node","nodemon"],{
            cwd:backPath,
            stdio:"inherit"
        })
        const jsonCont=fs.readFileSync(path.join(backPath,"package.json"),'utf8')
        const updatedJsonCon=jsonCont.replace(/"test": "echo \\"Error: no test specified\\" && exit 1"/,match=>`
${match},
"dev": "nodemon src/server.js"`)
        const moduleUpdate=updatedJsonCon.replace(/{\s*/,`
{
    "type": "module",`)

        fs.writeFileSync(path.join(backPath,"package.json"),moduleUpdate)
    } catch (error) {
        console.log(error);
        
    }
}