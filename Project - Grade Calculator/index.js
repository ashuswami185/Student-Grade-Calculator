


function cal() {

    let maths = document.querySelector(".maths-input").value;
    let science = document.querySelector(".science-input").value;
    let english = document.querySelector(".english-input").value;
    let hindi = document.querySelector(".hindi-input").value;

    let totalmarks = ((parseFloat(maths) +
        parseFloat(science) + parseFloat(english) + parseFloat(hindi)) / 400) * 100;

        




    if (totalmarks > 80 && totalmarks < 100) {
        document.querySelector("h1").innerHTML = "Grade A";
    }
    else if (totalmarks > 60 && totalmarks < 80) {
        document.querySelector("h1").innerHTML = "Grade B";
    }
    else if (totalmarks > 40 && totalmarks < 60) {
        document.querySelector("h1").innerHTML = "Grade C";
    }
    else if (totalmarks > 20 && totalmarks < 40) {
        document.querySelector("h1").innerHTML = "Grade D";
    }
    else if ( totalmarks <20 ){
        document.querySelector("h1").innerHTML = "Grade F";
    }
    else{
        document.querySelector("h1").innerHTML = "maje mat le gandu ";
    }
    document.querySelector("button").innerHTML = totalmarks + "%";
    

}


document.querySelector("button").addEventListener("click", function () {
    cal();

});















