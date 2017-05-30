const less = require("less");
const fs = require("fs");
const path = require("path");

const source = "./App";
const target = "./wwwroot/css";

console.log(`Compiling all *.less files in ${source} to ${target}`);

less.logger.addListener({
  error: msg => console.log(msg),
  warn: msg => console.warn(msg)
});

return new Promise((globalResolve, globalReject) => fs.readdir(source, (appDirError, appFiles) => {
  if(appDirError) {
    console.error(`Could not read directory ${source}, error: ${appDirError}`);
    globalReject(appDirError);
    return;
  }

  const lessFiles = appFiles.filter(f => /\.less/.test(f)).map(f => ({
    filePath : path.join(source, f),
    fileName : path.basename(f, '.less')
  }));

  console.log(`Found ${lessFiles.length} *.less files in ${source}`);

  const lessCompilationPromises = lessFiles.map(lessFile => new Promise((lessCompilationResolve, lessCompilationReject) => {
    fs.readFile(lessFile.filePath, (lessFileError, lessFileContents) => {
      if (lessFileError) {
        console.error(`Could not read file ${lessFile.filePath}, error: ${lessFileError}`);
        lessCompilationReject(lessFileError);
        return;
      }
      const targetFileName = path.join(target, lessFile.fileName, ".css");
      less.render(lessFileContents, {filename: targetFileName})
        .then(
          () => { console.log(`Compiled ${lessFile.filePath} to ${targetFileName}`); lessCompilationResolve(targetFileName); }
         ,(lessError) => { console.error(`Could not compile ${lessFile.filePath}. Error: ${lessError}`); lessCompilationReject(lessError); });
    });
  }));

  Promise.all(lessCompilationPromises).then(globalResolve, globalReject);
})).then(() => console.log("Finished compiling all less files"), error => console.error(error));
