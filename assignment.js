$(document).ready(function() {
  console.log('im ready!')

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
    tr.append("<td>" + "<button class='btn btn-info'>Delete</button>"+ "</td>")

  };












});
