var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

var now = new Date().getHours();

function timeAttribute() {
    if (now > 8) {
       $("#comment1").addClass("past");
    }
    else if (now >= 8 && now < 9) {
        $("#comment1").addClass("present");
    }
    else {
        $("#comment1").addClass("future");
    }

    if (now > 9) {
        $("#comment2").addClass("past");
     }
     else if (now >= 9 && now < 10) {
         $("#comment2").addClass("present");
     }
     else {
         $("#comment2").addClass("future");
     }

     if (now > 10) {
        $("#comment3").addClass("past");
     }
     else if (now >= 10 && now < 11) {
         $("#comment3").addClass("present");
     }
     else {
         $("#comment3").addClass("future");
     }

     if (now > 11) {
        $("#comment4").addClass("past");
     }
     else if (now >= 11 && now < 12) {
         $("#comment4").addClass("present");
     }
     else {
         $("#comment4").addClass("future");
     }

     if (now > 12) {
        $("#comment5").addClass("past");
     }
     else if (now >= 12 && now < 13) {
         $("#comment5").addClass("present");
     }
     else {
         $("#comment5").addClass("future");
     }

     if (now > 13) {
        $("#comment6").addClass("past");
     }
     else if (now >= 13 && now < 14) {
         $("#comment6").addClass("present");
     }
     else {
         $("#comment6").addClass("future");
     }

     if (now > 14) {
        $("#comment7").addClass("past");
     }
     else if (now >= 14 && now < 15) {
         $("#comment7").addClass("present");
     }
     else {
         $("#comment7").addClass("future");
     }

     if (now > 15) {
        $("#comment8").addClass("past");
     }
     else if (now >= 15 && now < 16) {
         $("#comment8").addClass("present");
     }
     else {
         $("#comment8").addClass("future");
     }

     if (now > 16) {
        $("#comment9").addClass("past");
     }
     else if (now >= 16 && now < 17) {
         $("#comment9").addClass("present");
     }
     else {
         $("#comment9").addClass("future");
     }

     if (now > 17) {
        $("#comment10").addClass("past");
     }
     else if (now >= 17 && now < 18) {
         $("#comment10").addClass("present");
     }
     else {
         $("#comment10").addClass("future");
     }
}

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})

$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));

timeAttribute();