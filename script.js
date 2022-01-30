/* VAI DA RUIM */
function fetchPokemonImage(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        createImage(data)
      })
  }
  function createImage(pokemonImage){
    console.log(pokemonImage.sprites.front_default)
    document.querySelector('.pokemon-foto').src = pokemonImage.sprites.front_default
    
  }
  
    let bool = Boolean
    bool = false
/* POKEMON */

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/type/${id}`)
      .then((res) => res.json())
      .then((data) => {
        create(data)
      })
  }
  function create(pokemon){
    let nomePokemon = pokemon.pokemon[nt()].pokemon.name
    let tipoPokemon = pokemon.name

    console.log(nomePokemon)
    fetchPokemonImage(nomePokemon)
    console.log(pokemon.name)

    document.querySelector('.pokemon-name').innerHTML = nomePokemon
    document.querySelector('.type').innerHTML = tipoPokemon

  }
  function gerarWater(){
    fetchPokemon('water')
    document.querySelector('.type').style.background='#4592C4'
    document.querySelector('.type').style.color='#FFFFFF'

  }
  function gerarFire(){
    fetchPokemon('fire')
    document.querySelector('.type').style.background='#FFA500'
    document.querySelector('.type').style.color='#FFFFFF'
  }
  function gerarIce(){
    fetchPokemon('15')
    document.querySelector('.type').style.background='#51C4E7'
    document.querySelector('.type').style.color='#333333'
  }
  function gerarGrass(){
    fetchPokemon('grass')
    document.querySelector('.type').style.background='#729F3F'
    document.querySelector('.type').style.color='#333333'
  }
  function gerarGround(){
    fetchPokemon('ground')
    document.querySelector('.type').style.background='#F7DE3F'
    document.querySelector('.type').style.color='#333333'
  }
  function gerarBug(){
    fetchPokemon('bug')
    document.querySelector('.type').style.background='#729F3F'
    document.querySelector('.type').style.color='#FFFFFF'
  }
  function gerarRock(){
    fetchPokemon('rock')
    document.querySelector('.type').style.background='#A38C21'
    document.querySelector('.type').style.color='#FFFFFF'
  }
  function gerarEletric(){
    fetchPokemon('13')
    document.querySelector('.type').style.background='#F7DE3F'
    document.querySelector('.type').style.color='#FFFFFF'
  }
  function gerarNormal(){
    fetchPokemon('1')
    document.querySelector('.type').style.background='#A4ACAF'
    document.querySelector('.type').style.color='#333333'
  }
  
  
  /* NUMERO ALEATORIO */
  function nt(){
    var sorteados = [];
    var valorMaximo = 50;
  
    if (sorteados.length == valorMaximo) {
      sorteados = [];
    }
    var sugestao = Math.ceil(Math.random() * valorMaximo);
    while (sorteados.indexOf(sugestao) >= 0) {
      sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao);
  
    return sugestao
  }

/* POKEMON */

const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
const city = document.querySelector('.cidade h1')
const container_temp = document.querySelector('.temperatura-atual');
const temp_number = document.querySelector('.temperatura-atual div');
const temp_unit = document.querySelector('.temperatura-atual span');
const weather_t = document.querySelector('.clima h1');
const search_input = document.querySelector('.input');
const search_button = document.querySelector('.btn');



function coordResults(lat, long) {
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
           search_input.value=''
        })
        .then(response => {
            displayResults(response)
            document.querySelector('.wrap').style.display='flex'
            document.querySelector('.busca').style.top='2.5rem'
            document.querySelector('.logo').style.display='none'
            document.querySelector('body').classList.add('active')
        });
}

function manaus(){
    searchResults(search_input.value)
    
}

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode
    if (key === 13) {
        searchResults(search_input.value)
    }
}



function displayResults(weather) {
    console.log(weather)

    city.innerText = `${weather.name}, ${weather.sys.country}`;





    let temperature = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperature;
    temp_unit.innerHTML = `°c`;

    weather_tempo = weather.weather[0].description;
    weather_t.innerText = capitalizeFirstLetter(weather_tempo)
    if((weather_tempo == 'chuva leve') || (weather_tempo == 'chuva moderada') || (weather_tempo == 'chuva forte')){
        bool = true
    }else{
        bool = false
    }




    if(bool){
      gerarEletric()
      return;
    }else if((Math.round(weather.main.temp)) < 5){
        gerarIce()
    }else if((Math.round(weather.main.temp)) >= 5 && (Math.round(weather.main.temp)) < 10){
        gerarWater()
    }else if((Math.round(weather.main.temp)) >= 12 && (Math.round(weather.main.temp)) < 15){
        gerarGrass()
    }else if((Math.round(weather.main.temp)) >= 15 && (Math.round(weather.main.temp)) < 21){
        gerarGround()
    }else if((Math.round(weather.main.temp)) >= 23 && (Math.round(weather.main.temp)) < 27){
        gerarBug()
    }else if((Math.round(weather.main.temp)) >= 27 && (Math.round(weather.main.temp)) <= 33){
        gerarRock()
    }else if((Math.round(weather.main.temp)) > 33){
        gerarFire()
    }else{
        gerarNormal()
    }

    
    
}



container_temp.addEventListener('click', changeTemp)
function changeTemp() {
    temp_number_now = temp_number.innerHTML

    if (temp_unit.innerHTML === "°c") {
        let f = (temp_number_now * 1.8) + 32
        temp_unit.innerHTML = "°f"
        temp_number.innerHTML = Math.round(f)
    }
    else {
        let c = (temp_number_now - 32) / 1.8
        temp_unit.innerHTML = "°c"
        temp_number.innerHTML = Math.round(c)
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
