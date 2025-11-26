import chalk from 'chalk';
import fs from 'fs'
import path from 'path';
import { exit } from 'process';

import { setupVite } from './setupVite.generator.js';
import { frontendSetup } from '../setups/frontend.setups.js';


export const createProjectStructure=async(answer)=>{
    try {
        const dirPath=  path.join(process.cwd(),answer.ProjectName)       //  main_dir path
        console.log(dirPath);
        
        await ProjectFolder(answer.ProjectName)                         //  main_dir created
        console.log("folder created successfully");

        await frontentFolder(dirPath);
        console.log("frontend created successfully");
        
        
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
const frontentFolder=async(dirPath)=>{
    try {
        fs.mkdirSync(path.join(dirPath,"frontend"))
        const frontPath=path.join(dirPath,"frontend")
        
        await frontendSetup(frontPath)

    } catch (error) {
        console.log(error);
        
    }
}