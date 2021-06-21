const {form} = document.forms;

const getFormValues = function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://fe-student-api.herokuapp.com/api/file', {
        method: 'POST',
        body: formData,
        header: {
            'Content-type': 'multipart/form-data',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

form.addEventListener('submit', getFormValues)