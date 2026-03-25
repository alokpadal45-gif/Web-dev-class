window.onload = function() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let newArr = [];

    arr.forEach(function(num) {
        if (num % 2 === 0) {
            newArr.push(num + 3); 
        } else {
            newArr.push(num + 4);
        }
    });

    document.getElementById("original").innerText = arr.join(", ");
    document.getElementById("modified").innerText = newArr.join(", ");

    console.log("Original Array:", arr);
    console.log("Modified Array:", newArr);
};