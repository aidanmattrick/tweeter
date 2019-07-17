/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(function() {
  const $tweetContainer = $('#tweet-container');
  // const pTag = $('<p>').text('hello').addClass('hello');
  // const mySpan = $('<span>').text("span here!");
  // pTag.append(mySpan);
  // // pTag.text('hello');
  // tweetContainer.append(pTag);

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

    // tweet body here
    const $tweetbody = $('<div>').addClass('tweet-text').text(content.text);

    // tweet footer here
    const $footer = $('<footer>');
    const $time = $('<span>').addClass('time').text(created_at);
    const $icons = $('<span>').addClass('icons');
    const $heart = $('<i>').addClass('fas fa-heart').attr('id', 'heart');
    const $retweet = $('<i>').addClass('fas fa-retweet').attr('id', 'retweet');
    const $flag = $('<i>').addClass('fas fa-flag').attr('id', 'flag');
    
    $icons.append($flag, $retweet, $heart);
    $footer.append($time, $icons);

  
    $article.append($header, $tweetbody, $footer);

    return $article;

  };


  //$tweetContainer.append($tweetbody);
  // $article.append($header);
  // $tweetContainer.append($article);



  //   const createTweetElement = function(tweet) {
  //     let myHTML =
  //   `
  //   <header>
  // <span class="img-user">${avatars}, ${name}</span>
  // <span class="handle">${handle}</span>
  //   </header>
  //   <div id="tweet-text">${tweet.content.text}</div>
  //   <footer>
  //       <span class="time">${tweet.created_at}</span>
  //       <span class="icons">ICONS</span>
  //   </footer>
  // `
  //   ;
  //     const newtweet = $("article");
  //     // const header = $("header");
  
  //     newtweet.html(myHTML);
  //     return newtweet;
  //   };

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    tweets.forEach((element) => {
      $('#tweet-container').append(createTweet(element));
    });
  };

  renderTweets(tweets);
});







/*
    let $tweet = $("article").addClass("tweet")

      .add('header')
      .add('div')
      .add('footer');
    console.log($('.tweet-container'));


    $('#tweet-container').append("<p>test</p>");
    return $tweet;
  };
  */