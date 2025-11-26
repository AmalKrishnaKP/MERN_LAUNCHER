#!/usr/bin/env node 
import { createProjectStructure } from "../src/generator/structure.generator.js";
import { askQuestions } from "../src/prompts/question.prompt.js";



console.log(process.cwd());


const run=async()=>{
    try {
        const answer= await askQuestions();   //asking iniital questions
        
        await createProjectStructure(answer)        
    } catch (error) {
        console.log(error);
        
    }
    
}
run();