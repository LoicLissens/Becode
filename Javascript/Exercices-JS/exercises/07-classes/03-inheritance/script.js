(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "Wouf";
  }
  class Cat extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "Miaouw";
  }
  const $but = document.getElementById("run");
  $but.addEventListener("click", () => {
    let myDog = new Dog("Eliot");
    let myCat = new Cat("Lilou");
    console.log(myDog.sayHello());
    console.log(myCat.sayHello());
    console.log(myDog.name);
  });
})();
