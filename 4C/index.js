import inquirer from 'inquirer'; // Import the inquirer module
import sillyname from 'sillyname';// Import the sillyname module
import qr from 'qr-image'; // Import the qr-image module
import fs from 'fs'; // Import the fs module
import {randomSuperhero} from 'superheroes';
import { writeFile } from 'fs';

var vname = sillyname();
var sname = randomSuperhero();
inquirer
  .prompt([
    {
        message: "What is your name?:",
        name: "rambiut"
    }
  ])
  .then((answers) => {
    console.log("Hello", answers.rambiut);
    console.log("Your villain name will be",vname);
    console.log("and your superhero name will be The", sname);

    var ravs = qr.image(answers.rambiut, { type: 'png' });
    ravs.pipe(fs.createWriteStream('name.png'));

    var ravs1 = qr.image(vname, { type: 'png' });
    ravs1.pipe(fs.createWriteStream('sillyname.png'));

    var ravs2 = qr.image(sname, { type: 'png' });
    ravs2.pipe(fs.createWriteStream('superheroname.png'));

    const inputs = `
    Name: ${answers.rambiut}
    Villain Name: ${vname}
    Superhero Name: The ${sname}
    `;
    
    writeFile('myhero.txt',inputs,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
    
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


