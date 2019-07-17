/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  
  const createTweetElement = function(tweet) {
    let $tweet = $("article").addClass("tweet")
      .add('header')
      .add('div')
      .add('footer');
    console.log($('.tweet-container'));
    $('#tweet-container').append("<p>test</p>");
    return $tweet;
  };




  const renderTweets = function(tweets) {
    // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  };



  //renderTweets(data);

  createTweetElement();










});