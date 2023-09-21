const imageFile = document.getElementById("imageFile");
const addImageButton = document.getElementById("addImageButton");
let imageId = 0;

addImageButton.addEventListener("click", () =>{
    console.log(imageFile.values)
})

function addImage(event){
    localStorage.setItem (`Image${imageId}`,imageFile.files[0])
    imageId++;
}

function loadImages(){

}

let images = allStorage();
console.log(images);


function allStorage() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}
