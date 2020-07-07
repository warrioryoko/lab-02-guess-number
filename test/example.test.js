// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers} from '../utils.js';

const test = QUnit.test;

test('it should take a number and compare it against a predetermined number, and return -1 if it is lower', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take a number and compare it against a predetermined number, and return 1 if it is higher', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(20, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take a number and compare it against a predetermined number, and return 0 if it is an exact match', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(15, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});