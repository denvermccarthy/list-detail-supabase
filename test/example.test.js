// IMPORT MODULES under test here:
import { displayFood } from '../render-utils.js';

const test = QUnit.test;

test('displayFood function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="/details/?id=1"><div><h4>crumpet</h4><img src="/assets/crumpet.jpg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayFood({
        name: 'crumpet',
        id: 1,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
