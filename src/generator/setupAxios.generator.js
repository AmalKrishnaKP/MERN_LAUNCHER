import { execa } from 'execa';
import fs from 'fs'
import path from 'path';

export const setupAxios=async(frontPath)=>{
    try {
        await execa("npm",["install","axios"],{
            cwd:frontPath,
            stdio:"inherit"
        })
        fs.writeFileSync(path.join(frontPath,"src/lib/axios.js"),`
import axios from 'axios'

export const axiosInstance=axios.create({
    baseURL: import.meta.env.MODE==="development"? "http://localhost:5000":"",
    withCredentials:true,
})

        `)
        
    } catch (error) {
        console.log(error);
        
    }
}