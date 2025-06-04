document.getElementById("check-btn").addEventListener("click", function () {
    const inputDiv = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");

    if (!inputDiv) {
        alert("Please enter valid sentence");
        return;
    }

    if (isPalindrome(inputDiv)) {
        result.innerHTML = `${inputDiv} is a palindrome`
    }

    else {
        result.innerHTML = `${inputDiv} is not a palindrome`
    }
})

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}