// esercizio 1
class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    ageDiff(otherUser){
        if(this.age === otherUser.age){ 
            return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}`
        }else if(this.age > otherUser.age){
            return `${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName}`
        }else{
            return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}`
        }  
    }
}

const x = new User('Manuel', 'Centini', 30, 'Roma');
const y = new User('Luca', 'Iannice', 42, 'Bologna');

console.log(x.ageDiff(y));
console.log(y.ageDiff(x));