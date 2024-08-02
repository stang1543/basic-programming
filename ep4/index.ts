//function Day(dayOfWeek) {
//     if (dayOfWeek < 1) {
//         console.log('error')
//     } else if (dayOfWeek === 1) {
//         console.log('วันอาทิตย์')
//     } else if (dayOfWeek === 2) {
//         console.log('วันจันทร์')
//     } else if (dayOfWeek === 3) {
//         console.log('วันอังคาร')
//     } else if (dayOfWeek === 4) {
//         console.log('วันพุธ')
//     } else if (dayOfWeek === 5) {
//         console.log('วันพฤหัส')
//     } else if (dayOfWeek === 6) {
//         console.log('วันศุกร์')
//     } else if (dayOfWeek === 7) {
//         console.log('วันเสาร์')
//     } else if (dayOfWeek > 7) {
//         console.log('error')
//     }
// }
//Day(6)

// function Du(dayOfWeek : number){
//     switch (dayOfWeek){
//         case 1:
//             console.log('วันอาทิตย์')
//             break
//         case 2:
//             console.log('วันจันทร์')
//             break
//         case 3:
//             console.log('วันอังคาร')
//             break        
//         case 4:
//             console.log('วันพุธ')
//             break
//         case 5:
//             console.log('วันพฤหัส')
//             break
//         case 6:
//             console.log('วันศุกร์')
//             break
//         case 7:
//             console.log('วันเสาร์')
//             break
//         default:
//             console.log('error')
//             break
//     }       
// }
// Du(9)

// function wet(g: number, b: number) {
//     const bmi = g / (b ** 2)
//     switch (true) {
//         default:
//             console.log('error')
//             break
//         case bmi < 18.50:
//             console.log('น้ำหนักน้อย')
//             break
//         case bmi >= 18.5 && bmi < 24.9:
//             console.log('น้ำหนักปกติ')
//             break
//         case bmi >= 25 && bmi < 29.9:
//             console.log('น้ำหนักเกิน')
//             break
//         case bmi > 30:
//             console.log('อ้วน')
//             break
//     }
// }
// (33.22)

// function test(x: number, digit: number) {
//     const t = x.toFixed(digit)
//     return t
// }
// console.log(test(46,15))

// function com(y: number) {
//     const s = y.toLocaleString()
//     return s
// }
// console.log(com(17254))


// const namestr: string = "hello Nex, How are you"

// console.log(namestr.length) // คือการนับตัวอีกษรว่ามีทั้งหมดกี่ตัว นับที่เว้นวรรคด้วย

// const namestr: string = "hello"

// console.log(namestr.charAt(0)) //ดึงเอาตัวอักษรออกมา ตามลำดับของตัวอีกษร

// const namestr: string = "thaNaWat chanTaMas"
// console.log(namestr.charAt(15))

// const namestr: string = "การบ้านเยอะเหลือเกินครับอาจารย์ ปวดหัวไปหมดแล้ว"
// console.log(namestr.charAt(namestr.length - 3)) //เป็นการดึงเอาตัวอักษรออกมาตามที่เราต้องการ

// const namestr: string = "การบ้านเยอะเหลือเกินครับอาจารย์ ปวดหัวไปหมดแล้ว"
// console.log(namestr.trimStart()) //คือการเอาการเว้นวรรคข้างหน้าออก

// const namestr: string = "การบ้านเยอะเหลือเกินครับอาจารย์ ปวดหัวไปหมดแล้ว"
// console.log(namestr.trimEnd()) //คือการเอาเว้นวรรคข้าวหลัวของประโยคออก

// const namestr: string = "thaNaWat"
// console.log(namestr.toUpperCase()) // เปลี่ยนตัวอักษรเป็นพิมพ์ใหญ่
// const namestr: string = "thaNaWat"
// console.log(namestr.toLowerCase()) // เปลี่ยนตัวอักษรเป็นพิมพ์เล็ก

// const namestr: string = "thaNaWat"
// console.log(namestr.indexOf('N')) // ถ้าเราอยากรู้ว่าตัวอักษรนี้อยู่อันดับที่เท่าไหร่ให้ใส่โค้ดนี้