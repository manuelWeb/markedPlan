"use strict";

const planning = "../markedPlan/dl2018.md";

fetch('dl2018.md')
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
      document.getElementById('content').innerHTML = marked(body);
    });
