let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

function short() {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    try {
        fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Failed to shorten URL');
            }
        })
        .then(data => {
            shortURL.value = data;
        })
        .catch(error => {
            console.error('Error:', error);
            // Fallback to TinyURL website if request fails
            shortURL.value = `https://tinyurl.com/app/?url=${encodeURIComponent(longURL)}`;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
