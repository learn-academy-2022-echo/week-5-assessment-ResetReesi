// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// QUESTION 1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

    // PSUEDOCODE: 🤔
    // INPUT: Create a function called secretMessage takes in string ""
    // OUTPUT: // Expected output: "L4ck4d41s1c4l" // Expected output: "G0bbl3dyg00k" // Expected output: "3cc3ntr1c"
    // CONCLUSION: returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

     describe("secretMessage", () => {
        it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
            const secretCodeWord1 = "Lackadaisical"
             // Expected output: "L4ck4d41s1c4l"
            const secretCodeWord2 = "Gobbledygook"
             // Expected output: "G0bbl3dyg00k"
            const secretCodeWord3 = "Eccentric"
             Expected output: "3cc3ntr1c"
             expect(secretMessage((secretCodeWord1)).toequal(expect.stringContaining("L4ck4d41s1c4l")))
             expect(secretMessage((secretCodeWord1)).toequal(expect.stringContaining("G0bbl3dyg00k")))
             expect(secretMessage((secretCodeWord1)).toequal(expect.stringContaining("Eccentric")))
        })
  })

//   FAIL  ./code-challenges.test.js
//   secretMessage
//     ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

//   ● secretMessage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//     ReferenceError: secretMessage is not defined


// b) Create the function that makes the test pass.

// Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//   PSUEDOCODE 🤔
    //  * create a function that takes in a string
    // * figure out how to .map through the array 
    // * figure out how to switch 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
    // * return the secretCodeWord1, secretCodeWord2, secretCodeWord3

    // ❤️Code that works but not high order function//❤️

const secretCodeWord1 = "Lackadaisical" 
const secretDecoded = secretCodeWord1.replace(/[a]/gi, '4')
const finalCoded = secretDecoded.replace(/[i]/gi, '1')

const secretMessage = () => {
        return secretDecoded
};

console.log(finalCoded());


// 💔tried to do a higer Order functions but I cant seem to fugure out why its not working//💔 🤔


let swapletters = a=4, e=3, i=2, o=0


const secretMessage = (array) => {
 return secretCodeWord1.replace(/[aeiou]/gi, "4" )

}
return  secretCodeWord1

console.log(secretMessage(secretCodeWord1))
// // console.log(secretMessage(secretCodeWord2))
// // console.log(secretMessage(secretCodeWord1))



// QUESTION 2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

    // PUSEDOCODE
    //  INPUT: Create a function called wordleGame akes in an array of words and a single letter
    // OUTPUT: // // Expected output: ["Mango", "Apricot", "Peach"], // // Expected output: ["Cherry", "Blueberry", "Peach"]
    // CONCLUSION:

    describe("wordlegame", () => {
     it("takes in an array of words and a single letter", () => {
       const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]  
       const letterA = "a"
           // Expected output: ["Mango", "Apricot", "Peach"]
       const letterE = "e"
         // Expected output: ["Cherry", "Blueberry", "Peach"]
         expect(Wordlegame(letterA)).toequal(expect.arraycontaining(["Mango", "Apricot", "Peach"]))
         expect(Wordlegame(letterA)).toequal(expect.arraycontaining(["Cherry", "Blueberry", "Peach"]))
     })

    })

    // FAIL  ./code-challenges.test.js
    // Wordlegame
    //   ✕ takes in an array of words and a single letter (1 ms)
  
    // ● Wordlegame › takes in an array of words and a single letter
  
    //   ReferenceError: Wordlegame is not defined
  



// b) Create the function that makes the test pass.

// Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// const letterE = "e"
// // const letterA = "a"
// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

         // PUSEDOCODE 🤔
        // * Create a function called matches that will take letterE, letterA, and fruitArray
        // * Filter through the array to determine whether the user letter or word matches the words in the array

    //   This was a hard one 🥹.. 💔 (still borken any reason why?) *also is concole.log needed if you run yarn jest.

const wordleGame = (value) => {

  return array.filter((vale) => 
    value.tolowercase().includes(variable))
 }

console.log(wordleGame())



// QUESTION 3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("GamePoker", () => {
 it('takes in an array of 5 numbers and determines whether or not the array is a “full house', () => {
    const hand1 = [5, 5, 5, 3, 3]
    //    Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    //   Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    //  Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    //  Expected output: true
expect(GamePoker(hand1)).toequal(expect.(true))
expect(GamePoker(hand2)).toequal(expect.(false))
expect(GamePoker(hand3)).toequal(expect.(false))
expect(GamePoker(hand4)).toequal(expect.(true))

    })
})


// FAIL  ./code-challenges.test.js
// thePokerGame
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house

// ● thePokerGame › takes in an array of 5 numbers and determines whether or not the array is a “full house

//   ReferenceError: theGamePoker is not defined




// b) Create the function that makes the test pass.

 
         // PSUEDOCODE
        //  * create an function that takes in an array of 5 numbers
        //  create a for loop that will iterate over the array to find if the array is a full house
        //  create a if statment to determine if the array matches a full house or not.
        // use the .splice method to isolate the first number and then check that number agains the i. 
        // increment by one at the index of I and splice it aGAIN to see if those two numberS match
        // return a boolean of true or false


//   Working with out the describe statment 🥹.  Please let me know where I messed up at so I dont make the same mistake again. 

        const GamePoker = hand4=> {
           const drawnCard = arr.slice();
           for(let i = 0; i < arr.length; ){
              const cardNum = drawnCard.splice(i, 1)[0];
              if(drawnCard.includes(cardNum)){
                 drawnCard.splice(drawnCard.indexOf(cardNum), 1);
                 if(drawnCard.includes(cardNum)){
                    return true;
                 }
              }else{
                 i++;
              }
           };
           return false;
        };
        // console.log(thePokerGame(hand1));
       

