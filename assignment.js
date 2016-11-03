$(document).ready(function() {
  console.log('im ready!');
  // $('form').hide()
  $('#cancel').hide()
  // $('#formAnswer').hide()
  $('.back-button').hide()
  $('.next-button').hide()

  var listOfQustions = [
    {id: 1, question: "first question"},
    {id: 2, question: "second question"},
    {id: 3, question: "third question"},
    {id: 4, question: "fourth question"},
    {id: 5, question: "fifth question"},
  ];

  //populating table
  var tbody = $('#tableBody');
  for (i = 1; i <= listOfQustions.length; i++) {
    var id = "question"+i
    var tr = $("<tr id="id" >'+'</tr>').appendTo(tbody)
    tr.append('<td>' + 'Question '+ i + '</td>')
    tr.append('<td>' + listOfQustions[i-1].question + '</td>')
    tr.append("<td><button class='btn btn-info editQuestion' href='#'>edit</button></td>")
    tr.append("<td><button class='btn btn-danger deleteQuestion' href='#'>delete</button></td>")
  };


  $("#questionSubmit").on('click', function() {
    var question = new Object()
    question.question = document.questionInfo.question.value;
    question.answers = document.getElementsByName('answers[]');
    question.options = document.getElementsByName('options[]');
    question.noneOfTheAbove = false
    question.shuffle = false

    console.log(question)
    listOfQustions.push(question);
    console.log(listOfQustions)


    var tr = $('<tr draggable="true"/>').appendTo(tbody);

    tr.append('<td>' + 'Question ' + listOfQustions.length + '</td>');
    tr.append('<td>' + question.question + '</td>');
    tr.append("<td><button class='btn btn-info editQuestion' href='#'>edit</button></td>");
    tr.append("<td><button class='btn btn-danger deleteQuestion' href='#'>delete</button></td>");
    return false;
  });

  $("#addAnswer").click(function() {
    console.log('add')
    insertFormRow()
  });

  $("#newQuestion").click(function() {
    $('form').slideDown(500)
    $('#cancel').show(500)
    $('.next-button').show(500)
    $('.back-button').show(500)
  });

  $("#cancel").click(function() {
    $('form').slideUp(500)
    $('#cancel').hide(500)
    $('.next-button').hide(500)
    $('.back-button').hide(500)
    location.reload()
  });

  $(".next-button").click(function() {
    $("#formQuestion").slideUp(500);
    $("#formAnswer").show(500)
  });
  $(".back-button").click(function() {
    $('#formQuestion').slideDown(500)
  });

  $(".deleteQuestion").click(function() {
    $('tr').remove()
  });


});


