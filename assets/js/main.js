let left1=document.querySelector("#left1")
let right1=document.querySelector("#right1")
let scrol=document.querySelector(".scrol")
let scrol_position=0
left1.addEventListener("click" ,()=>{
  if (scrol_position!=1000){
    scrol_position+=100
    scrol.style.transform += "translateX(-100px)"
  }
})
right1.addEventListener("click" ,()=>{
  if (scrol_position!=0){
    scrol_position-=100
    scrol.style.transform += "translateX(100px)"
  }
})

let left2=document.querySelector("#left2")
let right2=document.querySelector("#right2")
let scrol2=document.querySelector(".scrol1")
let scrol2_position=0
left2.addEventListener("click" ,()=>{
  if (scrol2_position!=1000){
    scrol2_position+=100
    scrol2.style.transform += "translateX(-100px)"
  }
})

right2.addEventListener("click" ,()=>{
  if (scrol2_position!=0){
    scrol2_position-=100
    scrol2.style.transform += "translateX(100px)"
  }
})
//*5