let animals = ["cow", "goat"];

animals.splice(1, 0, "horse", "camel");

document.getElementById("output").innerText = animals.join(", ");