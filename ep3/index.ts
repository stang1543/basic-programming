// function helloWorld() {
//     console.log('Hi')
// }
// //ไม่รับ input ไม่มี output
// //helloWorld()

// function secondHello(name: string) {
//     console.log(name)
// }
// // รับ input แต่ไม่มี output
// //secondHello('thaNaWat')

// function getPi() {
//     return 3.14
// }
// //ไม่มี input แต่มี output
// //console.log(getPi())

// function st(Fname: string, sname: string, Tname: string) {
//     if (!(Fname === 'nan' || sname === 'plam') && Tname === 'YO') {
//         console.log('เริ่มสอน')
//     } else {
//         console.log('ยังไม่สอน')
//     }
// }

// //st('thanawat', 'p', 'YO')

// function thaNaWat(gentalman: string, height: number) {
//     if (gentalman === 'ชาย' && height > 170) {
//         console.log('จับใบดำใบแดง')
//     } else {
//         console.log('ไม่เข้าเกณฑ์')
//     }
// }
// //thaNaWat('ชาย', 165)
// function femal(mal: string , weight: number){
//     if (mal === 'หญิง' && weight > 60){
//         console.log('น้ำหนักเกิน')
//     } else {
//         console.log('น้ำหนักไม่เกิน')
//     }
// }
//femal('หญิง',50)
// function couture(sex: string , height: number, weight: number){
//     if (sex === 'male' && height >= 170 || (weight > 50 && weight <= 110)) {
//         console.log('จับใบดำใบแดง')
//     } else{
//         console.log('ไม่เข้าเกณฑ์')
//     }
// }
// couture ('ชาย',180,70)
// function calculateBMI(weight: number, height: number): number {
//   return weight / (height * height);
// }
// function getBMICategory(bmi: number): string {
//   if (bmi < 18.5) {
//     return "น้ำหนักน้อย";
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     return "น้ำหนักปกติ";
//   } else if (bmi >= 25 && bmi < 29.9) {
//     return "น้ำหนักเกิน";
//   } else {
//     return "อ้วน";
//   }
// }

const namestr: string = "hello Nex How are you"

console.log(namestr.length)