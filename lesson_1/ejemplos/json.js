const example = {
  name: 'Example Object',
  sayHello: (name) => `Hello ${name}`,
  skills: [
    { name: 'NodeJs' },
    { name: 'javaScript' },
    { name: 'PHP' }
  ]
};

console.log('Object: ', example);

// Convertir un object a string
const stringExample = JSON.stringify(example);
console.log('String Example: ', stringExample);

// Convertir un string a objecto
const parseExample = JSON.parse(stringExample);
console.log('Parse Example: ', parseExample);
