# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code list the order of console.logs:

```javascript
console.log("Hello")

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") 
  })

console.log("Sup?")
```
hello, sup?, hi

### Question 2

When fetchData is executed what will be console logged?

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()
```

What will be console logged when the following code is run? Why?

promise {pending}
because that's what fetch returns

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()
```

What will be console logged when the following code is run? Why?

{results: Array(1), info: {…}}
info: {seed: "c0279166a82c6575", results: 1, page: 1, version: "1.3"}
results: [{…}]
__proto__: Object

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
```

### Question 3

In your own words: what does asynchronous mean?

it means that there's a block that doesn't stop other things from executing because it gives some promise that it will return something in the future - that the other code blocks don't have to wait for

### Question 4

Write out the request and response cycle. What is its purpose? How does it work?

### Question 5

Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
