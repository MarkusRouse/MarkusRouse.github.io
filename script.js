function loadImages(){
    const imagesDir = "Resources\\Images";

    fetch(imagesDir)
        .then (response => response.text())
        .then (data => {
            console.log(data)
        })

}
loadImages();