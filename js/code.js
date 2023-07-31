$(document).ready(function(){
 $("#voting").submit(function(){
  $("#voting-form").prepend("<div class='alert alert-success' role='alert'>Thank you "+
  $('#voting-form input[name="name"]').val() +", for your vote</div>");
  $('#voting').remove();

  return false;
 });

$("#messi").parent().before('<h2 class="text-center">Messi vs. Ronaldo</h2>');

 });
