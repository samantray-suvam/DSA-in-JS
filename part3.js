// // sum of n natural numbers
// let input = Number(prompt("Enter the sum required"));

// if (isNaN(input)) {
//   console.log("Invalid Input");
// } else {
//   if (input > 0) {
//     console.log("yup");
//   } else console.log("value should be +ve");
// }
import { NumberInput } from "@ark-ui/react";

export const NumberInput = () => {
  return (
    <>
      <numberInput.Root>
        <NumberInput.Label />
        <NumberInput.Scrubber />
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
          <NumberInput.DecrementTrigger />
        </NumberInput.Control>
      </numberInput.Root>
    </>
  );
};
