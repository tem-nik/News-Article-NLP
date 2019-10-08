function checkURL(formText) {
    let urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    if (urlRGEX.test(formText)) {
        return
    } else {
        alert("please enter a valid url");
    }
}

export { checkURL }

