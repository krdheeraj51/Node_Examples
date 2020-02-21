/***
 * Read lestest file property 
 * 
 */

const fs = require('fs')
async function getLatestFile() {
    const dirPath = '/home/dheeraj/Documents/BlogPost/Downloads';
    let dirCont = fs.readdirSync(dirPath);
    let files = dirCont.filter(function (elm) { return elm.match(/.*\.(csv)/ig); });
    for (let fileP = 0; fileP < files.length; fileP++) {
        let filsStats = fs.statSync(dirPath + "/" + files[fileP]);
        if (new Date(filsStats['birthtime']).getDate() === new Date().getDate() &&
            new Date(filsStats['birthtime']).getMonth() === new Date().getMonth() &&
            new Date(filsStats['birthtime']).getFullYear() === new Date().getFullYear() &&
            new Date(filsStats['birthtime']).getHours() === new Date().getHours() //&& 
        ) {
            return {
                fileName: files[fileP],
                fileLocation: dirPath + "/" + files[fileP]
            };
        }
}
}



module.exports = {
    getLatestFile
}