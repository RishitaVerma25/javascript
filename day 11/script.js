// function handleClick(){
//     const heading =  document.querySelector("h1")
//     heading.style.color = "tomato";
    
//     heading.textContent = "New Heading ";
// }

// function handleClick(){

//     const btn = document.getElementById("btn");
//     const span =  document.createElement("span");
//     span.textContent = "Span";
//     const image =  document.createElement("img");
//     image.src = "https://peppapigworld.co.uk/cdn/shop/files/banner-family-hub-peppa-pig_9eeeded8-532c-415d-b536-65277db33261.png?v=1636018816&width=520";
//     image.alt = "K.R Mnagalam University";
//     btn.after(span);
//     span.after(image);

// }

const btn =  document.getElementById("btn")
btn.addEventListener("click", () => {
    
    const span =  document.createElement("span");
    span.textContent = "Span";
    const image =  document.createElement("img");
    image.src = "https://peppapigworld.co.uk/cdn/shop/files/banner-family-hub-peppa-pig_9eeeded8-532c-415d-b536-65277db33261.png?v=1636018816&width=520";
    image.alt = "K.R Mnagalam University";
    btn.after(span);
    span.after(image);
})