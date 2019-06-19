const program = require('commander');


function logger(message) {
    //should append the date (as a readable string) to the message
    console.log('Msg:', message, 'Date:', new Date());
}


function main() {
    program.option('--msg <string>', 'msg for the logger');
            
    program.parse(process.argv);

    if (program.msg) {
        logger(program.msg);
    } else {
        program.help();
    }
}

main();