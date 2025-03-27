
function showSection(sectionId) {

    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });

  
    document.getElementById(sectionId).classList.add("active");
}


function reverseString() {
    let str = document.getElementById("stringInput").value;
    let reversed = str.split("").reverse().join("");
    document.getElementById("reversedOutput").innerText = "Reversed: " + reversed;
}


function checkPalindrome() {
    let num = document.getElementById("numberInput").value;
    let reversed = num.split("").reverse().join("");
    let result = num === reversed ? "It's a palindrome!" : "Not a palindrome.";
    document.getElementById("palindromeOutput").innerText = result;
}


function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("billSubtotal").value);
    let tipPercent = parseFloat(document.getElementById("tipPercentage").value);
    let total = subtotal + (subtotal * tipPercent / 100);
    document.getElementById("totalOutput").innerText = "Total: $" + total.toFixed(2);
}


document.addEventListener("DOMContentLoaded", () => {
    showSection('reverseSection');
});
