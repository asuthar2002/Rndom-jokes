let text = document.getElementById("text");

text.addEventListener("click",()=>{
    console.log("clicked")
    getJoke();
})

const getJoke = async ()=>{
    const  url = `https://api.chucknorris.io/jokes/random`;
    const respond = await fetch(url);
    const data = await respond.json();
    text.innerText = data.value;    
    console.log(data);
}
