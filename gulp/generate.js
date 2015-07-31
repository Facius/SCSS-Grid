var fs = require('fs');
var prompt = require('prompt');


var breakpoints = ['xxs', 'xs', 'sm','md','lg','xl' ];
var spans = ['1/12','2/12','3/12','4/12','5/12','6/12','7/12','8/12','9/12','10/12','11/12','12/12'];



// Start the prompt
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['number'], function (err, result) {
  console.log('number: ' + result.number);
  var output = generateString(result.number);
  saveOutput(output);
});

function generateString(number) {
  var strOutput = '';
  for (i = 0; i < number; i++) {
    strOutput += '.class-'+i+' { '+randomBreakpoint()+' } \n';
  }
  return strOutput;
}

function randomBreakpoint(){
  return '@include breakpoint('+breakpoints[random(0, breakpoints.length-1)]+') { '+randomSpan()+' } ';
}

function randomSpan(){
  return '@include span('+spans[random(0, breakpoints.length-1)]+');';
}

function random(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function saveOutput(output) {
  fs.writeFile("scss/_output.scss", output, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}


