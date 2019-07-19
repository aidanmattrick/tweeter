$(document).ready(function() {
  $("#input-text").keyup(
    function(event) {
      let count = 140;
      count -= this.value.length;
      let element = $(event.target);
      element.parents('.new-tweet').find('.counter').html(count);
      if (count < 0) {
        element.parents('.new-tweet').find('.counter').css('color', 'red');
      }
    });
});



  