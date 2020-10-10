
console.log("fired")

const requestUrl ="http://www.reddit.com/search.json?q=moon"



document.addEventListener("DOMContentLoaded", ()=>{
    


    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        form.style.display="none"
        h1.style.display="none"
        description.style.display="none"
        fetchCats(requestUrl+input.value)
    })

    // button.addEventListener("click",showSlides)

})

    
    
    const fetchCats = (endpoint) => {
        fetch(endpoint)
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            console.log("jsonData.results:",jsonData.data.children)
            let cats = jsonData.data.children
                    addCatPhoto(cats)
            
        })
        .catch((error)=>{
            console.log("error!!!:", error)
        })
    }
 
    

    const addCatPhoto= (cats) => {
         for(let i = 0; i < cats.length; i++) {
        // console.log(cats[i])
        let slideShow=document.querySelector("#slideShow")
        // console.log(slideShow)
        let pic = document.createElement('img')
        // console.log(pic)
        pic.classList.add("mySlides")
        pic.setAttribute('src', cats[i].data.thumbnail)
        slideShow.appendChild(pic)
 
    }
    
   createSlideShow()
}


let slideIndex=1
const createSlideShow=(n)=>{
    let slides = document.querySelectorAll(".mySlides")
    // console.log(slides)
    for (i = 0; i < slides.length; i++) {
    // console.log(slides[i])
  
    slides[i].style.display = "none" 
    console.log(slides[i])    
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block"
    console.log(slides[slideIndex-1])
} 

     

// function plusSlides(n) {
//     createSlideShow(slideIndex += n);
//   }

//   plusSlides()
//   function currentSlide(n) {
//     createSlideShow(slideIndex = n);
//   }
//   currentSlide()