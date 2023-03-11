const cuadri = document.querySelector(".container")
for (i = 1; i <= 100; i++) {
    let fizz;
    let color;
    if(i % 3 === 0 ) {
        if (i % 15 === 0) {
           fizz = "FizzBuzz";
           color = "red";
        }else{
            fizz = "Fizz";
            color = "yellow";
        }
    } else if (i % 5 === 0){
        fizz = "Buzz";
        color = "green";
    } else {
        fizz = i
        color = "blue"
    }
    console.log(i, fizz);
    cuadri.innerHTML += `<div class="ms-container ${color}"><strong>${fizz}</strong></div>`;
    
}