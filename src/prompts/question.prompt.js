import chalk from "chalk";
import inquirer from "inquirer";


export const askQuestions=async()=>{
    try {
        console.log(chalk.red("Project Details"));
        console.log(chalk.white("------------------"));
        const answer=await inquirer.prompt([
        {
            type:"confirm",
            name:"currentFolder",
            message:"use current folder as the project folder or create new one(yes/no)?",
            
        },
        {
            type:"input",
            name:"ProjectName",
            message:"If no Enter the project Name :",
            when:(answer)=>!answer.currentFolder,
            validate:(value)=>{
                if (!value)
                {
                    value=null
                    return "Cannot leave Empty"
                }
                return true
                
            }
        },
        {
            type:"input",
            name:"mongoURL",
            message:"Enter the mongoDB url (double check before pasting)",
            validate:(value)=>{
                if (!value)
                {
                    value=null
                    return "Cannot leave Empty"
                }
                return true
                
            }
        }
    ])
    console.log(answer);
    
    return answer;
    } catch (error) {
        console.log(error.message);
        
        
    }
}