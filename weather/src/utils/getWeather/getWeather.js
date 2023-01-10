const getWeather =(cityId, onSuccess)=>{
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            onSuccess(data);
            // console.log(data);
        }
    }

    // const cityId = 2158177;
    const appId = 'e723d8dd29fffc587c539e9a37fd241d';
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`, true);
    xhttp.send();
}

export default getWeather;
