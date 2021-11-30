const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  
  rl.question('What\'s an activity you like doing? ', (answer1) => {

    rl.question('What do you listen to while doing that? ', (answer2) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {

          rl.question('Which sport is your absolute favourite? ', (answer5) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {

              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback:. Your name is ${answer.toLowerCase()}. You like to ${answer1.toLowerCase()}. You enjoy listening to ${answer2.toLowerCase()}. Your favourite meal is ${answer3.toLowerCase()}. Your favourite thing to eat for that meal is ${answer4.toLowerCase()}. Your favourite sport is ${answer5.toLowerCase()}. Your superpower is ${answer6.toLowerCase()}.`);
            
              rl.close();
              
            });
          });
        });
      });
    });
});

});