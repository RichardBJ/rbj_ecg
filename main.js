// Handle data uploading
upload_button = document.querySelector('#upload_data');
input_data = document.querySelector('#input_data');
analyse_button = document.querySelector('#analyse_button');
Sample_Interval = document.querySelector('#Sample_Interval');
Species = document.querySelector('#Species');

upload_button.addEventListener('change', function(e) {

    // Load a new FileReader
    const reader = new FileReader()
    reader.readAsText(e.target.files[0])

    // On load, store the data as text on the page
    // There's probably a better way to do this!
    reader.onload = function() {
        input_data.textContent = reader.result.replace(/\n/g, ',')
        upload_button.hidden = true
        analyse_button.hidden = false   
    }
    reader.onerror = function() {
        console.error(reader.error)
    }
})

// Handle data downloading
download_button = document.querySelector('#download_data');

download_button.addEventListener('click', function(e) {
    text = document.querySelector("#signals").innerText

    if (text != ""){
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "output.csv");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
})

