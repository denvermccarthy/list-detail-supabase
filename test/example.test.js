// IMPORT MODULES under test here:
import { displayFood, renderDetails } from '../render-utils.js';

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

test('renderDetails function test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="https://www.google.com/maps/search/crumpet/"><div class="detail-card"><h2>crumpet</h2><img src="/assets/crumpet.jpg"><p class="detail-tier">Tier: f</p><p class="detail-desc">crumpets innit</p></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDetails({
        id: 1,
        name: 'crumpet',
        tier: 'f',
        about: 'crumpets innit'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
