$(document).ready(function(){
  //Quando premo un pulsante il microfono sparisce
  //e compare l'areoplano
  $('#msg-input').keyup(function(){
    $('.fa-microphone').hide();
    $('.fa-paper-plane').show();
    //se l'input torna ad essere vuoto ritorna il microfono
    if($('#msg-input').val().length == 0){
      $('.fa-microphone').show();
      $('.fa-paper-plane').hide();
    }
  });
  //Quando clicco sull'areoplano viene invitato un mess
  $('.fa-paper-plane').click(function(){
    var input = $('#msg-input').val();
    $('#msg-input').val("");
    var row = $('<div>' + '</div>').addClass('row');
    var lastDiv = $('<div>' + '</div>').addClass('mess sent').html(input);
    var arrow = $('<div>' + '</div>').addClass('arrow-down');
    //assegno a messages la row, il div e la freccina
    $('#messages').append(row.append(lastDiv.append(arrow)));
    $('.fa-microphone').show();
    $('.fa-paper-plane').hide();
    //mando un messaggio di risposta automatico dopo un secondo
    setTimeout(function(){
      row = $('<div>' + '</div>').addClass('row');
      lastDiv = $('<div>' + '</div>').addClass('mess received').html("Ok!");
      arrow = $('<div>' + '</div>').addClass('arrow-down');
      $('#messages').append(row.append(lastDiv.append(arrow)));
    }, 1000);
  });

  //Quando scrivo sulla barra viene filtrata la lista
  $('#inputSearch').keyup(function(){
    var input = $('#inputSearch').val();
    console.log(input);
    filterFriends(input);

    // $('#inputSearch').val("");
  });
});

function filterFriends(letter){
  $('.friend-name').each(function(i){
    if(letter == ""){
      $('.list-conv').show();
    }
    else{
      var name = $(this).children('#name').html();
      var arrayName = name.split();
      console.log(name);
      if(!name.toLowerCase().includes(letter.toLowerCase())){
        $(this).parents('.list-conv').hide();
      }
    }
  });
}
