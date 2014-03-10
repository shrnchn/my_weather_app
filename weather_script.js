
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

			if (!!data.current_observation) {
				$('.holder').append('°C');
				console.log("it works");
				$('.imageholder').prepend('<img alt="weather icon" class="icon">');
				console.log("it works!!!");
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

			console.log(icon);
			if (temp >= 20) {
				$('.activities').text("It's a hot day out, refresh yourself with an ice tea!");
			}
			else if (temp > 5) {
				$('.activities').text("It's kinda chilly, try a bubbletea!");
			}
			else if (temp < 0) {
				$('.activities').text("Brrr it's cold, try making a hot chocolate to warm up!");
			}

			// dump string into the divs
			$('.forecastLocation').text(forecast + ' in ' + location);
			$('.icon').attr('src', weathericon);
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