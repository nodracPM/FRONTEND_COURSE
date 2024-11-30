document.getElementById("theme-button").addEventListener("click", ()=>{   
    const body = document.body
    body.classList.toggle("light-theme")
    body.classList.toggle("dark-theme");
})