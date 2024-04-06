import assert from "assert";

import { composeMessage, composeQuestion } from "./prompt";

describe("Test getQuestion ", () => {
  it("getQuestion should return valid question using the config", () => {
    const variable =  {
        "name": "example",
        "prompt": "Please enter example value"
    };
    const question = composeQuestion(variable);

    assert.deepEqual(question, {
        message: 'Please enter example value',
        name: 'example',
        type: 'input'
      });
  });
});

describe("Test composeMessage", () => {
    it("composeMessage should add (optional) in the end of the message", () => {
        const prompt = 'This is optional message question'; 

        const question = composeMessage({prompt, optional: true});
        console.log({question});

        
        assert.equal(question.endsWith('(optional)'), true);
      });
});
