const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const questions = [
    'What your name?',
    'How are you?',
    'What do yo do?'
];

const asks = (rl, questions) => {
    return new Promise((resolve, reject) => {
        rl.question(questions, (answers) => {
            resolve(answers)
        })
    })
}

const form = function(questions){
    return new Promise(async resolve => {
        let res = [];
        for (let i = 0; i < questions.length; i++) {
            const result = await asks(rl, questions[i]);
            res.push(result);
        }
        rl.close();
        resolve(res)
    })
}

form(questions).then(data => {
    console.log(`Hello ${data[0]}`);
    console.log(`${data[1]}`);
    console.log(`${data[2]}`);
}).catch(err => {console.log(err)});
