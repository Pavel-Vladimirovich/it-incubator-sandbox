// Who has the most money?

// ❗ DESCRIPTION:

// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:
//
// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".
//
// Notes:
//
// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

// ✔️ SOLUTIONS:

// not mine

class Student {
    constructor(name, fives, tens, twenties) {
        this.name = name;
        this.fives = fives;
        this.tens = tens;
        this.twenties = twenties;
    }


}

function mostMoney1(students) {
    if (students.length === 1) {
        return students[0].name
    }
    const getTotalMoney = (students) => {
        return students.fives * 5 + students.tens * 10 + students.twenties * 20
    }
    const totalsMoney = students.map(student => getTotalMoney(student))
    const maxMoney = Math.max(...totalsMoney)
    const isAllEqual = totalsMoney.every(total => total === maxMoney);
    if (isAllEqual) {
        return "all";
    }
    const winnerIndex = totalsMoney.indexOf(maxMoney);
    return students[winnerIndex].name;
}

// SOLUTION CODWARS:

function mostMoney(s) {
    s.sort((x,y)=>sum(y)-sum(x));
    if(s.length>1 && sum(s[0])===sum(s[1]))return 'all';
    return s[0].name;
}
const sum = (s) => (s.fives*5)+(s.tens*10)+(s.twenties*20);

// SOLUTION CODWARS:

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

// "What happens if one student has the most money?"
console.log(mostMoney([andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric")

// "What happens if there is only one student?"
console.log(mostMoney([andy]), "Andy")
console.log(mostMoney([stephen]), "Stephen")

// "What happens if all students have the same amount of money?"
console.log(mostMoney([cam, geoff]), "all")
console.log(mostMoney([david, cam, geoff]), "all")