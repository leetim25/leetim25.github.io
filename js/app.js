var main = function() {
// Hide the prev/next button since it is only for when modal is up
$('.slidebutton').hide();
// Get the modal
// When the user clicks on the button, open the modal 
/*
  Naive way to open each modals Couldve done better but staying with this. 
  It reads the id and opens the corresponding modal with the prev/next button
*/
$('#about').click(function(){
    $('#aboutModal').css("display","block");
    $('.slidebutton').show();
});
$('#academic').click(function(){
    $('#experienceModal').css("display","block");
    $('.slidebutton').show();
});
$('#gallery').click(function(){
    $('#galleryModal').css("display","block");
    $('.slidebutton').show();
});
$('#projects').click(function(){
    $('#projectModal').css("display","block");
    $('.slidebutton').show();
});
$('#contact').click(function(){
    $('#contactModal').css("display","block");
    $('.slidebutton').show();
});
// When the user clicks on <span> (x), close the modal
$('.close').click(function() {
    $('.modal').css("display","none");
    $('.slidebutton').hide();
});
$('.closeimg').click(function() {
    $('.modalImg').css("display","none");
});
/*
  next function stores the currently opened modal id in slideOpen
  modal stores the id value for next modal
  if the modal is not the last it opens it
  if it is the last modal the reset modal which is the first modal opens
*/
$('#next').click(function(){
  var slideOpen = $(".modal")[$(".modal div:visible").attr("id")];
  var modal = $(".modal")[parseInt($(".modal div:visible").attr("id"))+1];
  if($(".modal div:visible").attr("id") == $(".modal").length-1){
  slideOpen.style.display ="none";
  var reset = $(".modal")[0];
  reset.style.display= "block";
  }else{
  slideOpen.style.display ="none";
  modal.style.display ='block';
  }
});
/*
  Similiar to next but just decrements
*/
$('#prev').click(function(){
  var slideOpen = $(".modal")[$(".modal div:visible").attr("id")];
  var modal = $(".modal")[$(".modal div:visible").attr("id")-1];
  if($(".modal div:visible").attr("id") == 0){
  slideOpen.style.display ="none";
  var reset = $(".modal")[$('.modal').length-1];
  reset.style.display= "block";
  }
  else{
  slideOpen.style.display ="none";
  modal.style.display ='block';
  }
});

//Upon resize the wheel menu disappears so it can be recalculated with the open
$(window).resize(function() {
  if($('#wheel').is(':visible')){
      $("#wheel").hide();
      $('.welcome').show();
      $("#wheel").css('visibility','hidden');
  }
});
//When the image is clicked it should hide the intro words since they coverlap with the menu
$('.wheel-button').click(function(){
  $('.welcome').fadeToggle(function (e){
  if($('#wheel').is(':visible')){
    $(this).hide();
  }
  else{
    $(this).show(); 
  }
  })
});
//image modal reads value and populates the modal-content with new attr
var modal = document.getElementById('myModal');
$('.myImg').click(function(){
var img = $('.myImg')[$('.myImg').attr("id")];
$("#modal-content").attr('src', this.src);
modal.style.display = "block";
});

};
$(document).ready(main);
