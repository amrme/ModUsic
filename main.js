
// gets the innner elements of another html page
// I'll use it ot get video thumbnails & links from YouTube.
// learned it from http://dorward.me.uk/tmp/inner/1.html

  // var url = "2.html";
  // $.get(url, function(response) {
  //    var $response = $(response); // Code not working from this line
  //    alert($response.find('.result').html()); // get innhtml of element by class name from response
  // });

  // whole vide on YouTube class="yt-uix-sessionlink yt-pl-thumb-link       spf-link"
  // only thumbnail class="yt-thumb video-thumb"

// var to store all the videos
// var randomVid = ["<img src='https://i.ytimg.com/vi/2xv2n2NRPkM/mqdefault.jpg' alt='' />"];

// global count variable
var counter = 0;

// active mode
var activeMode;

// happy videos
var happySongs = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/iEPTlhBmwRg" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/OPf0YbXqDm0" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/7PCkvCPvDXk" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/0KSOMA3QBU0" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/nfWlot6h_JM" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/ESXgJ9-H-2U" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/y6Sxv-sUYtM" frameborder="0" allowfullscreen></iframe>'
];

var studyingSongs = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/nb9x_8pgl4Q" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/WPni755-Krg" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/2JQsf7i_dXY" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/WVP3fUzQHcg" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/8ptfyhBjXj8" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/R0kl9xFVSnI" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/RrLAaDCPc3I" frameborder="0" allowfullscreen></iframe>'
];

var relaxedSongs = [
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/IpkPbQWZOks" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/cE6wxDqdOV0" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/CfihYWRWRTQ" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/nlcIKh6sBtc" frameborder="0" allowfullscreen></iframe>'
];

var codingSongs = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/jmRUzoXFonM" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/bWX2fqCEEP8" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/1vw1pdjydp0" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/OuH1C4ptL0M" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/dsUxvFNWb6w" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/JKOpLH5VRHE" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/_QifYEL7jnY" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/OuA_Ehwlb8M" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/fb-33Nl9uMU" frameborder="0" allowfullscreen></iframe>',
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QxkCP6RbMx0" frameborder="0" allowfullscreen></iframe>'
];

// start jQuery ready function
$(document).ready(
  function() {
    // hide the buttons
    $(".nav-btn").hide();
    // $(".video-space").html(randomVid[0]);
    // $(".video-space").html(happySongs[counter]);
    // if happy button clicked
    $("#happy").click(
      function() {
        // restore buttons
        $(".nav-btn").fadeIn();
        // reset the counter
        counter = 0;
        $(".video-space").html(happySongs[counter]);
        activeMode = "happy";
      }

    );
    // studying songs
    $("#studying").click(
      function() {
        // restore buttons
        $(".nav-btn").fadeIn();
        // reset the counter
        counter = 0;
        $(".video-space").html(studyingSongs[counter]);
        activeMode = "studying";
      }
    );
    $("#relaxed").click(
      function() {
        // restore buttons
        $(".nav-btn").fadeIn();
        // reset the counter
        counter = 0;
        $(".video-space").html(relaxedSongs[counter]);
        activeMode = "relaxed";
      }
    );
    $("#coding").click(
      function() {
        // restore buttons
        $(".nav-btn").fadeIn();
        // reset the counter
        counter = 0;
        $(".video-space").html(codingSongs[counter]);
        activeMode = "coding";
      }
    );


    // next clicked
    $("#next").click(
      function() {
        // console.log(eval(String(activeMode)+'Songs').length);
        if (counter < eval(String(activeMode)+'Songs').length - 1)
        {
          counter++;
        }
        else {
          // set counter to the first song
          counter = 0;
        }
        $(".video-space").html(eval(String(activeMode)+'Songs')[counter]);
      }
    );

    // previous clicked
    $("#previous").click(
      function() {
        if (counter > 0)
        {
          counter--;
        }
        else {
          // set counter to the last song
          counter = eval(String(activeMode)+'Songs').length - 1;
        }
        $(".video-space").html(eval(String(activeMode)+'Songs')[counter]);
      }
    );

  }
);
