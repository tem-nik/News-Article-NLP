function checkURL(inputText) {
    let urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    if (urlRGEX.test(inputText)) {
        thisisFunc(formText);
    } else {
        alert("please enter a valid url");
    }
}

export { checkURL }

