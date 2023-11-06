import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); //if user doesn't fill input but click submit

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid : valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;

                                          //alternative with useReducer

// import { useReducer } from 'react';

// const initialInputState = {
//   value: '',
//   isTouched: false,
// };

// const inputStateReducer = (state, action) => {
//   if (action.type === 'INPUT') {
//     return { value: action.value, isTouched: state.isTouched };
//   }
//   if (action.type === 'BLUR') {
//     return { isTouched: true, value: state.value };
//   }
//   if (action.type === 'RESET') {
//     return { isTouched: false, value: '' };
//   }
//   return state;
// };

// const useInput = (validateValue) => {
//   const [inputState, dispatch] = useReducer(
//     inputStateReducer,
//     initialInputState
//   );

//   const valueIsValid = validateValue(inputState.value);
//   const hasError = !valueIsValid && inputState.isTouched;

//   const valueChangeHandler = (event) => {
//     dispatch({ type: 'INPUT', value: event.target.value });
//   };

//   const inputBlurHandler = (event) => {
//     dispatch({ type: 'BLUR' });
//   };

//   const reset = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return {
//     value: inputState.value,
//     isValid: valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

// export default useInput;
