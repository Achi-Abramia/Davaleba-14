// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი.


const numbers = [87, 94, 120, 3, 54];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);


// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.


const info = [
  {
    name: "Levani",
    age:  23,
    address: "Khornabuji St.",
  },
  {
    name: "Giorgi",
    age:  30,
    address: "Chargali St.",
  },
  {
    name: "Daviti",
    age:  27,
    address: "Tibaani St.",
  },
];


// 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"


console.log(`My name is ${info[0].name}`);
console.log(`My age is ${info[0].age}`);
console.log(`My address is ${info[0].address}`);


// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"


if (info[1].age < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
};


// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი . გამოიყენეთ ეს რესურსი 


let numbersLog = [5, 38, 29, 75, 90];
for (let i = 0; i < numbersLog.length; i++) {
  console.log(numbersLog[i]);
};


// დამატებითი დავალება
// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით ,0 არის კვირა ,1 არის ორშაბათი და ასე შემდეგ, 0-6 მდე რიცხვს აბრუნებს სადაც 6 არის შაბათი .

// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე. (სურვილის შემთხვევაში შეგიძლიათ დაამატოთ სხვა პირობებიც სადაც და, ან  || && ლოგიკურ ოპერატორებს გამოიყენებთ)
// დავალებები დანომრიეთ და ისე ატვირთეთ


switch (new Date().getDay()) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
     currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
};
console.log(currentDay)