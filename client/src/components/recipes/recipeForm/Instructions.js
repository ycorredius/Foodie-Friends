import React from "react";

function Instructions(props) {
  const [instructionIndexes, setInstructionIndexes] = React.useState([]);
  const [instructionCounter, setInstructionCounter] = React.useState(0);

  const addInstruction = (props) => {
    setInstructionIndexes((prevInstructionIndexes) => [
      ...prevInstructionIndexes,
      instructionCounter,
    ]);
    setInstructionCounter((prevCounter) => prevCounter + 1);
  };

  const removeInstruction = (index) => () => {
    setInstructionIndexes((prevInstructionIndexes) => [
      ...prevInstructionIndexes.filter((item) => item !== index),
    ]);
    setInstructionCounter((prevCounter) => prevCounter - 1);
  };

  const clearInstructions = () => {
    setInstructionIndexes([]);
    setInstructionCounter(0);
  };
  return (
    <div>
      <div>
        {instructionIndexes.map((index) => {
          const fieldName = `instructions[${index}]`;
          return (
            <fieldset
              name={`recipe[${fieldName}]`}
              key={`recipe[${fieldName}]`}
            >
              <label>
                Step
                <input
                  type="text"
                  name={`recipe[${fieldName}.content]`}
                  ref={props.register}
                  required
                />
              </label>
              <div>
                <button type="button" onClick={removeInstruction(index)}>
                  Remove
                </button>
              </div>
            </fieldset>
          );
        })}
        <div>
          <button type="button" onClick={addInstruction}>
            Add Instruction
          </button>

          <button type="button" onClick={clearInstructions}>
            Clear Instructions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
