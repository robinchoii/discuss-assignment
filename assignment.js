$(document).ready(function() {
  console.log('im ready!')
  $('form').hide()
  $('#cancelButton').hide()
  $('#saveButton').hide()
  $( "tbody" ).sortable();
  $( "tbody" ).disableSelection();

  var listOfQuestions = [
    {id: '1', question: "Question 1", answers: [], shuffle: false, noneOfTheAbove: false},
    {id: '2', question: "Question 2", answers: [], shuffle: false, noneOfTheAbove: false},
    {id: '3', question: "Question 3", answers: [], shuffle: false, noneOfTheAbove: false},
    {id: '4', question: "Question 4", answers: [], shuffle: false, noneOfTheAbove: false},
    {id: '5', question: "Question 5", answers: [], shuffle: false, noneOfTheAbove: false}
  ]
  // console.log(listOfQuestions);

  for(var i = 1; i <= listOfQuestions.length; i++) {
    var tbody = $("tbody")
    var tr = $("<tr></tr>").appendTo(tbody);
    tr.append("<td>" + i + "</td>");
    tr.append("<td>" + listOfQuestions[i-1].question+ "</td>")
    tr.append("<td>" + "<button id='editButton' class='btn btn-info'><span class='glyphicon glyphicon-pencil'></span></button>"+ "</td>")
    tr.append("<td>" + "<button id='deleteButton' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button>"+ "</td>")
    tr.attr('id','row'+i)
  };

  $("#newQuestionButton").on('click', function() {
    $('form').slideDown(500);
    $('#newQuestionButton').hide(500)
    $('#cancelButton').fadeIn(500);
  });

  $("#cancelButton").on("click", function() {
    $('#questionForm')[0].reset();
    $('#cancelButton').hide(500)
    $('#saveButton').hide(500)
    $('#newQuestionButton').show(500)
    $('form').slideUp(500);
  });

  $(".table").on('click', '#editButton', function() {
    var id = $(this).parent().parent()
    console.log(id)

    $('#newQuestionButton').hide(500)
    $('#cancelButton').show(500)
    $('#saveButton').show(500)
    $('#submitButton').hide(500)
    $('form').slideDown(500)
  });
  $(".table").on('click', '#deleteButton',function() {
    $(this).parent().parent().remove();
    deleteQuestion()
  });

  $("#addAnswerButton").on("click", function(e) {
    e.preventDefault();
    var answerRow = $('#answerRow')
    var options = $("<select name='options' class='form-control'></select>").appendTo(answerRow)
    options.append("<option value='may-select'>May Select</option>")
    options.append("<option value='must-select'>Must Select</option>")
    options.append("<option value='terminate-if-select'>Terminate if Select</option>")
    var answerbox = $("<textarea name='answers' class='form-control' id='answer' placeholder='Enter your answer'></textarea").appendTo(answerRow)
    // console.log(test1)
    console.log("add a new answer");
  });

  $("#submitButton").on("click", function() {
    console.log('submit!');
    console.log(listOfQuestions);
    newQuestion();
    $('#cancelButton').hide(500)
    $('#newQuestionButton').show(500)
  });

  function deleteQuestion(question) {
    var question = {};
    question.id = (listOfQuestions.length+1)

    var index = listOfQuestions.indexOf(question.id)
    listOfQuestions.splice(index, 1);
    console.log(listOfQuestions)
  };

  function newQuestion() {
    var question = {};
    var options = document.getElementsByName('options');
    var answer = {};
    var answersArray = document.getElementsByName('answers');
    var finalAnswer = []

    //creating answer object then push to array
    for (var index = 0; index < options.length; index++) {
      answer[options[index].value] = answersArray[index].value
      finalAnswer.push(answer)
    }

    question.id = (listOfQuestions.length+1)
    question.question = document.questionForm.question.value
    question.answers = finalAnswer
    if ($("input[name='noneOfTheAbove']").is(':checked')) {
      question.noneOfTheAbove = true;
    } else {
      question.noneOfTheAbove = false;
    };
    if ($("input[name='shuffle']").is(':checked')) {
      question.shuffle = true;
    } else {
      question.shuffle = false;
    };
    listOfQuestions.push(question)
    console.log(question)
    console.log(listOfQuestions)


    var tbody = $("tbody")
    var tr = $("<tr></tr>").appendTo(tbody);
    tr.append("<td>" + listOfQuestions.length + "</td>");
    tr.append("<td>" + question.question+ "</td>")
    tr.append("<td>" + "<button id='editButton'class='btn btn-info'><span class='glyphicon glyphicon-pencil'></span></button>"+ "</td>")
    tr.append("<td>" + "<button id='deleteButton'class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button>"+ "</td>")

    tr.attr('id', 'row'+(listOfQuestions.length+1))

    $('form').slideUp(500)
    $('#questionForm')[0].reset()
  };

});

