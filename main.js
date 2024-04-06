/*COURS 94-101*/
// lesson 94-----------------------------------------------

/* DOM[events simulation]
--click
--focus
--blur
*/
let two = document.querySelector(".two")
let one= document.querySelector(".one")

window.onload =function(){
    two.focus()
}// ki ndir reload actialiser ydir fouus bla tadkhl
one.onblur = function(){
    document.links[0].click()
}//hna ki nkhrj mn case hadik ndir click f ay blasa yrouh toul lsite

/* verification code apple 
ki nktb code fih 6 yrouh ysouti toul llcase 2 donc hadi
utilisiw onblur mnou aprs focus*/


// lesson 95-----------------------------------------------
/* DOM [CLASS LIST]
--class list
--length
--contains
--item(index)
--add
--remove
--toggle*/

let elm=document.getElementById("mydiv")
console.log(elm.classList)//list te class
console.log(typeof(elm.classList))//object

console.log(elm.classList.contains("one"))//3aws class ida l9ah return true

console.log(elm.classList.contains("thhh"))//false

console.log(elm.classList.item("0"))//yjibli ism class lwl
console.log(elm.classList.item("3"))//yjib ism class lkhr

elm.onclick = function(){
    elm.classList.add("ADDone","AAAtwo")
    elm.classList.remove("one","two")
    elm.classList.toggle("imanee")//ydwer  law class kayn ynhih law mkanch ydifou 3ks add remove both
    elm.classList.toggle("show") //tclicke yhat tcliker ynhih
}//ki nclicker elih f html hayzidli class li ktbthm jdd

// lesson 96-----------------------------------------------
/*CSS STYLING STYLESHEET
--style
--csstext
--remove..(prop name)
--setprop..(propname,val,priorty)*/

let el=document.getElementById("mydiv96")

el.style.color="red"
el.style.backgroundColor="green"//methode camel case

el.style.cssText = "font-wieght:bold; color: red";

el.style.removeProperty("color") //bachil li fi inline !!
el.style.setProperty("font-size","50px","important") ;

//pour fichier css whdha
/* rules ca marche pas (chercher)
console.log(document.styleSheets[0].rules[0].style.removeProperty("line-height"));
console.log(document.styleSheets[0].rules[0].style.setProperty("background-color","red"));
*/

//lesson 97-----------------------------------------------
/* DOM[deal with elm]
--before/--after/--append/--prepend/--remove*/
let e=document.getElementById("mydiv97")
let credp=document.createElement("p")
//bara kharj div nm9ahm f elemen
e.before("hi")//9bl  div
e.before(credp)//9bl  div
e.after("after")
//dakhl  div debut 9bl span w fin bed span
e.append("fin")// ala fin
e.prepend("debut")//au debut
//nafs chi ida hbit nhat p
//ynhi kolch nihaei mn document ni inspect ni walou
/*ynhi div 3KS KI NDIR DISPLAY NONE 9ADR YJI AY WAHD YNHI DISPLAY NONE HADIK
donc div hadak yrj3 masi remove say mknch tar hmam
e.remove()


//lesson 98-----------------------------------------------
/* DOM [traversing]
--nextsibling/--previoussibling/--nextelmsib/--pevelmsib/ parenrelm*/
let span =document.querySelector(".twoo")
console.log(span.nextSibling)//donc yjib comment #text
console.log(span.nextElementSibling)// span 3 three
console.log(span.nextElementSibling.remove())// undifiend

console.log(span.previousSibling)//donc yjib comment #text
console.log(span.previousElementSibling)// span 3 three
//console.log(span.previousElementSibling.remove())// undifiend

console.log(span.parentElement)//min parent te span??=>div yjib f console

//ex
span.onclick =function(){
//span.parentElement.style.color="red";//ki nkliki ywli red wyzidha meme f div 

span.parentElement.style.opacity ="0";//remove f blastha toul
}
//lesson 99-----------------------------------------------
/*DOM [cloning]
--cloneNode(deep) false maydich lhwayj li dakhl p */
let mp=document.querySelector(".myp").cloneNode(true)//yakhoud kolchi
let md=document.querySelector(".d99")
console.log(mp)
mp.id=`${mp.id}-colon`//change id to mypp-colon
md.appendChild(mp) //p yhatha f div hadi f element li jht console


//lesson 100-----------------------------------------------
/* dom[ add evernt listner]
--addeventlistener/--use without on /--attach multiple events/--error test
--for searching --capture and bubbling js/ removeeventlistener
*/
 let m=document.querySelector(".pp")

m.onclick= o;
m.onclick= t;

 //m.onclick=function(){
 //console.log("hi from")
 //}
 function o(){
console.log("1 from")
} 
function t(){
    console.log("2 from")
    
     }
    //donc n9dr ndir 5 event kol whda wch dir haja mliha hadi methode nrml mn9drch 
window.onload="osama"
//--------
 m.addEventListener("click", function(){console.log("EVENTTT")})

 m.addEventListener("click", o);
 m.addEventListener("click", t);
/* 2 from
evennt
1 from 
2 from*/
//m.addEventListener("click","string")//error

// ahm haja

m.onclick=function(){
    let newp = m.cloneNode(true)//drt copy ela p
    newp.className="imane" //mditlou class bach yban brk
    document.body.appendChild(newp)
    //doka 3ayz f consol yktbli bli noskha mch asli
    
}
//event hna  matslhch ykhrjli error psk mazal elm madharch asl,
//hna yji dawr a3dam haja addlistner
//ana doka jspas lensr dok nhws elih ndir check
/*
let clondt=document.querySelector(".imane")
clondt.onclick=function(){
console.log("im copy")
}*/

document.addEventListener("click",function(e){
if(e.target.className === "imane"){
    console.log(e.target)
    console.log("ima copied")}/*hna print target kol manclicke tkhrjli haja hta ykhrj 
clon l copy donc eliha ndir ida kan target hadak li clikit elih class ta3ou howa  imane
haywli howa l3nsr li nhws elih hna nbdl hadih e.target b im copiedd*/
})
/* kda ana drt event ela ensr lsa lm yatm inchaeh
awl maytm inchaeou  hna ana erftou njibou b class mhm jidann a imane */

//lesson 101 CHALLENGE-----------------------------------------------

