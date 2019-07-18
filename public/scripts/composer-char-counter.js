$(document).ready(function() {
  console.log("done");
  // $(".new-tweet").on("focus", function() {
  //   console.log("ok");
  // });
 
});


// $("#input-text").on("keypress", () => {
//   console.log(this.value);
// });

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

  

/*
  (event) => {
  let count = 140;
  count -= this.value.length;
  event.target.parents('.new-tweet').find('.counter').innerHTML = count;
  console.log(value);
  console.log(count - value.length);
  });
  */