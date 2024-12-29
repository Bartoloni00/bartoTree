import fs from "fs";
import path from "path";

export default function displayTree(dir, currentDepth, maxDepth) {
    if (currentDepth > maxDepth) return;

    try {
        const files = fs.readdirSync(dir);

        let result = '';
        files.forEach((file) => {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);

            const indent = "____".repeat(currentDepth);
            const displayName = stats.isDirectory() ? `[${file}]` : file;

            console.log(`${indent}${displayName}`);
            result += `${indent}${displayName}\n`;
            if (stats.isDirectory()) {
                displayTree(fullPath, currentDepth + 1, maxDepth);
            }

            return result;
        });

    } catch (error) {
        console.log(`Error leyendo el directorio: ${dir}`);
        return ''
    }
}
