const {getLatestFile} = require('./getLatestFile')

async function getLatest (){
    let latest = await getLatestFile();

    console.log(latest);
}

getLatest();
