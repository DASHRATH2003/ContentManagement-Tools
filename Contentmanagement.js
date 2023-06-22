document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#blogForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the form values
      var title = document.querySelector('#title').value;
      var content = document.querySelector('#content').value;
      var image = document.querySelector('#image').value;
      var video = document.querySelector('#video').value;

      // Display the filled details on the webpage
      var detailsContainer = document.querySelector('#detailsContainer');
      detailsContainer.innerHTML = `
        <h1>Blog Details</h1>
        <h2>Title: ${title}</h2>
        <p>Content: ${content}</p>
        <img src="${image}" alt="Blog Image">
        <p>Video URL: ${video}</p>
      `;
    });
  });
