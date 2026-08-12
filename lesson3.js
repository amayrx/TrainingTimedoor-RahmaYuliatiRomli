function checkPosition() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    let position;

    if (x > 0 && y > 0) {
        position = "Top Right";
    } 
    else if (x < 0 && y < 0) {
        position = "Bottom Left";
    } 
    else if (x > 0 && y < 0) {
        position = "Bottom Right";
    } 
    else if (x < 0 && y > 0) {
        position = "Top Left";
    } 
    else {
        position = "Middle";
    }

    document.getElementById("result").innerHTML =
        "The player is at: " + position;
}
