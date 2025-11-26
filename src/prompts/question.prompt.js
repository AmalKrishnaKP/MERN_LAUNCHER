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
            type:'checkbox',
            name:"language",
            message:"select language",
            choices:["JavaScript","TypeScript"],
            validate:(value)=>{
                return value.length<=0?"enter a checkbox":true
            }
        },
        {
            type:"confirm",
            name:"AddShadcn",
            default:true,
            message:"do you want shadCN"
        },
        {
            type:"confirm",
            name:"auto install",
            default:true,
            message:"add autoinstall"
        }
    ])
    return answer;
    } catch (error) {
        console.log(error.message);
        
        
    }
}