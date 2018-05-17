<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    if($number==1){
      $thumb= "<img src=\"images\\" .$thumb1 ."\" style=\"margin:10px\">";
      $title = "<h2>" .$title1 ."</h2>";
      $userName = "<span>POSTED BY " .generateLink("#",$userName1,"") ."</span>";
      $date = "<span style=\"float:right\">" .$date1 ."</span>";
      $reviewsRating = "<br>" .constructRating($reviewsRating1);
      $reviewsNum = "<span>" .$reviewsNum1 ." REVIEWS</span>";
      $excerpt = "<p style=\"margin-top:10px\">" .$excerpt1 ."</p>";
      $button = "<a class=\"btn btn-warning btn-sm\">Read more</a>";
      $hr = "<hr style=\"clear:both;\">";

      $show = "<div>";
      $show .= "<div class=\"col-md-4\">" .$thumb ."</div>";
      $show .= "<div class=\"col-md-8\">" .$title;
      $show .= $userName;
      $show .= $date;
      $show .= $reviewsRating;
      $show .= $reviewsNum;
      $show .= $excerpt;
      $show .= $button ."</div></div>";
      $show .= $hr;
      echo $show;
    }
    if($number==2){
      $thumb= "<img src=\"images\\" .$thumb2 ."\" style=\"margin:10px\">";
      $title = "<h2>" .$title2 ."</h2>";
      $userName = "<span>POSTED BY " .generateLink("#",$userName2,"") ."</span>";
      $date = "<span style=\"float:right\">" .$date2 ."</span>";
      $reviewsRating = "<br>" .constructRating($reviewsRating2);
      $reviewsNum = "<span>" .$reviewsNum2 ." REVIEWS</span>";
      $excerpt = "<p style=\"margin-top:10px\">" .$excerpt2 ."</p>";
      $button = "<a class=\"btn btn-warning btn-sm\">Read more</a>";
      $hr = "<hr style=\"clear:both;\">";

      $show = "<div>";
      $show .= "<div class=\"col-md-4\">" .$thumb ."</div>";
      $show .= "<div class=\"col-md-8\">" .$title;
      $show .= $userName;
      $show .= $date;
      $show .= $reviewsRating;
      $show .= $reviewsNum;
      $show .= $excerpt;
      $show .= $button ."</div></div>";
      $show .= $hr;
      echo $show;
    }
    if($number==3){
      $thumb= "<img src=\"images\\" .$thumb3 ."\" style=\"margin:10px\">";
      $title = "<h2>" .$title3 ."</h2>";
      $userName = "<span>POSTED BY " .generateLink("#",$userName3,"") ."</span>";
      $date = "<span style=\"float:right\">" .$date3 ."</span>";
      $reviewsRating = "<br>" .constructRating($reviewsRating3);
      $reviewsNum = "<span>" .$reviewsNum3 ." REVIEWS</span>";
      $excerpt = "<p style=\"margin-top:10px\">" .$excerpt3 ."</p>";
      $button = "<a class=\"btn btn-warning btn-sm\">Read more</a>";
      $hr = "<hr style=\"clear:both;\">";

      $show = "<div>";
      $show .= "<div class=\"col-md-4\">" .$thumb ."</div>";
      $show .= "<div class=\"col-md-8\">" .$title;
      $show .= $userName;
      $show .= $date;
      $show .= $reviewsRating;
      $show .= $reviewsNum;
      $show .= $excerpt;
      $show .= $button ."</div></div>";
      $show .= $hr;
      echo $show;
    }

}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";

    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }

    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }

    return $imgTags;
}

?>
