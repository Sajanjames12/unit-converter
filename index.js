
function calculate() { 

        function reset() {
             inputEl.value = ""
        }

        let inputEl = document.getElementById("inputNumber")

        let formNumber = Number(inputEl.value);

        if (formNumber < 0)  {
               alert("Enter a positive number")

        }  else if (formNumber > 0) {
                let lengthElement = document.getElementById("length-text")
                lengthElement.innerText =  `${formNumber} meters = ${(formNumber * 3.281).toFixed(3)} feet | ${formNumber} feet = ${(formNumber / 3.281).toFixed(3)} meters `;

                let getVolumeElement = document.getElementById("volume-text")
                getVolumeElement.innerText =  `${formNumber} liters = ${(formNumber / 4.546 ).toFixed(3)} gallons | ${formNumber} gallons = ${(formNumber * 4.546).toFixed(3)} liters `;

                let getMassElement = document.getElementById("mass-text")
                getMassElement.innerText =  `${formNumber} kilos = ${(formNumber * 2.205).toFixed(3)} pounds | ${formNumber} pounds = ${(formNumber / 2.205).toFixed(3)} kilos `;

        } else {
                alert("Not a number")
        }

        reset()

}
       


function resize(x) {
     var inputNoOfChar = x.value.length
     if (inputNoOfChar >= 2) {
        var length = inputNoOfChar + "ch";
        x.style.width = length;
     }
}
