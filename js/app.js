
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
        createSlideShow() 
    })

    

})

    let data
    let slideIndex=1
    let pictureArray
    
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
 


    const addPhoto= () => {
        
        pictureArray= data.map(dataObject=>{
            return dataObject.data.thumbnail 
        })
        for(let i=0; i<pictureArray.length; i++){
            let pics= document.createElement("img")
            pics.src = pictureArray[i]
            pics.setAttribute("class", "mySlides")

            slideShow.appendChild(pics)
            pics.style.display="none"
        }

        createSlideShow()
    }

    const createSlideShow = ()=>{
        let i=0
        let pictures
        pictures = slideShow.children
        console.log(slideShow.children)
        
            let t= setInterval(function(){
                pictures[i].style.display = "none"
                console.log(pictures[i])
                if (i+1 < pictures.length) {
                    i++;
                }
                else {
                    i = 0
                }
                pictures[i].style.display = "inline-block"
            }, 3000)
    
            function stopSlides() {
                clearInterval(t)
                pictureArray=[]
                console.log(pictureArray)
                input.value=""
                pictures[i].style.display="none"
            while(slideShow.firstChild)
                slideShow.firstChild.remove()
            }

            button.addEventListener("click",stopSlides)
        }  




//   stopSlides()
  