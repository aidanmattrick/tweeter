/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $('.new-tweet').hide();

  //DROPDOWN BUTTON
  $('#dropdown-button').click(function() {
    $('.new-tweet').slideToggle("slow", function() {
    });
  });

  //ERROR MESSAGES FOR INCORRECT TWEETS
  const $error = $('<div>').addClass('error');
  const $errormsg = $('<p>');
  $error.append($errormsg);

  //HIDE ERROR MSG AFTER SHOWING
  const $hideError = function() {
    $error.hide();
  };

  
  //POST TWEET INFO TO /TWEETS
  $('#form').submit(function(event) {
    event.preventDefault();
    if ($('#input-text').val().length > 140) {
      $errormsg.text("Your message is too long! Messages must be less than 140 characters.");
      $('.mainheader').append($error);
     
      setTimeout($hideError, 5000);
      
    } else if (!$('#input-text').val()) {
      $errormsg.text("Please enter a message between 1 and 140 characters long.");
      $('.mainheader').append($error);
      setTimeout($hideError, 5000);
    } else {
      $.post('/tweets',$(this).serialize(), (data) => {
        loadTweet();
      });
    }
    $('#input-text').val("");
    $('.counter').text("140").css('color', 'black');
  });
  
  //GET TWEETS FROM /TWEETS AND PASS TO RENDER TWEETS
  const loadTweet = function() {
    $.get('/tweets', $(this).serialize(), (data) => {
      renderTweets(data);
    });
  };


  //BUILD A TWEET
  const createTweet = ({user: { handle, name, avatars }, content, created_at}) => {
    const $article = $('<article>');

    // Header element here
    const $header = $('<header>');
    const $headerspan = $('<span>').addClass('img-user');
    const $img = $('<img>').attr("src", avatars);
    const $user = $('<span>').text(name);
    const $handle = $('<span>').addClass('handle').text(handle);
    $headerspan.append($img, $user);
    $header.append($headerspan, $handle);

    //Tweet body here
    const $tweetbody = $('<div>').addClass('tweet-text').text(content.text);

    let time = moment(created_at).fromNow();


    //Tweet footer here
    const $footer = $('<footer>');
    const $time = $('<span>').addClass('time').text(time); 
    const $icons = $('<span>').addClass('icons');
    const $heart = $('<i>').addClass('fas fa-heart').attr('id', 'heart');
    const $retweet = $('<i>').addClass('fas fa-retweet').attr('id', 'retweet');
    const $flag = $('<i>').addClass('fas fa-flag').attr('id', 'flag');
    
    $icons.append($flag, $retweet, $heart);
    $footer.append($time, $icons);

  
    $article.append($header, $tweetbody, $footer);

    return $article;

  };


  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    $('#tweet-container').empty();
    tweets.forEach((element) => {
      $('#tweet-container').prepend(createTweet(element));
    });
  };

  loadTweet();
  
});






