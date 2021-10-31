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

### Some More Info:
 
- Cookies work in name-value pairs (name: value duh)
- By default, a cookie will die as soon as the browser/website is closed (unless specified otherwise).
- Only allowed one cookie per website

### Properties & Methods:

- do this laters pls.

### Limitations: 
 
- Always do checks and verifications before dealing with cookies (basically some type of exception handling is needed)
- We don't know what option our client will choose (meaning they could choose from a panoply of browser options/version, they could have their cookies disabled, etc.)
- Make sure to make your code work no matter what - think of exceptional situations and possible errors (may lead to website crashing or not working at all).

### Considerations:

- Always delete the previous cookie when testing in the same file/website, so we don't get corrupted info that breaks our code. thanks.