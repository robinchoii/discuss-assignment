$(document).ready(function() {
  console.log('im ready!')
  $('form').hide()
  $('#cancelButton').hide()

  var listOfQuestions = [
    {question: "Question 1", answers: [], options: [], shuffle: false, noneOfTheAbove: false},
    {question: "Question 2", answers: [], options: [], shuffle: false, noneOfTheAbove: false},
    {question: "Question 3", answers: [], options: [], shuffle: false, noneOfTheAbove: false},
    {question: "Question 4", answers: [], options: [], shuffle: false, noneOfTheAbove: false},
    {question: "Question 5", answers: [], options: [], shuffle: false, noneOfTheAbove: false}
  ]
  console.log(listOfQuestions);

  for(var i = 1; i <= listOfQuestions.length; i++) {
    var tbody = $("tbody")
    var tr = $("<tr></tr>").appendTo(tbody);
    tr.append("<td>" + i + "</td>");
    tr.append("<td>" + listOfQuestions[i-1].question+ "</td>")
    tr.append("<td>" + "<button class='btn btn-info'>Edit</button>"+ "</td>")
    tr.append("<td>" + "<button class='btn btn-danger'>Delete</button>"+ "</td>")
  };

  $("#newQuestionButton").on('click', function() {
    $('form').slideDown(500);
    $('#cancelButton').fadeIn(500);
  });
  $("#cancelButton").on("click", function() {
    $('#questionForm')[0].reset();
    $('#cancelButton').hide()
    $('form').slideUp(500);
  });
  $("#addAnswerButton").on("click", function(e) {
    e.preventDefault();
    console.log("add a new answer");
  });
  $("#submitQuestionButton").on("click", function() {
    console.log('submit!');
    newQuestion();
    $('#cancelButton').hide()
  });

  function newQuestion() {
    var question = {};
    question.question = document.questionForm.question.value;
    question.answers = {
      'must-select': 'answer1',

      'may-select': 'answer2',
      'teriminate-if-select': 'answer3'
    };
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

    // console.log(question)

    var tbody = $("tbody")
    var tr = $("<tr></tr>").appendTo(tbody);
    tr.append("<td>" + listOfQuestions.length + "</td>");
    tr.append("<td>" + question.question+ "</td>")
    tr.append("<td>" + "<button class='btn btn-info'>Edit</button>"+ "</td>")
    tr.append("<td>" + "<button class='btn btn-danger'>Delete</button>"+ "</td>")

    $('form').slideUp(500)
    $('#questionForm')[0].reset()
  };













});
