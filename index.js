var img = document.getElementById('image')
var clicker = document.getElementById('searchBttn')

var pokeArray = [1,2,3]
var counter = 0;

clicker.addEventListener('click', function(){
	$.ajax({url: "https://fizal.me/pokeapi/api/"+ pokeArray[counter] +".json",
		data: {s: ''},
		success: function(response){
			var resp = response;
			console.log(resp)
			console.log(resp.name)
			hookImage(resp)
			counter++;
		}
	})

	function hookImage(x){
		img.style.backgroundImage = "url(" + x.sprites.front_default + ")"
		img.style.backgroundSize = "100% 100%";
		img.style.width = '200px'
		img.style.height = '200px'
		img.style.border = '2px solid'
	}
});