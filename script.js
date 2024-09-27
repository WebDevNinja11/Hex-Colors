const changebtn = document.getElementById('change');
let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
changebtn.addEventListener('click', function(){
    let h = "#";
    for(let i = 0; i< 6; i++){
        let random = Math.floor(Math.random() * hex.length)
        h += hex[random];
    }
    const text = document.getElementById('text');
    text.style = "color:white; font-size:50px; font-family:sans-serif; display:inline-block; position:relative; left:40%;"
    text.textContent = h;
    return document.body.style.background = h;
})