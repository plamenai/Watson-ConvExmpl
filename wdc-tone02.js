// nodejs.org
// bluemix.net
// npm init
// npm install --save watson-developer-cloud

var watson = require('watson-developer-cloud');
var auth = require('./auth.js');

var tone_analyzer = watson.tone_analyzer(auth.tone_analyzer);

var fs = require('fs');
var path = require('path');
var myText;

// Let's read a positive emotion text
myText = fs.readFileSync(path.join(__dirname, 'input-text-001.txt'), {encoding: 'utf-8'});

// Let's read a negative emaotion text
// myText = fs.readFileSync(path.join(__dirname, 'input-text-002.txt'), {encoding: 'utf-8'});


tone_analyzer.tone({text: myText}, function(err, result) {
  if (err) {
    return console.log(err);
  }

  var cats = result.document_tone.tone_categories;
  cats.forEach(function(cat) {
    console.log(cat.category_name);
    cat.tones.forEach(function(tone) {
      console.log("  %s: %s", tone.tone_name, tone.score);
    })
  })
});
