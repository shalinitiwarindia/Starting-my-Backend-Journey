const fs = require("fs");
const path = require("path");

function fileManager(args) {
    if (args.length < 2) {
        console.log("Usage: node index.js <operation> <filename/content> [newname]");
        return;
    }

    const operation = args[0].toLowerCase();
    const fileName = args[1];

    switch (operation) {
        case "read":
            fs.readFile(fileName, "utf8", (err, data) => {
                if (err) return console.error(`Error reading file: ${err.message}`);
                console.log(`\nFile Content:\n${data}`);
            });
            break;

        case "append":
            if (args.length < 3) {
                console.log("Usage: node index.js append <content> <filename>");
                return;
            }
            const content = args[1]; // Content to append
            const appendFile = args[2];
            fs.appendFile(appendFile, content + "\n", (err) => {
                if (err) return console.error(`Error appending to file: ${err.message}`);
                console.log(`Content appended to ${appendFile}`);
            });
            break;

        case "delete":
            fs.unlink(fileName, (err) => {
                if (err) return console.error(`Error deleting file: ${err.message}`);
                console.log(`File ${fileName} deleted successfully.`);
            });
            break;

        case "create":
            fs.writeFile(fileName, "", (err) => {
                if (err) return console.error(`Error creating file: ${err.message}`);
                console.log(`File ${fileName} created successfully.`);
            });
            break;

        case "rename":
            if (args.length < 3) {
                console.log("Usage: node index.js rename <oldname> <newname>");
                return;
            }
            const newName = args[2];
            fs.rename(fileName, newName, (err) => {
                if (err) return console.error(`Error renaming file: ${err.message}`);
                console.log(`File renamed from ${fileName} to ${newName}`);
            });
            break;

        case "list":
            fs.readdir(fileName, (err, files) => {
                if (err) return console.error(`Error listing directory: ${err.message}`);
                console.log(`Files in ${fileName}:`);
                files.forEach((file) => console.log(file));
            });
            break;

        default:
            console.log("Error: Unsupported operation.");
    }
}


const args = process.argv.slice(2);
fileManager(args);
