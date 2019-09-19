const overlyExcited = () =>
{
    console.log("Hello World!")
}

overlyExcited()

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray)
{

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp.concat(theWordArray[i], " ")

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
console.log(addExcitement(sentence))


// Practice: Some words are more exciting than others
// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let sentence2 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement2(theWordArray){
    let buildMeUp = ""

        for (let i = 0; i < theWordArray.length; i++) {
            /*
                If the current word's place (not index) in the array
                is evenly divisible by 3, add an exclamation point
                to the end of the word and then concatenate it to
                `buildMeUp`.

                Otherwise, just concatenate the word itself.
                i changed to (i + 1) to compensate for 0 being the initial value
            */
                if ((i + 1) % 3 === 0 && i > 0) {
               buildMeUp = buildMeUp.concat(theWordArray[i - 1], "!,", " ")

                // Print buildMeUp to the console
                console.log(buildMeUp)
                } else if ({
                            buildMeUp = buildMeUp.concat(theWordArray[i - 1], " ")

                                })
                                else {

                                buildMeUp = buildMeUp.concat(theWordArray[i - 1], " ")

            }
        }


}


console.log(addExcitement2(sentence2))

// Practice: Function Arguments
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// // I want to use a question mark
// addExcitement(sentence, "?")
// Example output:

// The

// The walrus

// The walrus danced?

// The walrus danced? through

// The walrus danced? through the

// The walrus danced? through the trees?

// The walrus danced? through the trees? in

// etc..