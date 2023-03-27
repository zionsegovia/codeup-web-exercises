// we can and usually do use the dollar sign ($) as shorthand for calling the jquery function
//$("h3").click(function(){
//  $(this).next().slideToggle(500);
//});

//function init() {
//  ("h3").click(function () {
 //   $(this).next().slideToggle(500);
//  });
//}
//window.onload = init;

//or we can use the $(document.ready)
$(document).ready(function(){
  $("h3").click(function () {
    $(this).next().slideToggle(500);
 });

  //jQuery selectors use css selectors syntax
 // $("#Library").text("jQuery is a Javascript library")

    //get a reference to an element wit the id of library
    //using a jquery selector
   // and storing it in a variable
   // I use the $ sign to make this as a reference to a j jquery object
   // as opposed to a refernce to a js dom node
    const $libraryReference = $("#library")
    let libraryText = $libraryReference.text();
    console.log(libraryText);
    $libraryReference.text(`${libraryText} is a library`);

});
// jQuery class selector with the .css method to change the css
// of the selected elements
$(".framework").css('border', '1px solid black');
//to change more than one css property at a time
$(".framework").css({
    'border': '1px solid black',
    'width': 'fit-content',
    'padding': '4px',
    'border-radius': '5px',
    'margin-bottom': '3px'
});

$("p, li").text("jQuery takes over").css("color", "hotpink");