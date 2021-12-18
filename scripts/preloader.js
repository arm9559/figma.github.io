let request = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

let main = document.querySelector('.series-section')
const xhr = new XMLHttpRequest()
xhr.open('GET', request)

xhr.onload = () => {
    let users = JSON.parse(xhr.response)
    let array = users.entries
    console.log(array)       
    // if(xhr.status == 200){
        function a(){
            let i = 0
                    let setProgress = document.querySelector(".progress")
                        setProgress.style.transition = "0.5s"
                            setProgress.style.width = "100%"
                            i++
                            if(i == 1){
                                   setInterval(function(){
                                    function openfile(file) {
                                        window.location = file; 
                                       }
                                       openfile("C:/Users/Admin/Desktop/figma/home.html")
                                   },3000)                         
                            }
        }
        a()
    // } 
}
xhr.send()