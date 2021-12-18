function mod(){
    let met = {
        firstAge:Math.floor(Math.random()*80),
        secondAge:Math.floor(Math.random()*80)
    }
fetch("https://randomuser.me/api/")
.then((response)=> response.json())
.then((result)=>{
        let getNameFirst = document.querySelector(".PeopleNameFirst").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
        let getEmailFirst = document.querySelector(".PeopleEmailFirst").innerHTML = result.results[0].email
        let getAgeFirst = document.querySelector(".PeopleAgeFirst").innerHTML = result.results[0].dob.age
        console.log(result)
        let getImageFirst = document.querySelector(".firstImage")
        getImageFirst.setAttribute("src",`${result.results[0].picture.large}`)
            let getNext = document.querySelector(".next").addEventListener("click",()=>{
                fetch("https://randomuser.me/api/")
                .then((response) => response.json())
                .then((result)=>{
                    let getNameFirst = document.querySelector(".PeopleNameFirst").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
                    let getEmailFirst = document.querySelector(".PeopleEmailFirst").innerHTML = result.results[0].email
                    let getAgeFirst = document.querySelector(".PeopleAgeFirst").innerHTML = result.results[0].dob.age
                    console.log(result)
                    let getImageFirst = document.querySelector(".firstImage")
                    getImageFirst.setAttribute("src",`${result.results[0].picture.large}`)
                    let getHeroImageFirst = document.querySelector(".firstHeroImage")
                    getHeroImageFirst.setAttribute("src",`${result.results[0].picture.large}`)

                    let getFirstHeroName = document.querySelector(".firstHeroName").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
                    let getFirstHeroText = document.querySelector(".firstHeroText").innerHTML = result.results[0].location.city + "<br/>" +result.results[0].location.country + "<br/>" + result.results[0].location.state + "<br/>" + result.results[0].email + "<br/>" + "Age" + result.results[0].dob.age
                    
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
            let getPrev = document.querySelector(".prev").addEventListener("click",()=>{
                fetch("https://randomuser.me/api/")
                .then((response) => response.json())
                .then((result)=>{
                    let getNameFirst = document.querySelector(".PeopleNameFirst").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
                    let getEmailFirst = document.querySelector(".PeopleEmailFirst").innerHTML = result.results[0].email
                    let getAgeFirst = document.querySelector(".PeopleAgeFirst").innerHTML ="Age" + " " + result.results[0].dob.age
                    console.log(result)
                    let getImageFirst = document.querySelector(".firstImage")
                    getImageFirst.setAttribute("src",`${result.results[0].picture.large}`)
                    getImageFirst.setAttribute("src",`${result.results[0].picture.large}`)
                    let getHeroImageSecond = document.querySelector(".secondHeroImage")
                    getHeroImageSecond.setAttribute("src",`${result.results[0].picture.large}`)
                    met.secondAge = result.results[0].dob.age;

                    let getSecondHeroName = document.querySelector(".secondHeroName").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
                    let getSecondHeroText = document.querySelector(".secondHeroText").innerHTML = result.results[0].location.city + "<br/>" +result.results[0].location.country + "<br/>" + result.results[0].location.state + "<br/>" + result.results[0].email + "<br/>" + "Age" + result.results[0].dob.age

                    console.log(met.secondAge)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
})
.catch((err)=>{
    console.log(err)
})


fetch("https://randomuser.me/api/?results=2")
.then((response)=> response.json())
.then((result)=>{
    let getNameSecond = document.querySelector(".PeopleNameSecond").innerHTML = result.results[0].name.title + " " + result.results[0].name.first
        let getEmailSecond = document.querySelector(".PeopleEmailSecond").innerHTML = result.results[0].email
        let getAgeSecond = document.querySelector(".PeopleAgeSecond").innerHTML = result.results[0].dob.age
        console.log(result)
        let getImageSecond = document.querySelector(".secondImage")
        getImageSecond.setAttribute("src",`${result.results[0].picture.large}`)

            let getNext = document.querySelector(".next").addEventListener("click",()=>{
                fetch("https://randomuser.me/api/?results=2")
                .then((response) => response.json())
                .then((result)=>{
                    let getNameSecond = document.querySelector(".PeopleNameSecond").innerHTML = result.results[0].name.first
                        let getEmailSecond = document.querySelector(".PeopleEmailSecond").innerHTML = result.results[0].email
                        let getAgeSecond = document.querySelector(".PeopleAgeSecond").innerHTML = result.results[0].dob.age
                        let getImageSecond = document.querySelector(".secondImage")
                        getImageSecond.setAttribute("src",`${result.results[0].picture.large}`)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
            let getPrev = document.querySelector(".prev").addEventListener("click",()=>{
                fetch("https://randomuser.me/api/?results=2")
                .then((response) => response.json())
                .then((result)=>{
                    let getNameSecond = document.querySelector(".PeopleNameSecond").innerHTML = result.results[0].name.first
                        let getEmailSecond = document.querySelector(".PeopleEmailSecond").innerHTML = result.results[0].email
                        let getAgeSecond = document.querySelector(".PeopleAgeSecond").innerHTML ="Age" + " " + result.results[0].dob.age
                        let getImageSecond = document.querySelector(".secondImage")
                        getImageSecond.setAttribute("src",`${result.results[0].picture.large}`)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
})
.catch((err)=>{
    console.log(err)
})
}
mod()