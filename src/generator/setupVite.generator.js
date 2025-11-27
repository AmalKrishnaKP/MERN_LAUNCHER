import { execa } from "execa";

export const setupVite=async(frontPath)=>{
    try {
         const proc=execa("npm",["create","vite@latest",".","--","--template","react"],{
                    cwd:frontPath,
                    stdio: ["pipe", "inherit", "inherit"]})
         proc.stdin.write("n\n")
        await proc;
    } catch (error) {
        console.log(error);
        
    }
}
// import { execa } from "execa";

// export const setupVite=async(frontPath)=>{
//     try {
//             const proc=execa("npm",["create","vite@latest","."],{
//                     cwd:frontPath,
//                     stdio: ["pipe","pipe","inherit"]
//                 })
//             proc.stdout.on("data",(data)=>{
//                 const text=data.toString()
//                 console.log(text);
//                 if(text.includes("Select a framework"))
//                 {
//                     proc.stdin.write("\x1B[C\x1B[C\n")
//                 }
//                 else if(text.includes("Select a variant"))
//                 {
//                     proc.stdin.write("\x1B[C\x1B[C\x1B[C\n")
//                 }
//                 else
//                 {
//                     proc.stdin.write("n\n")
//                 }
                
//             })
//             await proc;


        
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }


