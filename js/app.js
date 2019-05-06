window.addEventListener('load', ()=> {

    let long;
    let lat;

    let degrees = document.querySelector('.temp__value');
    let hum = document.querySelector('.hum__value');
    let body = document.querySelector('body');

if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {

        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/1435d4cad45db0b183b0b6dbbd8408d2/${lat},${long}`;

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                const { humidity, temperature } = data.currently;

                degrees.textContent = temperature;
                hum.textContent = humidity * 100;
                


            });

    });

}

});