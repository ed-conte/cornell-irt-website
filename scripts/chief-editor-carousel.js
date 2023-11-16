setInterval(function() {
    if ($("#joel-pang").hasClass("hidden")) {
        $("#joel-pang").removeClass("hidden");
        $("#noah-cordon-siskind").addClass("hidden");
      } else {
        $("#joel-pang").addClass("hidden");
        $("#noah-cordon-siskind").removeClass("hidden");
      }
  }, 7000);

$("#left-arrow-button").click(function() {
  if ($("#joel-pang").hasClass("hidden")) {
    $("#joel-pang").removeClass("hidden");
    $("#noah-cordon-siskind").addClass("hidden");
  } else {
    $("#joel-pang").addClass("hidden");
    $("#noah-cordon-siskind").removeClass("hidden");
  }
});

$("#right-arrow-button").click(function() {
  if ($("#joel-pang").hasClass("hidden")) {
    $("#joel-pang").removeClass("hidden");
    $("#noah-cordon-siskind").addClass("hidden");
  } else {
    $("#joel-pang").addClass("hidden");
    $("#noah-cordon-siskind").removeClass("hidden");
  }
});
