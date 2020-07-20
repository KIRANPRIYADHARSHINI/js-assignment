const student={
    name:'Helsink',
    age:24,
    project: {
        diceGame:'Two player dice game using JS'
    }
    
}

console.log(student.name);
console.log(student.age);
console.log(student.project.diceGame);

const {name, age, project: {$diceGame}} = student;
console.log(name, age, diceGame);


// const name=student.name;
// // const {name, age} = student;
// const age=student.age;
// const diceGame=student.project.diceGame;
// console.log(name);
// console.log(age);
// console.log(diceGame);
