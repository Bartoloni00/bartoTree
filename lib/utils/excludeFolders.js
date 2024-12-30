export default function filterFolders(args) {
    let excludeFolders = [];
    const excludeArgIndex = args.findIndex((arg) => arg.startsWith("--exclude="));
    if (excludeArgIndex !== -1) {
        const excludeValue = args[excludeArgIndex].split("=")[1];
        
        if(excludeValue){
            excludeFolders.push(...excludeValue.split(","));
        }
    }
    return excludeFolders;
}