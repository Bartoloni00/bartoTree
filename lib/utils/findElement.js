export default async function findElement(args) {
    let findValue = ''
    const findArg = args.find(arg => arg.startsWith("--find="))

    if(findArg) {
        findValue = findArg.split("=")[1]

        if (!findValue) {
            throw new Error('El valor del argumento --find debe ser una cadena de caracteres')
        }
    }

    return findValue
}