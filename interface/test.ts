interface Person {
  name: string;
  age?: number;
}

function printName(person) {
  console.log(person.name);
}

printName({name: "Jim"});
