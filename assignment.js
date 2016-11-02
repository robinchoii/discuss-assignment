$(document).ready(function() {
  console.log('im ready!');
  var listOfQustions = [
    {id: 1, question: "first question"},
    {id: 2, question: "second question"},
    {id: 3, question: "third question"},
    {id: 4, question: "fourth question"},
    {id: 5, question: "fifth question"},
  ];

  //populating table
  var tbody = $('#tableBody');
  for (i = 0; i < listOfQustions.length; i++) {
    var tr = $('<tr draggable="true" />').appendTo(tbody)
    tr.append('<td>' + listOfQustions[i].id + '</td>')
    tr.append('<td>' + listOfQustions[i].question + '</td>')
    tr.append("<td><button href='#'>edit</button></td>")
    tr.append("<td><button href='#'>delete</button></td>")
  };


  $("#questionSubmit").click(function() {
    var question = new Object()
    question.id = listOfQustions.length+1
    question.question = document.questionInfo.question.value;
    question.answer = document.questionInfo.question.value;
    question.option = document.questionInfo.options.value;
    // console.log(question)
    listOfQustions.push(question);
    // console.log(listOfQustions)

    var tr = $('<tr draggable="true"/>').appendTo(tbody);

    tr.append('<td>' + question.id + '</td>');
    tr.append('<td>' + question.question + '</td>');
    tr.append("<td><button href='#'>edit</button></td>");
    tr.append("<td><button href='#'>delete</button></td>");

    var form = document.getElementById('questionForm');
    form.reset();
    return false;


  });

});


