//!Task-1 Verilmis arraydə 100-dən kiçik 3-ə bölünən ədədlərin cəmini tapmaq lazimdir.
let arr=[123,99,6,12,43,79,102,23,35,57];
let sum=0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i]<100 && arr[i]%3==0)
sum +=arr[i];
}
console.log(sum);

//? Task-2 // Verilmis arraydə mənfi və müsbət ədədlərin sayini tapmaq lazimdir.
// let arr = [1,23,43,-34,45,-12,-43,54,-44];
// let count =0;
// for (let i = 0; i < arr.length; i++) {
//  if(arr[i]<0){
//   count++;
//   console.log(arr[i]);
//  }
//  else{
//   count++;
//   console.log(arr[i]);
//  }
// }
// console.log(count);

//!Task-3 Verilmis arrayde cut ededlerin en boyuyunu index-ni tapan alqoritm yazin.
// let arr = [123,99,6,12,43,79,102,23,35,57];
// let maxEded=0;
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i]%2==0){
//     if(maxEded<arr[i]){
//       maxEded=arr[i]
//     }
//   }
// }
// console.log(maxEded);


//? Task-4 Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.
// let arr = [100,55,62,10];
// let minEded=Infinity;
// let maxEded=0;
// let edediOrta=0;
// let sum=0;
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//   if(maxEded<arr[i]){
//     maxEded=arr[i];
//   }
//   if(minEded>arr[i]){
//     minEded=arr[i];
//   }
// }
// console.log(maxEded);
// console.log(minEded);

//!Task-5 Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub-olmadigini yoxlayin.
// let arr = [123,99,6,12,43,79,102,23,35,57];
// let count=0;
// let edediOrta=0;
// let sum=0;

