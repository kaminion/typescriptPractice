// 이 파일은 컴파일 되지 않는 예시파일임.

/*interface Human 
{
    name:string,
    age:number,
    gender:string
}*/


class Human
{
    public name : string;
    public age : number;
    public gender : string;

    constructor(name: string, age:number, gender?:string)
    {
        this.name = name;
        this.age  = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const name = "nicolas",
      age = 24,
      gender = "male"

const person = 
{
    name,
    age,
    gender,
}


const sayHi = (person : Human): void => {
    console.log(`Hello ${person.name} you are ${person.age}, you are a ${person.gender}`);
}

sayHi(lynn);

export {};