const express = require('express'); 
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, './dist/index.html');
  const contentsFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentsFromHtml);
});

app.listen(3000, () => {
  console.log('Application running on 3000!');
})