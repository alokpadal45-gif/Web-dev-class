const boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {

    if (i == 0) {
        boxes[i].innerText = "This is Box 1";
    }
}