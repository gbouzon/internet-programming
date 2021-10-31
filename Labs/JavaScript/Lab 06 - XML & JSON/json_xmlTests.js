//creating an anonymous object
var person = {fname: "Ronald", lname: "Raphael", car: {make: "Honda", year: 2015}};

/*equivalent of 'person' in XML:
<person>
    <fname>Ronald</fname>
    <lname>Raphael</lname>
    <car>
        <make>Honda</make>
        <year>2015</year>
    </car>
</person>
*/

//As an alternative to XML, JSON: uses objects from JavaScript
//transforming js object into json string
var jsonStr = JSON.stringify(person); //returns a string

//transform json string back into js object
var jsobject = JSON.parse(jsonStr); //returns an object