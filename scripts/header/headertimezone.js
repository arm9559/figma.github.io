let request = "https://freegeoip.app/json/"
let getConfig = document.querySelectorAll(".config")
let getContainer = document.querySelector(".header-child")

const xhr = new XMLHttpRequest()
xhr.open("GET",request)
    xhr.onload = () => {
    let users = JSON.parse(xhr.response)
            console.log(users)
        for(let i =0;i < getConfig.length;i++){
            getConfig[0].innerHTML = users.ip
            getConfig[1].innerHTML = users.city
            getConfig[2].innerHTML = users.country_name
            getConfig[3].innerHTML = users.country_code
        }
}
xhr.send()