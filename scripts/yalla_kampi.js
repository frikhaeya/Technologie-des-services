function displayname() {
   
    var x;
    x = document.getElementById("name").value;
    //document.getElementById("demo").innerHTML = x;

    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    
    function greeter(person) {
        return "Welcome To Our Web Site, " + person.firstName + " " + person.lastName;
    }

    var user = new Student(x, "M.", " ");
    document.getElementById('greet').innerHTML = greeter(user);

}

// Shopping Card

//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}
const count1 = document.getElementById('count1');
const price1 = document.getElementById('price1');
const priceT = document.getElementById('priceT');
function increment1() {
    count1.innerHTML = +count1.innerHTML + 1;
    price1.innerHTML = +price1.innerHTML + 150;
    priceT.innerHTML = +priceT.innerHTML + 150;
}
butplus1.addEventListener('click', increment1);
header.addEventListener('click', increment1);
function decrement1() {
    if (count1.innerHTML > 0) {
        count1.innerHTML = +count1.innerHTML - 1;
        price1.innerHTML = +price1.innerHTML - 150;
        priceT.innerHTML = +priceT.innerHTML - 150;
    }
}
butminus1.addEventListener('click', decrement1);
header.addEventListener('click', decrement1);


const count2 = document.getElementById('count2');
const price2 = document.getElementById('price2');
function increment2() {
    count2.innerHTML = +count2.innerHTML + 1;
    price2.innerHTML = +price2.innerHTML + 140;
    priceT.innerHTML = +priceT.innerHTML + 140;
}
butplus2.addEventListener('click', increment2);
header.addEventListener('click', increment2);

function decrement2() {
    if (count2.innerHTML > 0) {
        count2.innerHTML = +count2.innerHTML - 1;
        price2.innerHTML = +price2.innerHTML - 140;
        priceT.innerHTML = +priceT.innerHTML - 140;
    }
}
butminus2.addEventListener('click', decrement2);
header.addEventListener('click', decrement2);



const count3 = document.getElementById('count3');
const price3 = document.getElementById('price3');
function increment3() {
    count3.innerHTML = +count3.innerHTML + 1;
    price3.innerHTML = +price3.innerHTML + 44;
    priceT.innerHTML = +priceT.innerHTML + 44;
}
butplus3.addEventListener('click', increment3);
header.addEventListener('click', increment3);

function decrement3() {
    if (count3.innerHTML > 0) {
        count3.innerHTML = +count3.innerHTML - 1;
        price3.innerHTML = +price3.innerHTML - 44;
        priceT.innerHTML = +priceT.innerHTML - 44;
    }
}
butminus3.addEventListener('click', decrement3);
header.addEventListener('click', decrement3);



const count4 = document.getElementById('count4');
const price4 = document.getElementById('price4');
function increment4() {
    count4.innerHTML = +count4.innerHTML + 1;
    price4.innerHTML = +price4.innerHTML + 350;
    priceT.innerHTML = +priceT.innerHTML + 350;
}
butplus4.addEventListener('click', increment4);
header.addEventListener('click', increment4);

function decrement4() {
    if (count4.innerHTML > 0) {
        count4.innerHTML = +count4.innerHTML - 1;
        price4.innerHTML = +price4.innerHTML - 350;
        priceT.innerHTML = +priceT.innerHTML - 350;
    }
}
butminus4.addEventListener('click', decrement4);
header.addEventListener('click', decrement4);





const count5 = document.getElementById('count5');
const price5 = document.getElementById('price5');
function increment5() {
    count5.innerHTML = +count5.innerHTML + 1;
    price5.innerHTML = +price5.innerHTML + 45;
    priceT.innerHTML = +priceT.innerHTML + 45;
}
butplus5.addEventListener('click', increment5);
header.addEventListener('click', increment5);

function decrement5() {
    if (count5.innerHTML > 0) {
        count5.innerHTML = +count5.innerHTML - 1;
        price5.innerHTML = +price5.innerHTML - 45;
        priceT.innerHTML = +priceT.innerHTML - 45;
    }
}
butminus5.addEventListener('click', decrement5);
header.addEventListener('click', decrement5);


function like(){
    var x=document.getElementById('like').style.color;
    if(x=="red"){
        document.getElementById("like").style.color = "grey";
    }
    else{
    document.getElementById("like").style.color = "red";
    }
}
like.addEventListener('click', like);


function like1(){
    var x=document.getElementById('like1').style.color;
    if(x=="red"){
        document.getElementById("like1").style.color = "black";
    }
    else{
    document.getElementById("like1").style.color = "red";
    }
}
like1.addEventListener('click', like1);


function like2(){
    var x=document.getElementById('like2').style.color;
    if(x=="red"){
        document.getElementById("like2").style.color = "grey";
    }
    else{
    document.getElementById("like2").style.color = "red";
    }
}
like2.addEventListener('click', like2);


function like3(){
    var x=document.getElementById('like3').style.color;
    if(x=="red"){
        document.getElementById("like3").style.color = "grey";
    }
    else{
    document.getElementById("like3").style.color = "red";
    }
}
like3.addEventListener('click', like3);

function like4(){
    var x=document.getElementById('like4').style.color;
    if(x=="red"){
        document.getElementById("like4").style.color = "grey";
    }
    else{
    document.getElementById("like4").style.color = "red";
    }
}
like4.addEventListener('click', like4);


function delete_row()
{
    tvone.remove();
}
function delete_row1()
{
    tvtwo.remove();
}
function delete_row2()
{
    tvthree.remove();
}

function delete_row3()
{
    tvfour.remove();
}

function delete_row4()
{
    tvfive.remove();
}



