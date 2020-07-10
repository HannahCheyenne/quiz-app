/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the name of the Pirate Lord?',
      answers: [
        'Ramsey Singh',
        'Bad Deal Lindsey',
        'Captain Blake',
        'Captain Adara'
      ],
      correctAnswer: 'Ramsey Singh'
    },
    {
      question: 'Which color Megalodon has the famous nickname “Shrouded Ghost”?',
      answers: [
        'Blue',
        'Green/Yellow',
        'White',
        'Purple'
      ],
      correctAnswer: 'White'
    },
    {
      question: 'Which flag at level 5 lets you see other ships flying emissary flags on the entire map?',
      answers: [
        'Rainbow',
        'Alliance',
        'Jolly Roger',
        'Reaper’s Bones'
      ],
      correctAnswer: 'Reaper’s Bones'
    },
    {
      question: 'Which shanty unlocks the secret entrance to Athena’s Fortune Hideout?',
      answers: [
        'Oh Hail, the Pirate Lord',
        'We Shall Sail Together',
        'Becalmed',
        'Ride of the Valkyries'
      ],
      correctAnswer: 'We Shall Sail Together'
    },
    {
      question: 'Which instrument is not in the game?',
      answers: [
        'Concertina',
        'Hurdy-gurdy',
        'Fiddle',
        'All of the above'
      ],
      correctAnswer: 'Fiddle'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)