const numbers =[1, 2, 3, 4, 5];
// const dubbled = [];
// for (const num of numbers){
//   dubbled.push(num * 2);
// }
// console.log(dubbled);
// ************************************
// const doubleit = num => num * 2;
// const doubled = numbers.map(doubleit);
// console.log(doubled);
//********************************** 
// const dubbled = numbers.map(num=>num*2);
// console.log(dubbled);
//*********************************** 
//উপরের 3টা ফাংশন তিনলাইন/দুই লাইন এবং এক লাইনে করা যায়।



const friends = ['Ashik', 'Niloy', 'Sojib'];
const firstLetter = friends.map(frd=>frd[0]);
console.log(firstLetter)


const products =[
  {name: 'laptop', price: 45000},
  {name: 'phone', price: 15000},
  {name: 'chair', price: 2000},
]
const prices = products.map(pd => pd.price);
console.log(prices);