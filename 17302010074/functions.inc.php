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
      echo "<div class=\"row\">
      <div class=\"col-md-4\"><a href=\"post.php?id=".$postId1."\"><img src=\"images/".$thumb1."\" class=\"img-responsive\"/></a></div>
      <div class=\"col-md-8\"><h2>".$title1."</h2><div class=\"details\">Posted by ".generateLink("user.php?id=".$userId1,$userName1,"")."
      <span class=\"pull-right\">".$date1."</span><p class=\"ratings\">
      ".constructRating($reviewsRating1)."".$reviewsNum1." Reviews</p></div>
      <p class=\"excerpt\">".$excerpt1."</p><p><a href=\"post.php?id=1\" class=\"btn btn-primary btn-sm\">Read more</a></p></div></div><hr/>";
    }
    if($number==2){
      echo "<div class=\"row\">
      <div class=\"col-md-4\"><a href=\"post.php?id=".$postId2."\"><img src=\"images/".$thumb2."\" class=\"img-responsive\"/></a></div>
      <div class=\"col-md-8\"><h2>".$title2."</h2><div class=\"details\">Posted by ".generateLink("user.php?id=".$userId2,$userName2,"")."
      <span class=\"pull-right\">".$date2."</span><p class=\"ratings\">
      ".constructRating($reviewsRating2)."".$reviewsNum2." Reviews</p></div>
      <p class=\"excerpt\">".$excerpt2."</p><p><a href=\"post.php?id=1\" class=\"btn btn-primary btn-sm\">Read more</a></p></div></div><hr/>";
    }
    if($number==3){
      echo "<div class=\"row\">
      <div class=\"col-md-4\"><a href=\"post.php?id=".$postId3."\"><img src=\"images/".$thumb3."\" class=\"img-responsive\"/></a></div>
      <div class=\"col-md-8\"><h2>".$title3."</h2><div class=\"details\">Posted by ".generateLink("user.php?id=".$userId3,$userName3,"")."
      <span class=\"pull-right\">".$date3."</span><p class=\"ratings\">
      ".constructRating($reviewsRating3)."".$reviewsNum3." Reviews</p></div>
      <p class=\"excerpt\">".$excerpt3."</p><p><a href=\"post.php?id=1\" class=\"btn btn-primary btn-sm\">Read more</a></p></div></div><hr/>";
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
