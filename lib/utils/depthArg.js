export default async function depthArg(args) {
    let maxDepth = Infinity;
    const depthArg = args.find((arg) => arg.startsWith("--depth="));
    
    if (depthArg) {
        const depthValue = depthArg.split("=")[1];
        if (!depthValue || isNaN(parseInt(depthValue,10))) {
            throw new Error("El valor del argumento -d debe ser un número");
        }
    }
    return maxDepth;
}