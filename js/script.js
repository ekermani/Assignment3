// hold variables (input)
var city = '';
var state = '';
var options = '';

// insert all data into the divs
function loadCollection(unicorn) {  //unicorn aka data, refers to entire object
	console.log(unicorn);

// pulling list of data
	if(unicorn.response.error) { //unicorn is the name of the data being passed (so it's the whole entire object in this case)
		alert(unicorn.response.error.description);  //to access the object inside of it, you use .
		return;
	}

// get museum collection data (output)
	var title = unicorn.current_observation.display_location.city;
	var artist = unicorn.current_observation.temp_f; //if get array instead, then type [0] first number for example
	var thumbnail = unicorn.current_observation.icon_url;

	console.log(title);
	console.log(artist);
	console.log(thumbnail);

	$('#temperature').html(temperature); //.html changes html inside tags
	$('#weather').html(weather);
	$('#weatherIcon').html('<img src=" '+ icon +'">');

	// if(thisCity == 'New York') {  //make comparisons //leave blank to clear
	// 	$('#currentCity').val("New Rocks Yo!"); 
	// } else {
	// 	$('#currentCity').val("This city sucks");
	// }

}


// get museum collection data
function getCollection() {
	var myUrl = "http://www.vam.ac.uk/api/json/museumobject/", options;
	// after json is format of response
	var myUrl = "http://api.wunderground.com/api/" + APIkey + "/conditions/q/" + state +"/" + city + ".json";


	$.ajax({ //calls to server, loads json file //changed ajax to getJSON
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
	city = $('#currentCity').val(); //get value from currentCity input
	state = $('#currentState').val(); //get value from currentState input

	if(city == null || city =='' ) {
		alert('Enter keywords to search the musuem collection');
	}

	console.log("Museum Object " + city + ", " + state);
	getCollection();

}


// initialize
function init() {
	console.log("Hello");

	$('#submit').click(function(e){
		e.preventDefault();
		setCollection();  //none of the functions above run until hit submit button
	});
};
// run on load
$(document).ready(function(){
	init();
});

// 