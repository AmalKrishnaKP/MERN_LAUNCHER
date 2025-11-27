import chalk from 'chalk';
import fs from 'fs'
import path from 'path';
import { exit } from 'process';

import { frontendSetup } from '../setups/frontend.setups.js';
import { backendSetup } from '../setups/backend.setup.js';
import { execa } from 'execa';


export const createProjectStructure=async(answer)=>{
    try {
        const dirPath=  path.join(process.cwd(),answer.ProjectName)       //  main_dir path
        console.log(dirPath);
        
        await ProjectFolder(answer.ProjectName)                         //  main_dir created
        console.log("folder created successfully");

        await frontentFolder(dirPath,answer);
        
        await backendFolder(dirPath,answer);
        
        
        
        
    } catch (error) {
        
    }
}

const ProjectFolder=async(name)=>{
    try {
        
        if(fs.existsSync(name))
        {
            console.log(chalk.red("folder already exist"));
            process.exit(1)
             
        }
        else
            fs.mkdirSync(name)
    } catch (error) {
        console.log(error);
        
    }
}
const frontentFolder=async(dirPath,answer)=>{
    try {
        fs.mkdirSync(path.join(dirPath,"frontend"))
        const frontPath=path.join(dirPath,"frontend")
        
        await frontendSetup(frontPath)

    } catch (error) {
        console.log(error);
        
    }
}
const backendFolder=async(dirPath,answer)=>{
    try {
        fs.mkdirSync(path.join(dirPath,"backend"))
        fs.mkdirSync(path.join(dirPath,"backend/src"))
        const backPath=path.join(dirPath,"backend")
        
        await execa("npm",["init","-y"],{
            cwd:backPath,
            stdio:"inherit"
        })
        await backendSetup(backPath,answer)
        

    } catch (error) {
        console.log(error);
        
    }
}