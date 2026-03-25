window.onload = function() {

    let num = [1, 2, 3, 4, 5];


    let newArr = [];

    num.forEach(function(item) {
        newArr.push(item + 5);
    });

    document.getElementById("original").innerText = num.join(", ");
    document.getElementById("new").innerText = newArr.join(", ");

    console.log("Original Array:", num);
    console.log("New Array (+5):", newArr);
};