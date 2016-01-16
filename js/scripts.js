$(document).ready(function() {
  $(".container form").submit(function(event) {
    haircut = $("select#haircut").val();
    strangers = $("select#strangers").val();
    food = $("select#food").val();
    walk = $("select#walk").val();
    vacapref = $("select#vacapref").val();


    if (haircut === "2" && strangers === '1' && vacapref === '2'){
      $("#china").show();
      $("#ireland, #dubai", "#myanmar", "lagos").hide();
    }

    if (walk === '2' && vacapref === '2' && strangers === '1'){
      $("#dubai").show();
      $("#ireland, #china", "#myanmar", "lagos").hide();
    }

    if (food === '1' && walk === '2' && strangers === '1'){
      $("#ireland").show();
      $("#china, #dubai", "#myanmar", "lagos").hide();
    }

    if (haircut === '1'  && walk === '1' && strangers === '2'){
      $("#myanmar").show();
      $("#ireland, #dubai", "#china", "lagos").hide();
    }
    if (haircut === '2'  && walk === '1' && strangers === '2'){
      $("#lagos").show();
      $("#ireland, #dubai", "#china", "myanmar").hide();
    }



  event.preventDefault();
  });
});
