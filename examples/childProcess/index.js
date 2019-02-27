const cp = require('child_process');

function execCommand(cmd){
    cp.exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        if(stdout) console.log(`Output: ${stdout}`);
        if(stderr) console.log(`Error: ${stderr}`);
    })
}

execCommand('dir');
// execCommand('ls');