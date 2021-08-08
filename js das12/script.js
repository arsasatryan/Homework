// JSon
// let user={
//     name:"Hayk",
//     age:25,
//     courses:["html","css","javascript"],
//     wife:null
// }

// let json=JSON.stringify(user)
// alert(json)
// alert(typeof json) obyekty sarqum e string

// let num=JSON.stringify(3)
// alert(typeof num)


// let bool=JSON.stringify(true)
// alert(typeof bool)

// let arr=JSON.stringify([1,2,15])
// alert(typeof arr) 


// let room={
//     number:23,
// }
// let meetup={
//     title:"conferance",
//     participarts:["Anna","Armen"]
// }
// meetup.place=room
// room.occupied=meetup
// console.log(JSON.stringify(meetup));ays depqum chi ashxatum mer jsony

// let user={
//     name:"Vahram",
//     surName:"Xachatryan",
//     isAdmin:false
// }
// let json=JSON.stringify(user,null,3)
// alert(json) tpum e amboxj obyekty

// let numbers="[0,1,2]"
// numbers=JSON.parse(numbers)
// alert(numbers[1]) nuyn dzev karox wnq hakaraky anel

// let user='{ "name":"Jhon","age":"25","wife":"null"}'
// let h=JSON.parse(user)
// console.log(h);


// let j= '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}'
// let json=JSON.parse(j)
// console.log(json)

// let j = {Name:"Krishna",Email: "XYZ", CN : 12345};
// let x=JSON.stringify(j)
// alert(x)
// alert(typeof x)

// function g(a){
    //     let hour=a/60;
    //     let hour1=Math.floor(hour)
    //     let min=(hour-hour1)*60
    //     let min1=Math.round(min)
    //     return hour1+" jam "+min1+ " rope"
    // }
    // console.log(g(220))


// Date

// let date=new Date()
// // console.log(date); cuyc e talis amsativy tvyal pahin
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let date=Date.now()
// console.log(date)

// let date=new Date(2018,2,15,20,30,54)
// console.log(date)

// let date =new Date()
// date.setFullYear(2020)
// date.setMonth(11)
// date.setHours(14)
// date.setMinutes(45)
// date.setSeconds(60)
//  console.log(date)

//  let div=document.getElementById("a")
//  setInterval(function(){
//      let date = new Date()
//      let h=date.getHours()<10? `0${date.getHours()}`:date.getHours();
//      let m=date.getMinutes()<10? `0${date.getMinutes()}`:date.getMinutes();
//      let s=date.getSeconds()<10? `0${date.getSeconds()}`:date.getSeconds()
//      div.innerHTML=`${h}:${m}:${s}`
//  },1000)

//  let div=document.getElementById("a")
//  setInterval(function(){
//      let date = new Date()
//      let y=date.getFullYear()<10? `0${date.getFullYear()}`:date.getFullYear();
//      let m=date.getMonth()<10? `0${date.getMonth()}`:date.getMonth();
//      let d=date.getDate()<10? `0${date.getDate()}`:date.getDate()
//      div.innerHTML=`${y}/${m}/${d}`
//  },1000)


// let date=new Date()
// function f(i){
//     let or=date.getDay()
//     let amis=date.getMonth()
//     let tari=date.getFullYear()
//     return tari-i
// }
// console.log(f(1994))


// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// let date=new Date()
// function f(){
//     let or=date.getDay()
//     let amis=date.getMonth()
//     let tari=date.getFullYear()
//     console.log(monthNames[amis])
// }
// f()


// let date=new Date()
// function f(){
//     let or=date.getDay()
//     if(or===7 && or===6){
//         return "ayo"
//     }
//     else{
//         return "voch"
//     }
// }
// console.log(f())


let date=new Date()
function f(){
let jam = date.getHours()
if(jam<12){
    return "AM"
}
else{
    return "PM"
}
}
console.log(f())
