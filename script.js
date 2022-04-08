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





{function color9(){
    if (nineH<time){
        $(".nC").addClass("past");
    }else if (nineH>time){
        $(".nC").addClass("future");
    } else if (nineH=time){
        $(".nC").addClass("present");
    };
} 

color9();
}
function color10(){
    if (tenH<time){
        $(".tC").addClass("past")
    }else if (tenH>time){
        $(".tC").addClass("future")
    } else if (tenH=time){
        $(".tC").addClass("present")
    }
} 

color10();

function color11(){
    if (elevenH<time){
        $(".ewC").addClass("past")
    }else if (elevenH>time){
        $(".ewC").addClass("future")
    } else if (elevenH=time){
        $(".ewC").addClass("present")
    }
} 

color11();

function color12(){
    if (twelveH<time){
        $(".twC").addClass("past")
    }else if (twelveH>time){
        $(".twC").addClass("future")
    } else if (twelveH=time){
        $(".twC").addClass("present")
    }
} 

color12();

function color1(){
    if (oneH<time){
        $(".oC").addClass("past")
    }else if (oneH>time){
        $(".oC").addClass("future")
    } else if (oneH=time){
        $(".oC").addClass("present")
    }
} 

color1();

function color2(){
    if (twoH<time){
        $(".twoC").addClass("past")
    }else if (twoH>time){
        $(".twoC").addClass("future")
    } else if (twoH=time){
        $(".twoC").addClass("present")
    }
} 

color2();

function color3(){
    if (threeH<time){
        $(".thC").addClass("past")
    }else if (threeH>time){
        $(".thC").addClass("future")
    } else if (threeH=time){
        $(".thC").addClass("present")
    }
} 

color3();

function color4(){
    if (fourH<time){
        $(".fC").addClass("past")
    }else if (fourH>time){
        $(".fC").addClass("future")
    } else if (fourH=time){
        $(".fC").addClass("present")
    }
} 

color4();

function color5(){
    if (fiveH<time){
        $(".fiC").addClass("past")
    }else if (fiveH>time){
        $(".fiC").addClass("future")
    } else if (fiveH=time){
        $(".fiC").addClass("present")
    }
} 

color5();

$(".saveBtn").addEventListener("click", function(event){
    event.preventDefault();
})