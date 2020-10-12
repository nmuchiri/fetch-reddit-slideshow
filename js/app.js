
console.log("fired")

const requestUrl ="http://www.reddit.com/search.json?q=cats"


document.addEventListener("DOMContentLoaded", ()=>{
    


    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        form.style.display="none"
        h1.style.display="none"
        description.style.display="none"
        fetchCats(requestUrl+input.value)
        createSlideShow()
    })

    // button.addEventListener("click",showSlides)

})

    let cats=[]
    
    const fetchCats = (endpoint) => {
        fetch(endpoint)
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            console.log("jsonData.results:",jsonData.data.children)
            cats = jsonData.data.children
            addCatPhoto()
            
        })
        .catch((error)=>{
            console.log("error!!!:", error)
        })
    }
 
    
   

    const addCatPhoto= () => {
        
        let slideShow=document.querySelector("#slideShow")
        let pic = document.createElement('img')
        // console.log(pic)
        pic.classList.add("mySlides")
        pic.setAttribute('src', cats[i].data.url)
        console.log(pic)
        slideShow.appendChild(pic)

        cats.forEach(element => console.log(element))

        photo0= cats[2]
        console.log(photo0)

    
   createSlideShow()
}


let slideIndex=1
createSlideShow(slideIndex)
function createSlideShow(n){
    let slides = document.querySelectorAll(".mySlides")
    // console.log(slides)
    for (i = 0; i < slides.length; i++) {
    // console.log(slides[i])
  
    slides[i].style.display = "block" 
   
    }
    // if (n > slides.length) {
    //     slideIndex = 1 }
    //     console.log(slideIndex)
    // if (n < 1) {slideIndex = slides.length}
    // console.log(slides.length)
    // slides[slideIndex-1].style.display = "block"
    // console.log(slides[slideIndex-1])
    
} 

     

function plusSlides(n) {
    createSlideShow(slideIndex += n);
  }
  plusSlides()
  