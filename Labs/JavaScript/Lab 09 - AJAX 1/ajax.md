# AJAX

## Definition:

- AJAX stands for "Asynchronous JavaScript and XML"
- Although it was meant for JavaScript and XML at first, we can use it with other languages (not only limited to JS)
- At first, we used it for XML. However, it has now expanded and we can now use it with other technologies (e.g. json)
- Allows us to do things asynchronously: doesn't refresh pages with each request - just loads info into the page (=faster)
- basically: when the browser requests the new document from the server, it does not need to 'lock' while it waits for a response (with synchronous, the user can't do anything while the browser waits for the server response)
- So: AJAX is a process of using asynchronous requests from the browser to the server to fetch data, which we then use to update the browser-displayed document.
- Meant to significantly increase the speed of user interactions with Web applications.

## APIs:

- Simply put, APIs are scripts on a server: they perform tasks that we can communicate with. 
- In order to communicate with them, we need to establish a link between the client and the server and <i>that</i> is where AJAX comes in.

## Some Methods & Properties:

- readyState -> contains values 0 to 4. Callbacks indicating request progress (sort of notifications the server sends the sender to indicate progress). State 4 is the one we'll use the most and basically means the response is complete.
- open() -> takes 3 parameters, the third of which is a boolean that indicates whether the communication will be synchronous (false) or asynchronous (true). For the context of this class, it will always be <b>true</b> since we will be working asynchronously with JS.
- send() -> starts the process (sends request for line of communication).

## Considerations:

- Use reqres.in for server requests