

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  function exampleFunction() {
    const x = 'decide inside function';
    console.log('inside function');
    console.log(x) 
  }

const headerBox = document.getElementById('container-header1');
function handlerBox(e) {
    alert('hey dude!');
}
headerBox.addEventListener('click', handlerBox)

function sum(a,b) {
    return a + b;
}

function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

function showOk() {
    alert('You agreed.');
}

function showCancel() {
    alert('You canceled the execution.');
}

let result = (d,f) => d + f;


let saud = result(3,4);