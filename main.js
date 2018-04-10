$(document).ready(function(){
  //Quando premo un pulsante il microfono sparisce
  //e compare l'areoplano
  $('#msg-input').keypress(function(){
    $('.fa-microphone').hide();
    $('.fa-paper-plane').show();
  });
  //Quando clicco sull'areoplano viene invitato un mess
  $('.fa-paper-plane').click(function(){
    var input = $('#msg-input').val();
    $('#msg-input').val("");
    if(input != ""){
      var row = $('<div>' + '</div>').addClass('row');
      var lastDiv = $('<div>' + '</div>').addClass('mess sent').html(input);
      $('#messages').append(row.append(lastDiv));
    }
    $('.fa-microphone').show();
    $('.fa-paper-plane').hide();
  });
});
