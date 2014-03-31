
$(function() {
	var getTheWeather = function(city) {

	// get weather in any city
	var encodedCity = encodeURI(city);

	$.ajax('http://api.wunderground.com/api/0aea82cb2d20d5dc/conditions/q/'+ encodedCity +'.json', {
		type : 'GET',
		dataType : 'jsonp',
		success : function(data) {
			console.log(data);

			// if user doesn't enter in both city and province/state
			if (!data.current_observation) {
				$('h1.error').text('Please be more specific');
				return false;
				$('.weather').remove();
			}

			var w = data.current_observation;
			var forecast = w.weather;
			var location = w.display_location.full;
			var temp = w.temp_c;
			var tempRounded = Math.round(temp);
			var feelsLike = w.feelslike_c;
			var feelsRounded = Math.round(feelsLike);
			var windDirection = w.wind_dir;
			var windSpeed = w.wind_kph;
			var windGust = w.wind_gust_kph;
			var humidity = w.relative_humidity;
			var precipitation = w.precip_today_metric;
			var weathericon = w.icon_url;
			var icon = w.icon;

			if (!!data.current_observation) {
				$('.holder').text('°C');
				console.log("it works");


					if (forecast === "Chance of Flurries") {
						$('.imageholder').html('<img src="icons/chanceofflurries.svg">');
					}
					else if (forecast === "Chance of Rain") {
						$('.imageholder').html('<img src="icons/chanceofrain.svg">');
					}
					else if (forecast === "Chance Rain") {
						$('.imageholder').html('<img src="icons/chanceofrain.svg">');
					}
					else if (forecast === "Chance of Freezing Rain") {
						$('.imageholder').html('<img src="icons/freezingrain.svg">');
					}
					else if (forecast === "Chance of Sleet") {
						$('.imageholder').html('<img src="icons/freezingrain.svg">');
					}
					else if (forecast === "Chance of Snow") {
						$('.imageholder').html('<img src="icons/chanceoffluries.svg">');
					}
					else if (forecast === "Chance of Thunderstorms") {
						$('.imageholder').html('<img src="icons/chanceofthunderstorms.svg">');
					}
					else if (forecast === "Chance of a Thunderstorm") {
						$('.imageholder').html('<img src="icons/chanceofthunderstorms.svg">');
					}
					else if (forecast === "Clear") {
						$('.imageholder').html('<img src="icons/sunny.svg">');
					}
					else if (forecast === "Cloudy") {
						$('.imageholder').html('<img src="icons/cloudy.svg">');
					}
					else if (forecast === "Flurries") {
						$('.imageholder').html('<img src="icons/flurries.svg">');
					}
					else if (forecast === "Fog") {
						$('.imageholder').html('<img src="icons/fog.svg">');
					}
					else if (forecast === "Haze") {
						$('.imageholder').html('<img src="icons/fog.svg">');
					}
					else if (forecast === "Mostly Cloudy") {
						$('.imageholder').html('<img src="icons/cloudy.svg">');
					}
					else if (forecast === "Mostly Sunny") {
						$('.imageholder').html('<img src="icons/clear.svg">');
					}
					else if (forecast === "Partly Cloudy") {
						$('.imageholder').html('<img src="icons/partlycloudy.svg">');
					}
					else if (forecast === "Partly Sunny") {
						$('.imageholder').html('<img src="icons/partlycloudy.svg">');
					}
					else if (forecast === "Freezing Rain") {
						$('.imageholder').html('<img src="freezingrain.svg">');
					}
					else if (forecast === "Rain") {
						$('.imageholder').html('<img src="rain.svg">');
					}
					else if (forecast === "Sleet") {
						$('.imageholder').html('<img src="icons/freezingrain.svg">');
					}
					else if (forecast === "Snow") {
						$('.imageholder').html('<img src="icons/flurries.svg">');
					}
					else if (forecast === "Sunny") {
						$('.imageholder').html('<img src="icons/sunny.svg">');
					}
					else if (forecast === "Thunderstorms") {
						$('.imageholder').html('<img src="icons/thunderstorm.svg">');
					}
					else if (forecast === "Thunderstorm") {
						$('.imageholder').html('<img src="icons/thunderstorm.svg">');
					}
					else if (forecast === "Unknown") {
						$('.imageholder').html('<img src="icons/unknown.svg">');
					}
					else if (forecast === "Overcast") {
						$('.imageholder').html('<img src="icons/overcast.svg">');
					}
					else if (forecast === "Scattered Clouds") {
						$('.imageholder').html('<img src="icons/cloudy.svg">');
					}
			}

			// dump string into the divs
			$('.forecastLocation').text(forecast + ' in ' + location);
			$('.temp').text(tempRounded);
			$('.feelsLike').text('Feels like ' + feelsRounded +'°C');
			$('.wds').text('Wind: '+ windDirection + ' ' + windSpeed + ' km/h');
			$('.wg').text('Wind Gust: ' + windGust);
			$('.h').text('Humidity: ' + humidity);
		}
	}); // end ajax
}; // end getTheWeather

	// run the function in the form
	$('form.weatherForm').on('submit', function(e){
		e.preventDefault();
		// grabbing the city value from the input in body
		var city = $('input[name="city"]').val();
		getTheWeather(city);
		$('h1.error').text('')
		$('.weather').addClass('show');

	}); // end form


});