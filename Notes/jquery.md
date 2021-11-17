# JQuery

## Definition:

- JQuery is a JavaScript Library.
- Basically, everything we do with JQuery can be done with JavaScript. However, JQuery gives us an easier and more compact way of performing the same tasks, hence the "write less, do more" slogan.
- When using JQuery, we need to import it using \<script> tag with 'src' property being either the url to the library or the local folder where the file is.
- Two options (of many others) for JQuery from a CDN: <br>
    src = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.0.min.js" <br>
    src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" 
- The order of imports is important here: import JQuery library before the JavaScript script (since we're using the library <i>in</i> the script, it must be loaded first).
- Note: include \<script> inside the \<head> section <br>


## Some Basics:

- JQuery basically allows us to <i>query</i> HTML elements and perform actions on them.
- <span style="color: green">$</span> is the JQuery object in JavaScript.
- When we use functions from the library, we need to use object notation -> <code>$.post();</code>
- JQuery syntax in general requires us to include a <span style = "color: green">$</span> in front of expressions -> <code>\$(selector).action();</code>
- Keyword <span style="color: green">this</span> can be used to refer to the <i>current</i> element -> element that was <b>queried</b>
- Start script with:
    ```js
    $(document).ready(function() {
        //jQuery methods here
    });
    ```
    OR:
    ```js
    $(function() {
        //jQuery methods here
    });
    ```
- Write JQuery actions inside one of those blocks.
- The Document Ready Event: waits for the document to be ready duh -> equivalent to <code>onload</code> in HTML. <br>
    Basically, it waits for the document to be fully loaded by the browser before executing the instructions in that block.
- This is good practice -> prevents code from running before the document has finished loading (e.g. if we try to hide an element that hasn't yet been created: <b>error</b>) <br>

## Review on Selectors:

1. Simple Selector Forms:
    - Applies to all elements that match the specified one -> action performed by <code>p{}</code> in CSS or <code>\$("p")</code> in JQuery would apply to all \<p> elements in the document. <br>
    Does the same thing as <code> document.getElementByTagName("p");</code> in pure JavaScript.

2. Generic & Class Selectors:
    - Allows us to target group of elements (less repetition).
    - If the HTML element is grouped by class, the action performed applies to all elements that belong to that same class (the elements don't necessarily need to be the same).
    - Use a <span style="color: green">.</span> to represent generic and class selectors.
        ```html
        <h1 class = "courses"><h1>
        <p class = "courses"></p>
        ```
        Actions performed by <code>.courses{}</code> in CSS or <code>\$(".courses")</code> in JQuery would apply to all elements belonging to class <i>courses</i> in the document (in this example, it would affect a \<h1> and a \<p> element). <br>
        Does the same thing as <code>document.getElementsByClassName("courses");</code> in pure JavaScript. <br>

3. ID Selectors:
    - Allows us to target specific elements (applies to one element only, since an ID cannot be duplicated).
    - Use a <span style="color: green">#</span> to represent the aforementioned selector.
        ```html
        <h1 id = "title"></h1>
        ```
        Actions performed by <code>#title{}</code> in CSS or <code>\$("#title")</code> in JQuery would only apply to that one \<h1> element. <br>
        Does the same thing as <code>document.getElementById("title");</code> in pure JavaScript.<br>

4. Universal Selector:
    - Applies to <b>all</b> elements in a document.
    - Fairly useless, no one uses this.
    - Actions performed by <code>\*{}</code> in CSS or <code>$("*")</code> in JQuery applies to <b>everyone</b>. <br>

5. Examples of selectors using attributes:
    - <code>$("p:first")</code> -> selects the first \<p> element
    - <code>$("ul li: first")</code> -> selects the first \<li> element of the first \<ul>
    - <code>$("[href]")</code> -> selects all elements with an href attribute

## Some Methods & Properties:

- html() -> gets <i>or</i> sets the inner html of an element.
    <blockquote>
        Note: notice that in JQuery, we are provided with one method for both getter and setter functions. Depending on the arguments we pass in the method call, the interpreter decides which one should be used. Similar to properties in C#.
    </blockquote> 

- hide() -> hides specified element(s). Similar to changing CSS property 'display' to <i>none</i>. Does <b>not</b> erase element. For more info, check out: https://api.jquery.com/hide/#hide

- show() -> reveals specified element(s). Similar to changing CSS property 'display' to <i>block</i>.

- post() -> Ajax using 'POST' method.

- get() -> Ajax using 'GET' method.
    <blockquote>
        Note for post() and get(): specify url as first parameter.
        Second parameter: request respose from the server -> answers the question "what do I do with the server response?".
    </blockquote> 

- ajax() -> used to perform an ajax request (defines get and post using specific attributes).

- click() -> specifies an action to be performed when an element is clicked.

- dblclick() -> similar to click() but with a double click action.

- mouseenter() -> specifies an action to be performed when the mouse pointer enters an element.

- mouseleave() -> specifies an action to be performed when the mouse pointer leaves an element.

- hover() -> a combination of mouseenter() and mouseleave(). It takes 2 functions as a parameter (when mouse enters and mouse leaves).

- mousedown() -> specifies an action to be performed when the left, middle or right mouse button is pressed.

- mouseup() -> specifies an action to be performed when the left, middle or right mouse button is released.

- on() -> attaches one or more event handlers for an element,
    ```js
    $("p").on("click dblclick mouseenter", function() {
        $(this).hide();
    });
    ```

## Some Examples:

1. Hiding all \<p> elements in the document:
    ```js
    $("p").hide(); 
    ```
2. Hiding element containing 'test' as ID:
    ```js
    $("#test").hide(); 
    ```
3. Hiding element containing 'test' as class:
    ```js
    $(".test").hide(); 
    ```
4. Hiding all \<p> and \<h1> elements in the document:
    ```js
    $("p, h1").hide(); 
    ```
5. Hiding only the current element:
    ```js
    $(this).hide(); 
    ```
6. Whenever we click on a \<p> element, it makes <i>that</i> element disappear:
    ```js
    $("p").click(function() {
        $(this).hide();
    });
    ```
7. Whenever we click on a \<p> element, it makes <b>all</b> \<p> elements disappear:
    ```js
    $("p").click(function() {
        $("p").hide();
    });
    ```
8. get():
     ```js
    $.get("contact.php", function(data) {
        alert("Data: " + data);
    });
    ```
8. post():
     ```js
    $.post("contact.php", {fname: "ronald", lname: "raphael"}, function(result) {
        $("#response").html(result);
    });
    ```
## Considerations:

- Always check documentation and do research on JQuery functions before using them.
- Check https://api.jquery.com/