class Family {
    constructor(name, members){
        this._name = name;
        this._members = members;
    }

    get name(){
        return this._name;
    }

    get members(){
        return this._members;
    }
}

class FamilyMember extends Family{
    constructor(name, firstName, age){
        super(name);
        this._firstName = firstName;
        this._age = age;
    }

    get age(){
        return this._age;
    }

    get firstName(){
        return this._firstName;
    }

}

let aranha = new Family('Aranha', 4);
let reeve = new FamilyMember(aranha.name, 'Reeve', 26);

console.log(`The eldest son in the ${aranha.name} family is ${reeve.firstName}`);

let nextOfKin = aranha.members - 1;

console.log(`${reeve.firstName} has ${nextOfKin} other members in the family`);