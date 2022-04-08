var now = moment().format("dddd MMMM Do");
$("#currentDay").text(now);

var nineAm = moment("9", "H").format("hA");
$("#9am").text(nineAm);

var tenAm = moment("10", "H").format("hA");
$("#10am").text(tenAm);

var elevenAm = moment("11", "H").format("hA");
$("#11am").text(elevenAm);

var noon = moment("12", "H").format("hA");
$("#12pm").text(noon);

var onePm = moment("13", "H").format("hA");
$("#1pm").text(onePm);

var twoPm = moment("14", "H").format("hA");
$("#2pm").text(twoPm);

var threePm = moment("15", "H").format("hA");
$("#3pm").text(threePm);

var fourPm = moment("16", "H").format("hA");
$("#4pm").text(fourPm);

var fivePm = moment("17", "H").format("hA");
$("#5pm").text(fivePm);

var bg=document.getElementById("color");

var text= document.getElementsByName("textarea");

var time= moment().format("H");

var currentHour=parseInt(time);
console.log(currentHour)

var nine= moment(nineAm,"hA").format("H");
var nineH=parseInt(nine);

var ten= moment(tenAm,"hA").format("H");
var tenH=parseInt(ten);

var eleven= moment(elevenAm,"hA").format("H");
var elevenH=parseInt(eleven);

var twelve= moment(noon,"hA").format("H");
var twelveH=parseInt(twelve);

var one= moment(onePm,"hA").format("H");
var oneH=parseInt(one);

var two= moment(twoPm,"hA").format("H");
var twoH=parseInt(two);

var three= moment(threePm,"hA").format("H");
var threeH=parseInt(three);

var four= moment(fourPm,"hA").format("H");
var fourH=parseInt(four);

var five= moment(fivePm,"hA").format("H");
var fiveH=parseInt(five);





function color9(){
    if (nineH<time){
        $("textarea").addClass("past");
    }else if (nineH>time){
        $("textarea").addClass("future");
    } else if (nineH=time){
        $("textarea").addClass("present");
    };
} 

color9();

function color10(){
    if (tenH<time){
        $("textarea").addClass("past")
    }else if (tenH>time){
        $("textarea").addClass("future")
    } else if (tenH=time){
        $("textarea").addClass("present")
    }
} 

color10()