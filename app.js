const video = document.querySelector("video")

document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        console.log(" >> This window is hidden")
        video.pause()
    }
    else{
        console.log(" >> This window is visible")
        video.play()
    }
})