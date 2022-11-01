const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post('/create', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(3001, function () {
  console.log('Server is running');
});
