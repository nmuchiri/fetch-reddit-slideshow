
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
 
    
   let pics=[]
   let i

    const addCatPhoto= () => {
        
        let slideShow=document.querySelector("#slideShow")
        let pic0 = document.createElement('img')
        // console.log(pic)
        // pic.classList.add("mySlides")
        cats.forEach(element => console.log(element))
    
            // console.log(cats[i].data.thumbnail)
             
        pic0.setAttribute('src', cats[0].data.thumbnail)
        console.log(pic0)
        slideShow.appendChild(pic0)

        let pic1 = document.createElement('img')
        pic1.setAttribute('src', cats[1].data.thumbnail)
        slideShow.appendChild(pic1)
    
        // pic.setAttribute('src', cats[i].data.thumbnail)
        // console.log(pic)
        // slideShow.appendChild(pic)

    
//    createSlideShow()
}

function createSlideShow(){
    addCatPhoto()
    document.slide.src= pics[i]
    if(i < pics.length-1){
        i++
    }else{
        i=0
    }
}
setTimeout("createSlideShow()", 3000)


// let slideIndex=1
// createSlideShow(slideIndex)
// function createSlideShow(n){
//     let slides = document.querySelectorAll(".mySlides")
//     console.log(slides)
//     for (i = 0; i < slides.length; i++) {
//     // console.log(slides[i])
  
//     slides[i].style.display = "block" 
   
//     }
//     if (n > slides.length) {
//         slideIndex = 1 }
//         console.log(slideIndex)
//     if (n < 1) {slideIndex = slides.length}
//     console.log(slides.length)
//     slides[slideIndex-1].style.display = "block"
//     console.log(slides[slideIndex-1])
    
// } 

     

function plusSlides() {
    createSlideShow
  }
  plusSlides()
  