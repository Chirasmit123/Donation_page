 $("#nav1").click( function(){
    $("#nav2").classList.remove("mystyle");
    $("#nav3").classList.remove("mystyle");
    $("#nav1").classList.add("mystyle");
 });
$("#nav2").click( function(){
    $("#nav1").classList.remove("mystyle");
    $("#nav3").classList.remove("mystyle");
    $("#nav2").classList.add("mystyle");
 });
$("#nav3").click( function(){
    $("#nav2").classList.remove("mystyle");
    $("#nav1").classList.remove("mystyle");
    $("#nav3").classList.add("mystyle");
 });

