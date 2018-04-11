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
  //Se viene premuto enter allora mando un messaggio
  $('#msg-input').keypress(function(e){
    if(e.which === 13){
      var input = $('#msg-input').val();
      sendMessage(input);
      automaticAnswer();
    }
  });
  //Quando clicco sull'areoplano viene invitato un messaggio
  $('.fa-paper-plane').click(function(){
    var input = $('#msg-input').val();
    sendMessage(input);
    automaticAnswer();
  });
  //Quando scrivo sulla barra viene filtrata la lista
  $('#inputSearch').keyup(function(){
    var input = $('#inputSearch').val();
    //la variabile booleana serve per vedere se ho trovato qualcuno
    var isFound = false;
    //se la casella di ricerca è vuota allora faccio ricomparire tutti i contatti
    if(input == ""){
      $('.list-conv').show();
      //se isFound è true allora nascondo il messaggio 'non trovato'
      isFound = true;
    }
    else{
      //mostro tutti i contatti e poi li nascondo con la funzione
      $('.list-conv').show();
      isFound = filterFriends(input, isFound);
    }
    if(isFound){
      $('#notFound-mgs').hide();
    }
    else{
      $('#notFound-mgs').show();
    }
  });
  //Seleziono la conversazione dalla lista
  $('.list-conv').click(function(){
    //nascondo le conversazioni e rimuovo il background ogni volta
    // perché si accumulerebbero tra di loro
    $('.messages').hide();
    $(this).removeClass('conv-clicked');
    //assengo l'id del contatto ad una vriabile
    var convNum = $(this).attr('id');
    //assegno all'elemento cliccato una classe per mettergli un backgr
    $(this).addClass('conv-clicked');
    //faccio comparire lo sfondo della conversazione
    $('.conversation').show();
    //controllo se esiste la conversazione per quel contatto
    if($('.messages').hasClass(convNum)){
      $('.' + convNum).show();
    }
  });
});

function filterFriends(letter, findElement){
  $('.friend-name').each(function(i){
    var name = $(this).children('#name').html();
    if(!name.toLowerCase().includes(letter.toLowerCase())){
      $(this).parents('.list-conv').hide();
    }
    else{
      findElement = true;
    }
  });
  return findElement;
}
// Funzzione per inviare un messaggio
function sendMessage(msgWritten){
  $('#msg-input').val("");
  //creo variabile per l'ora da inserire
  var hour = new Date()
  var minute = hour.getMinutes();
  if(minute < 10){
    minute = '0' + minute;
  }
  //creo variabili per gli elementi html
  var row = $('<div class="row">' + '</div>');
  var lastDiv = $('<div class="mess sent">' + msgWritten + '</div>');
  var msgHour = $('<div class="checkHour-msg">'+ hour.getHours() + ':' + minute + '</div>');
  // var check = $('<div class="dblCheck">' + dblCheck + '</div>');
  var arrow = $('<div class="arrow-down">' + '</div>');
  //assegno a messages la row, il div l'ora e la freccina
  $('#messages').append(row.append(lastDiv.append(msgHour).append(arrow)));
  $('.fa-microphone').show();
  $('.fa-paper-plane').hide();
}
//mando un messaggio di risposta automatico dopo un secondo
function automaticAnswer(){
  setTimeout(function(){
    var hour = new Date()
    var row = $('<div class="row">' + '</div>');
    var lastDiv = $('<div class="mess received"> Ok </div>');
    var msgHour = $('<div class="checkHour-msg">'+ hour.getHours() + ':' + hour.getMinutes() + '</div>');
    var arrow = $('<div>' + '</div>').addClass('arrow-down');
    $('#messages').append(row.append(lastDiv.append(msgHour).append(arrow)));
  }, 1000);
}
