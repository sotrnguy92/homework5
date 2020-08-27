$(document).ready(function () {
  const calDay = moment().format("dddd");
  const date = moment().format("MMMM Do");
  const currentHour = moment().format("H");
  const $dRow = $(".row");
  const $section = $("section");
  //displays the current day
  $("#currentDay").text(calDay + ", " + date);

  function colorCode() {
    $section.each(function () {
      if (parseInt($(this).attr("timeslot")) < parseInt(currentHour)) {
        $(this).addClass("blue lighten-4");
        $(this).children('input').addClass("blue lighten-4");
      } else if (parseInt($(this).attr("timeslot")) > parseInt(currentHour)) {
        $(this).addClass("blue darken-3");
        $(this).children('input').addClass("blue darken-3");
      } else {
        $(this).addClass("success-color");
        $(this).children('input').addClass("success-color");
      }
      console.log($(this).children('input').attr('timeslot'));
    });
  }

  $('button').on('click', function(event){
    
    localStorage.setItem( $(this).siblings('input').attr('timeslot'), $(this).siblings('input').val());

  })

  function loadStorage(){
      $section.each(function(){
          if (localStorage.getItem($(this).attr('timeslot'))){
              $(this).children('input').val(localStorage.getItem($(this).attr('timeslot')));
          }
      })
  }
  loadStorage();
  colorCode();

 
});
