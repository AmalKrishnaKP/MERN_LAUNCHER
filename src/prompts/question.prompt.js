import chalk from "chalk";
import inquirer from "inquirer";


export const askQuestions=async()=>{
    try {
        console.log(chalk.red("Project Details"));
        console.log(chalk.white("------------------"));
        const answer=await inquirer.prompt([
        {
            type:"input",
            name:"ProjectName",
            message:"Enter the project Name :",
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
    return answer;
    } catch (error) {
        console.log(error.message);
        
        
    }
}