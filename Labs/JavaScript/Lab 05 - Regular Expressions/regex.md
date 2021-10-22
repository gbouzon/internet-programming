# Regular Expressions

## 1. Uses of Regex:

- To determine validity of entries that are put into our form
- Password restriction
- Develop patterns to match specified text

## 2. Examples of Regular Expressions:

    a. Phone numbers:
        Restrictions: 
        - Must have 3 digit area code at the beginning
        - Area code must start and finish with ()
        - Area code cannot start with 0, 1 or 9
        - Must be 10 digits long
        - First number after area code may not be 0, 1 or 9
        - A dash must separate the last 4 numbers from the numbers that precede it

        Regex: \([2-8]\d\d\)[2-8]\d\d-\d\d\d\d

    b. Email addresses:
        Format: uname@domain.com
        Restrictions:
        - Must contain a @
        - Must contain an extension (in this case, we're taking .com)
        - uname may be composed of letters and/or numbers
        - uname and domain must start with a letter
        - uname is limited to a range of {6, 16}
        - domain is limited to a range of {2, 64}

        Regex: [a-zA-Z][a-zA-Z0-9]{5,15}@[a-zA-Z]{2,64}\.com


## 3. Special Characters & Wildcards:

- <span style="color: green">{}</span> -> defines a size range. Example: <code>[a-z]{6}</code> means we have 6 lowercase letters
- <span style="color: green">[]</span> -> defines possibilities. Example: <code>[a-zA-Z0-9]</code> means we have any letter or number
- <span style="color: green">^</span> -> defines NOT (!) operator. Example: <code>[^abc]</code> matches any character EXCEPT for a, b,c (note that we're using the word <i>character</i> and not letter or digit)
- <span style="color: green">-</span> -> represents the word <i>to</i>, mainly used to define a range. Example: <code>[2-9]</code> matches any digit between 2 and 9 
- <span style="color: green">* (Kleene Star)</span> -> matches 0 or more repetitions of the previous character. Example: <code>\d*</code> accepts anything (including nothing). \* are a great option for when we need a character to be either optional or indefinitely repeated.
- <span style="color: green">+ (Kleene Plus)</span> -> matches 1 or more repetitions of the previous character. Example: <code>\d+</code> unlike \*, empty strings are <b>not</b> accepted here. \+ are a great option for when we need a character to be present at least once while being able to be repeated indefinitely.
- <span style="color: green">? </span> -> defines one instance of a character as <b>optional</b> (not related to cardinality). Example: <code>ab?c</code> where b is an optional character whilst a and c <b>must</b> be present.
- <span style="color: green">.</span> -> represents any character (note the use of the word <i>character</i> instead of word or digit).
- <span style="color: green">\w </span> -> represents all letters, number and underscore: <code>[a-zA-Z0-9_]</code>
- <span style="color: green">^</span> -> used at the beginning of a regex means the pattern <b>must</b> start <i>this</i> way (whatever succeeds it).
- <span style="color: green">$</span> -> used at the end of a regex means the pattern <b>must</b> end <i>this</i> way (whatever preceeds it).
- Using ^ at the begining and \$ at the end is how we force the entire content of our string to be a complete match to our regex. Example: <code>^[a-z]$</code> means our <b>whole</b> string will be one lowercase letter.
- <span style="color: green">|</span> -> the pipe represents the logical operator <i>OR</i>. Example: <code>\.c(om|a)</code>, in a domain can accept .com <i>OR</i> .ca

## 4. Match Groups:

- Defines a subpattern by using <span style="color: green">()</span>
- Example: <code>((\.qc)? \.ca | \.com))</code>, allows for .qc.ca OR .ca OR .com

## 5. RegEx Object in JavaScript:

- In JS, regex is an object that describes a pattern of characters.
- Methods <span style="color: green">exec()</span> returns the first match and <span style="color: green">test()</span> returns true <i>if</i> it finds a match

Example:

    var str = "The best things in life are free"; 
    var pattern = new RegExp("e"); 
    var rest = pattern.exec(str); 

## 6. Considerations:

- <b>Always</b> pay attention to wildcards in your regex.
- Test your code with nonsense, meaning <i>un</i>expected cases.
- Use <a href = "https://regex101.com/">Regex 101</a> for testing