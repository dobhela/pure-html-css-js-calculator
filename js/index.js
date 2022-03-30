const addDigit = (digit) => {
    let output = document.querySelector(".value")
    output.value += digit
}

const clr = () => {
    let output = document.querySelector(".value")
    output.value = ""
}

const result = () => {
    let output = document.querySelector(".value")
    let formula = output.value
    try {
        let result = eval(formula)
        output.value = result
    } catch(err) {
        console.warn("Invalid input")
        errAnim(output)
    }
}

//! if ur learning ignore past this line

const errAnim = (element) => {
    element.classList.add('animate__animated', 'animate__headShake');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', 'animate__headShake')
    });
} 
