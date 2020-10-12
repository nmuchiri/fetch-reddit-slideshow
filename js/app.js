
console.log("fired")

const requestUrl ="http://www.reddit.com/search.json?q="


document.addEventListener("DOMContentLoaded", ()=>{
    


    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        form.style.display="none"
        h1.style.display="none"
        description.style.display="none"
        fetchData(requestUrl+input.value)
        addPhoto()  
    })

    // button.addEventListener("click",showSlides)

})

    let data
    let slideIndex=1
    
    const fetchData = (endpoint) => {
        fetch(endpoint)
    
        .then((responseData)=>{
            return responseData.json();
        })
        .then((jsonData)=>{
            console.log("jsonData.results:",jsonData.data.children)
            data = jsonData.data.children
            
            addPhoto()
            
        })
        .catch((error)=>{
            console.log("error!!!:", error)
        })
    }
 
    
//    let pictureArray
   let i

    const addPhoto= () => {

        let pictureArray= data.map(dataObject=>{
            return dataObject.data.url
            
        })
        console.log(pictureArray)
        for(let i=0; i<pictureArray.length; i++){
            let pics= document.createElement("img")
            pics.src = pictureArray[i]
            pics.setAttribute("class", "mySlides")

            while(slideShow.firstChild) {
                slideShow.removeChild(slideShow.firstChild)
             }
            slideShow.appendChild(pics)
            console.log(pics)
            console.log(slideShow)
            pics.style.display="none"
        
            // let slides = document.querySelectorAll(".mySlides")
            // console.log(slides)

            // for (let i = 0; i < slides.length; i += 1) {
            //     slides[i].style.display = "block"

               
            }
            createSlideShow()
        }


createSlideShow(slideIndex)
function createSlideShow(n){
    let slides = document.querySelectorAll(".mySlides")
    console.log(slides)
    for (i = 0; i < slides.length; i++) {
    // console.log(slides[i])
  
    slides[i].style.display = "none" 
   
    }
    if (n > slides.length) {
        slideIndex = 1 }
        console.log(slideIndex)
    if (n < 1) {slideIndex = slides.length}
    console.log(slides.length)

    slides[slideIndex-1].style.display = "block"
    console.log(slides[slideIndex-1])
    
} 

     

function plusSlides() {
    addPhoto()
  }
  plusSlides()
  