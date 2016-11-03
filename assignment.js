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

  tbody = $("tbody")
  var tr = $("<tr></tr>").appendTo(tbody)
  tr.append("<td>1</td>")
  tr.append("<td>2</td>")
  tr.append("<td>3</td>")
  tr.append("<td>4</td>")
});
