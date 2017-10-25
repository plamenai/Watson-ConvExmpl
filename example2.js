// need to install "prompt-sync" package
// from https://www.npmjs.com/package/prompt-sync
// npm install --save prompt-sync

// Example 2: adds user input and detects intents.

var prompt = require('prompt-sync')();

// Let's get the credentials from an auth file

var watson = require('watson-developer-cloud');
var auth = require('./auth.js');
var conversation = watson.conversation(auth.conversation);

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // If an intent was detected, log it out to the console.
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }

  // Prompt for the next round of input.
  var newMessageFromUser = prompt('>> ');
  conversation.message({
    input: { text: newMessageFromUser }
    }, processResponse)
}
