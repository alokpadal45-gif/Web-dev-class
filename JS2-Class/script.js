function checkNumber() {
    let a = document.getElementById("num").value;

    let message = (a > 50) ? "Hello" : "World";

    document.getElementById("result").innerText = message;
}