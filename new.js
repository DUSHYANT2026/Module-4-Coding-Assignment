
const names = ['John', 'Jane', 'Bob', 'Alice'];

function startsWithJ(name) {
  return name.charAt(0).toLowerCase() === 'j';
}

function sayHelloOrGoodbye(name) {
  if (startsWithJ(name)) {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}


for (let i = 0; i < names.length; i++) {
  sayHelloOrGoodbye(names[i]);
}
