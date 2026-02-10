const form=document.getElementById("formInput");
const textInput=document.getElementById("myInput");
const courseInput=document.getElementById("course");
const output=document.getElementById("output");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    // to get user input value
    const name = textInput.value;
    const course = courseInput.value;
    console.log(name);

    //put the name and course value inside the output box
    output.innerText=name+" "+course

});