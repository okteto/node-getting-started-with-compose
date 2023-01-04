const express = require('express');
const app = express();

app.get('/hello-world2', function (req, res) {
  res.send('Hello world 2!');
})

app.listen(3000, function () {
  console.log('Starting hello-world server...');
})
