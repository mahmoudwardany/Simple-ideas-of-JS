let myinp = document.getElementById('inp')
document.getElementById('btn')
let mytxt = document.getElementById('txt')
document.getElementById('btn').addEventListener('click' ,()=>{
if(myinp.value == ''){
    mytxt.innerHTML='Please add any Msg'

}else {
  mytxt.innerHTML=''  
mytxt.innerHTML +=`<p>${myinp.value} </p> `

myinp.value=''
}

})

function clock(){
let date=new Date()
let hours =date.getHours()
let min =date.getMinutes()
let second =date.getSeconds()
let flag = "AM"

if(hours == 0){
    hours = 12
}

if(hours > 12){
    hours = hours - 12;
    flag="PM"
}
if( hours < 10)hours = '0'+hours
if( min < 10)min = '0'+min
if( second < 10)second = '0'+second



document.querySelector(".colock").innerHTML=`${hours}:${min}:${second}${flag}`
setTimeout(function(){
    clock()
},1000)

}
clock()

bgbtn.addEventListener('click',bgcolor)
function bgcolor(){
document.body.style.background='#'+Math.random().toString(16).slice(2,8);
}







