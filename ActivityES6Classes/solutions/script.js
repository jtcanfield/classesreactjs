// WARM UP!

// 1
//  WRITE A CONSTRUCTOR FUNCTION
// Write a basic Dog() constructor function with the following properties set to 'true'; barks and wagstail.

function Dog() {
  this.barks = true;
  this.wagstail = true;
}

// Create an instance of Dog.
// Define your letiable, fido.
let fido = new Dog();

// Print fido barks. It should print true.
// It should prin, true.
console.log(fido.barks)

// 2
// CLASS DECLARATION
// Declare a DogClass class.
// It should have the following properties set to 'true'; barks and wagstail.

class DogClass {
  constructor() {
    this.barks = true;
    this.wagstail = true;
  }
}

// Create an instance of DogClass()
// Define your letiable, spike
let spike = new DogClass();

// Print spike wagstrail.
// It should print, true.
console.log(spike.wagstail)

// 3
// EXTENDS
// DECLARE A SUBJECT CLASS
// It should have the property of 'requiresBooks' set to 'true'.

class Subject {
  constructor() {
    this.requiresBooks = true;
  }
}

// DECLARE A SUB-CLASS MATH
// Extend from Subject
// It should inherit requiresBooks
// It should have an additional property of 'requiresCalculator ' set to 'true'.

class Math extends Subject {
  constructor(requiresBooks) {
    super(requiresBooks)
    this.requiresCalculator = true;
  }
}

// Declare a 'math' letiable, creating an instance of Math
let math = new Math();

//Print math
// It should print: "Math {requiresBooks: true, requiresCalculator: true}"
console.log(math)

//4
// SUB-CLASS
// DECLARE A SUBCLASS OF GEOMETRY
// Extend from Math
// It should have an additional property of 'requiresRuler' set to true.

class Geometry extends Math {
  constructor() {
    super()
    this.requiresRuler = true;
  }
}

// Declare a 'geometry' letiable, creating an instance of Geometry

let geometry = new Geometry();

// Print geometry
// It should print: "Geometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true}"
console.log(geometry)

//5
// SUB-CLASS
// DECLARE A SUBCLASS OF TRIGONOMETRY
// Extend from Geometry
// The constructor should have a parameter of 'specialCalculator'
// Set the value of specialCalculator equals to specialCalculator so you can pass this value when you create an instance of Trigonometry.

class Trigonometry extends Geometry {
  constructor(specialCalculator) {
    super()
    this.specialCalculator = specialCalculator;
  }
}

// Declare a 'trigonometry' letiable, creating an instance of Trigonometry, passing in an argument of 'Ti-83'.

let trigonometry = new Trigonometry('Ti-83');

// Print trigonometry
// It should pring: "Trigonometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true, specialCalculator: "Ti-83"}"
console.log(trigonometry)

//6
// SUB-CLASS
// DECLARE A SUBCLASS OF CALCULUS
// Extend from Trigonometry
// The constructor should have a parameter of 'requiresRuler' and 'specialCalculator'
// In should inherit 'requiresRuler' and 'specialCalculator'
// Calculus does not require a ruler, so set that property to 'false'. It does require a special calculator, the 'Ti-89'

class Calculus extends Trigonometry {
  constructor(requiresRuler, specialCalculator) {
    super(requiresRuler, specialCalculator)
    this.requiresRuler = false
    this.specialCalculator = specialCalculator;
  }
}

// Declare a letiable of 'calculus', creating an instance of Calculus, passing in a boolean of 'false'

let calculus = new Calculus(false, 'Ti-89')

// Print calculus
// It should print: "Calculus {requiresBooks: true, requiresCalculator: true, requiresRuler: false, specialCalculator: "Ti-89"}"
console.log(calculus)
