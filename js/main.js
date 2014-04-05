$(document).ready(function() {
  $.getJSON("http://uifaces.com/api/v1/random", function(data){
    face_url = data.image_urls.epic;
    $("<img/>", {
      "src": face_url,
      "class": "img-circle center-block profile-image"
    }).insertBefore('.username-pass')
  });

  th_username = "johnkeith"
  show_all_button = true

  $.getJSON("http://teamtreehouse.com/" + th_username +".json", function(data) {
    var items = [];
    var number_of_badges = data.badges.length;
    var total_points = data.points.total;
    $.each(data.badges, function(k, v) {
       items.push( "<a href='#'><img src='" + v.icon_url + "' alt='" + v.name + "' title='" + v.name + "'/></a>");
    });
        
    $( "<ul/>", {
      "class": "badge-image-list", 
      html: items.join( "" )
    }).appendTo( ".badges-box" ).hide().fadeIn(500);
    
    if(show_all_button == true) {
      $( ".badge-image-list img:gt(5)").hide();
      $(".badges-box").append("<p><strong>" + number_of_badges + " badges</strong> for a total of <strong>" + total_points + " points</strong>.</p>");

      $(".badges-box").append("<button id='show-all' class='btn btn-info'>See all badges</button>");

      $("#show-all").click(function() {
        $( ".badge-image-list img:gt(5)").toggle(0, "linear", function() {
          if($("#show-all").html() == "See all badges") {
            $("#show-all").html("Hide badges");
          } else {
            $("#show-all").html("See all badges");
          };
        });
      });
    };
  });
});
