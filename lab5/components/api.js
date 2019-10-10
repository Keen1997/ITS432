export default function(code, period) {
	var rootURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_'+period+'&symbol=';
	var url = `${rootURL}${code}&apikey=<7MB19PDXN932JXYI>`;
	return fetch (url).then(function(response){
		return response.text();
	}).then(function(text){
		// console.log(text);
		let json = JSON.parse(text);
		// console.log(json);
        return json;
	});
}
