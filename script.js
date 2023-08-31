const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");




const getRandomColor = () => {
    // Generating a random color in hexadecimal format. eg: #5665fe8
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}


const generateGradient = (isRandom) => {
    if(isRandom){ // if random is true, update the color input value with random color
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();

    }
    // creating a gradient string using select menu value with color input values
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    // Copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code copied";
    setTimeout(() => copyBtn.innerText ="Copy Code", 1600);
}



colorInputs.forEach(input => {
    // calling generateGradient function on each input clicks
    input.addEventListener("input",() => generateGradient(false));
});


selectMenu.addEventListener("change",() => generateGradient (false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);