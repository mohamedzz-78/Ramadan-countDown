let countDownDate = new Date("apr 04, 2022 02:28:59").getTime();     /* this out put date by mailseconds*/
console.log(countDownDate);                                       /* i can check it in console*/

let counter = setInterval(() => {
    let dateNow = new Date().getTime();                            /* it mean get date now */
    let dateDif = countDownDate - dateNow;                       /* now i get tim by mail second to between time now and start time 4/12/2021 */
let days = Math.floor(dateDif /(1000 *60 * 60 * 24));             /* out put date by mail seconds */
let hours =  Math.floor((dateDif %(1000 *60 * 60 * 24)) / (1000 * 60 * 60)); 
let minutes =  Math.floor((dateDif %(1000 *60 * 60 )) / (1000 * 60 )); 
let seconds = Math.floor((dateDif %(1000 *60  )) / (1000)); 
document.querySelector(".days").innerHTML=days+"days";             /* jion js by html to output days in page */
document.querySelector(".hours").innerHTML=hours+"hrs";
document.querySelector(".minutes").innerHTML=minutes+"min"; 
document.querySelector(".seconds").innerHTML=seconds+"sec";  
if(dateDif< 0) {
clearInterval(counter);
document.querySelector("section").innerHTML="كل عام وأنتم بخير   ";
}
},1000);
