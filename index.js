class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getAge() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const person1 = new Person("Mg Mg", 21, "mgmg@gmail.com");
person1.getAge();

class VipPerson extends Person {
  constructor(name, age, email, vipTicket) {
    super(name, age, email);
    this.vipTicket = vipTicket;
  }
  getRoomFree() {
    console.log(`Welcome VIP No: ${this.vipTicket}, you can get room free.`);
  }
}

const vip1 = new VipPerson("Aung Aung", 21, "aung@gmail.com", "ejwfoenwpeif");
vip1.getAge();
vip1.getRoomFree();
