function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    checkURL(formText);
}

async function thisisFunc(formText) {
    let response = await fetch('http://localhost:5501/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: {
                url: `${formText}`,
            }
        })
    });
    let newData = await response.json();
    try {
        console.log(newData);
        document.querySelector('.polarity').textContent = newData.polarity;
        document.querySelector('.subjectivity').textContent = newData.subjectivity;
        document.querySelector('.polarity_confidence').textContent = newData.polarity_confidence;
        document.querySelector('.subjectivity_confidence').textContent = newData.subjectivity_confidence;
    } catch (error) {
        console.log(error);
    }

}

export { handleSubmit }
export { thisisFunc }


