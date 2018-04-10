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
    //ho messo la condizione perché se scrivo qualcosa
    //e poi la cancello e clicco allora mando un mess vuoto
    if(input != ""){
      var row = $('<div>' + '</div>').addClass('row');
      var lastDiv = $('<div>' + '</div>').addClass('mess sent').html(input);
      var arrow = $('<div>' + '</div>').addClass('arrow-down');
      $('#messages').append(row.append(lastDiv.append(arrow)));
    }
    $('.fa-microphone').show();
    $('.fa-paper-plane').hide();
    setTimeout(function(){
      row = $('<div>' + '</div>').addClass('row');
      lastDiv = $('<div>' + '</div>').addClass('mess received').html("Ok!");
      arrow = $('<div>' + '</div>').addClass('arrow-down');
      $('#messages').append(row.append(lastDiv.append(arrow)));
    }, 1000);
  });
  //Quando scrivo sulla barra viene filtrata la lista
});
