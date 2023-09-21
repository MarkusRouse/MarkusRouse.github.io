const imageFile = document.getElementById("imageFile");
const addImageButton = document.getElementById("addImageButton");

addImageButton.addEventListener("click", () =>{
    localStorage.setItem (`Image${imageFile.name}`,imageFile.value)
})
