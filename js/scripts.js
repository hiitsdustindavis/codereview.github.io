$(document).ready(function() {
  $(".container form").submit(function(event) {
    haircut = $("select#haircut").val();
    strangers = $("select#strangers").val();
    food = $("select#food").val();
    walk = $("select#walk").val();
    vacapref = $("select#vacapref").val();


    if (haircut === "2" && strangers === '2' && vacapref === '2'){
      $("#china").show();
      $("#ireland, #dubai", "#myanmar").hide();
    } else {
      $("#china", "#ireland, #dubai", "#myanmar").hide();
    }
    if (walk === '2' && vacapref === '2'){
      $("#dubai").show();
      $("#ireland, #china", "#myanmar").hide();
    }
    if (food === '1' || walk === '2' || strangers === '1'){
      $("#ireland").show();
      $("#china, #dubai", "#myanmar").hide();
    }
    if (haircut === '1'  && walk === '1' && strangers === "2"){
      $("#myanmar").show();
      $("#ireland, #dubai", "#china").hide();
    }
    // if (haircut === '2' && strangers === '2' && food === '2' && walk === '2' && vacapref === '2'){
    //   $("#dubai").show();
    //   $("#ireland, #china").hide();
    // }
    // if (haircut === '2' || strangers === '1' || food === '2' || walk === '2' || vacapref === '2'){
    //   $("#ireland").show();
    //   $("#dubai, #china").hide();
    // }


  event.preventDefault();
  });
});
