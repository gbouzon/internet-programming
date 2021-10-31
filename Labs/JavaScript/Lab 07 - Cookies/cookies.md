# Cookies

## Cookies vs Sessions:

### Definitions:

- Information about a given website saved in our own computer is called a <b>cookie</b>.
- Information about a given website saved in the website server is called a <b>session</b>.

### Advantages:

<p>
    Cookies are easier than sessions to store (people are saving just one piece of information as compared to a server saving one piece of information for billions of people), which is why we give advantage to cookies rather than sessions where possible.
</p>
<p>
    However, since cookies are stored in my own computer, I can easily modify it. Which is why, when dealing with sensitive information, we prefer to use sessions.
</p>

### Some History:

<p>
    Cookies were created in order to keep track of webserver requests (these were
    lost as soon as a request was fulfilled).
    When cookies were created, they gave us the ability to write files anywhere. Because of that, viruses became very common since we could manipulate a user's computer using cookies.
    Nowadays, cookies are managed by the browser; meaning that it's the browser
    that gives access and takes access to cookies depending on the website we're in -> Website A can only manage the cookies for Website A.
</p>

### Properties & Methods:

- Cookies work in name-value pairs (name: value duh)
- By default a cookie will die as soon as the browser/website is closed.
