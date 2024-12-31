import fs from "fs";
import path from "path";

export default function find(dir, currentDepth, maxDepth, findElement = '', excludeFolders = [])
{
    if (currentDepth > maxDepth) return;

   try {
    const files = fs.readdirSync(dir)

    let result = ''

    files
    .filter(file => !excludeFolders.includes(file))
    .forEach(file => {
        const fullPath = path.join(dir, file)
        const stats = fs.statSync(fullPath)

        if (file == findElement) {
            result = fullPath
            console.log('./'+result)
        }
        
        if(stats.isDirectory()) {
            const nestedResult = find(fullPath, currentDepth + 1, maxDepth, findElement, excludeFolders)
            result += nestedResult
        }

        return result
    })
   } catch (error) {
    console.log(`Error leyendo el directorio: ${dir}`)
    return ''
   }
}