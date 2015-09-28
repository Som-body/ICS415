$(document).ready(function(){
  $(".answer").hide();
});

$(document).ready(function(){
  $("#q1").click(function(){
    $("#a1").animate({
      height: "toggle"
    });
    if($("#qs1").text() === "+"){
      $("#qs1").text("-");
    }
    else {
      $("#qs1").text("+");
    }
  });
});

$(document).ready(function(){
  $("#q2").click(function(){
    $("#a2").animate({
      height: "toggle"
    });
    if($("#qs2").text() === "+"){
      $("#qs2").text("-");
    }
    else {
      $("#qs2").text("+");
    }
  });
});

$(document).ready(function(){
  $("#q3").click(function(){
    $("#a3").animate({
      height: "toggle"
    });
    if($("#qs3").text() === "+"){
      $("#qs3").text("-");
    }
    else {
      $("#qs3").text("+");
    }
  });
});

$(document).ready(function(){
  $("#q4").click(function(){
    $("#a4").animate({
      height: "toggle"
    });
    if($("#qs4").text() === "+"){
      $("#qs4").text("-");
    }
    else {
      $("#qs4").text("+");
    }
  });
});

$(document).ready(function(){
  $("#q5").click(function(){
    $("#a5").animate({
      height: "toggle"
    });
    if($("#qs5").text() === "+"){
      $("#qs5").text("-");
    }
    else {
      $("#qs5").text("+");
    }
  });
});

$(document).ready(function(){
  $("#urlsubmit").click(function(){
    $.get($("#url").val(), function(data){
      $("#linkcount").text($(data).find("a").length);
    });
  });
});
