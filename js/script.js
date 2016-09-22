// hold variables (input)
// var name = '';
// var place = '';
var keyword = '';

// insert all data into the divs
function loadCollection(data) {  //unicorn aka data, refers to entire object
	console.log(data);

// // pulling list of data
// 	if(unicorn.response.error) { //unicorn is the name of the data being passed (so it's the whole entire object in this case)
// 		alert(unicorn.response.error.description);  //to access the object inside of it, you use .
// 		return;
// 	}

// get museum collection data (output)
	var title = data.records[0].fields.title;
	var artist = data.records[0].fields.artist; 
	var thumbnail = data.records[0].fields.primary_image_id; 

	console.log(title);
	console.log(artist);
	console.log(thumbnail);

	$('#image').html('<img src=http://media.vam.ac.uk/media/thira/collection_images/' + thumbnail.slice(0,6) +'/' + thumbnail + '_jpg_ds.jpg>');
	$('#title').html('Title: ' + title);
	$('#artist').html('Artist: ' + artist);

}


// get museum collection data
function getCollection() {
	var myUrl = "http://www.vam.ac.uk/api/json/museumobject/search?q=" + keyword;


	$.ajax({ //calls to server, loads json file
		url: myUrl,
		dataType: "jsonp",
		success: function(response) { //passes response into load weather function
			// console.log(response);
			loadCollection(response); //render results
		},
		error: function(response) {
			alert('Try again.');
		}
	});

}


// pass museum collection data when submit button clicked
// pull value from input 
function setCollection() {
	keyword = $('#q').val(); //get value from currentCity input

	console.log("Museum Object " + keyword + " ");
	getCollection();
}

// initialize
function init() {
	$('#submit').click(function(e){
		e.preventDefault();
		// console.log("works");
		setCollection();  //none of the functions above run until hit submit button

	});
};
// run on load
$(document).ready(function(){
	init();
});
