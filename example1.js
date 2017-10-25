// Need to install first watson SDK packages
// npm init
// npm install --save watson-developer-cloud

// Example 1: sets up service wrapper, sends initial message, and
// receives response.


// Set up Conversation service wrapper.
// You can explicitly add credentials in your source code file or use an auth file

/*
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var conversation = new ConversationV1({
  username: 'USER-NAME', // replace with username from service key
  password: 'USER-PASSWORD', // replace with password from service key
  path: { workspace_id: 'WORKSPACE_ID' }, // replace with workspace ID
  version:  'v1',
  version_date: '2017-05-26'
});
*/

// Let's get the credentials from an auth file

var watson = require('watson-developer-cloud');
var auth = require('./auth.js');
var conversation = watson.conversation(auth.conversation);


// Start conversation with empty me6c13fca9-fc13-4fe5-b75c-20a46278c443ssage.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}
