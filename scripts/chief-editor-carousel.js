setInterval(function() {
    if ($("#joel-pang").hasClass("hidden")) {
        $("#joel-pang").removeClass("hidden");
        $("#noah-cordon-siskind").addClass("hidden");
      } else {
        $("#joel-pang").addClass("hidden");
        $("#noah-cordon-siskind").removeClass("hidden");
      }
  }, 7000);

$("#right-arrow-button-j").click(function() {
  $("#joel-pang").addClass("hidden");
  $("#noah-cordon-siskind").removeClass("hidden");
});

$("#left-arrow-button-j").click(function() {
  $("#joel-pang").addClass("hidden");
  $("#noah-cordon-siskind").removeClass("hidden");
});

$("#right-arrow-button-n").click(function() {
  $("#joel-pang").removeClass("hidden");
  $("#noah-cordon-siskind").addClass("hidden");
});

$("#left-arrow-button-n").click(function() {
  $("#joel-pang").removeClass("hidden");
  $("#noah-cordon-siskind").addClass("hidden");
});
