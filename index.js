const fs = require('fs');
const textToImage = require('text-to-image');

// textToImage.generate('The quick fox jumped over the fence.').then(function(dataUri){
// 	console.log(dataUri);
// });

textToImage.generate('Welcome to Techweber YouTube channel',{
	debug: true,
	maxWidth: 720,
	fontSize: 40,
	fontFamily: 'Arial',
	lineHeight: 200,
	margin: 5,
	bgColor: 'white',
	textColor: 'blue'
}).then(function(dataUri){
	console.log(dataUri);
});