export default function helpOutput() {
    console.log("  BartoTree");
    console.log("  CLI app to display a tree view of all directories (enhanced ls)");
    console.log("  Usage: barto-tree tree [path] [options]");
    console.log("  Options:");
    console.log("  --exclude=<pattern>   Excludes files or directories matching the pattern (e.g., .git,node_modules).");
    console.log("  --depth=<number>      Specifies the maximum depth to display the structure (default: unlimited).");
    console.log("  -h, --help            Displays this help message.");
    console.log("  ");
    console.log("  Examples:");
    console.log("  barto-tree tree ../ --exclude=.git,node_modules --depth=2");
    console.log("  barto-tree tree ./project --depth=1");
    console.log("  barto-tree tree /home/user");
}