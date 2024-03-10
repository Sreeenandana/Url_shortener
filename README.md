
# Shortify

Shortify is a lightweight and easy-to-use URL shortener that allows you to quickly shorten long URLs into concise, shareable links. 





## Demo

Insert gif or link to demo


## Features

- Shorten any long URL with just a click of a button.
- No authentication or API key required. Utilizes the TinyURL service for URL shortening.
- Simple and intuitive user interface.



## Getting Started

To use Shortify, follow these steps:

- Clone the repository to your local machine:
```bash
 git clone https://github.com/Sreeenandana/Url_shortener.git

```
- Open index.html in your web browser.
- Enter the long URL you want to shorten into the input field.
- Click the "Shorten" button.
- Copy the shortened URL from the output field and share it as needed.
    
## API Reference

#### Shortify utilizes the TinyURL API to shorten long URLs. The API endpoint used is



#### Endpoint: https://tinyurl.com/api-create.php

#### HTTP Method: GET

#### Parameters:

url: The long URL to be shortened.

Response: The response is a plain text string containing the shortened URL
## Explanation

The core functionality of Shortify is implemented in the index.html and logic.js files.

- #### index.html : 
Contains the HTML markup for the user interface, including input fields for the long URL and the shortened URL.

- #### logic.js :
Implements the JavaScript code that handles the URL shortening process. It makes a GET request to the TinyURL API endpoint to shorten the provided long URL. If the request is successful, it displays the shortened URL. If the request fails, it provides a fallback option by redirecting users to the TinyURL website.
