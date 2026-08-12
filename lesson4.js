// 1. Print "I'm Steve" 20 times
for (let i = 1; i <= 20; i++) {
    document.getElementById("nameOutput").innerHTML += "I'm Steve<br>";
}

// 2. Display numbers from 1-20
for (let i = 1; i <= 20; i++) {
    document.getElementById("numberOutput").innerHTML += i + " ";
}

// 3. Display multiples of 5 from 5-100
for (let i = 5; i <= 100; i += 5) {
    document.getElementById("multipleOutput").innerHTML += i + " ";
}
