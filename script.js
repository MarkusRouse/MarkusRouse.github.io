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
