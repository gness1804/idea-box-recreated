$(document).ready(function () {
  var titleInput = $("#title-input");
  var bodyInput = $("#body-input");
  var submitButton = $("#submit-button");

  var ideas = [];

  function Idea(title, body, id, quality) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now();
    this.quality = quality || "swill";
  }

  function createNewIdea(newTitle, newBody) {
    ideas.push(new Idea(newTitle, newBody));
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }

  function renderIdeas() {
    
  }

  submitButton.on("click", function (event) {
    event.preventDefault();
    var newTitle = titleInput.val();
    var newBody = bodyInput.val();
    createNewIdea(newTitle, newBody);
    renderIdeas();
  });

}); //end of jQuery body
