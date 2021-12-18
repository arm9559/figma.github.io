// function textSet(){
// }
// textSet()

class Text{
    constructor(txt){
        this.lorem = txt
    }
    present(){
        return "LL" + this.lorem
    }
}

class Lorems extends Text{
    constructor(Text,texts){
        super(Text)
        this.lorems = texts
    }
    show(){
        return this.present() + this.lorems
    }
}

mytxt = new Text("Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.")

let getText = document.querySelector(".lorem").innerHTML = mytxt.lorem
    let getTexts = document.querySelectorAll(".lorems")
    for(let i = 0; i < getTexts.length;i++){
        getTexts[i].innerHTML = mytxt.lorem
    }
fetch("https://goweather.herokuapp.com/weather/Armenia")
.then(response => response.json())
.then(data =>{
    let getWeatherButton = document.querySelector(".weather").addEventListener("click",()=>{
        let getWeatherContainer = document.querySelector(".weather-container")
        getWeatherContainer.innerHTML = data.temperature + " " + data.wind + " " + data.description
        let getNones = document.querySelectorAll(".none")
        for(let i = 0; i < getNones.length;i++){
            getNones[i].style.display = "block"
            getNones[0].addEventListener("click",()=>{
                getWeatherContainer.innerHTML = data.forecast[0].temperature + " " + data.forecast[0].wind + " " + data.forecast[0].description
            })
            getNones[1].addEventListener("click",()=>{
                getWeatherContainer.innerHTML = data.forecast[1].temperature + " " + data.forecast[1].wind + " " + data.forecast[1].description
            })
        }
    })
    console.log(data)
    
})