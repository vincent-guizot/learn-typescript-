// type biasanya untuk 1 variable
// interface biasanya untuk object

type IDType = string | number;

let printID: IDType = 10;

interface Person {
    id: number,
    name: string,
    age: number,
    isGraduated: boolean,
    speak(str: string): void
}


const Person: Person = {
    id: 1,
    name: "Jack",
    age: 17,
    isGraduated: true,
    speak: function(str){
        console.log(str)
    }
}