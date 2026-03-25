let animals = ["cow", "goat", "buffalo"];

animals.splice(1, 1);

animals.splice(1, 0, "horse", "camel");

document.getElementById("output").innerText = animals.join(", ");