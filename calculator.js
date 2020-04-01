const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
};


const validateNum = function(num) {
  if (typeof(num) === 'number') {
    return true;
  } else {
    throw 'Wrong data type. That is not a number.';
  }
};


const calculate = function(inputObj) {
  console.log('Hi again! Welcome back to the calculator 🧮🧮🧮 calculating...');
  console.log(`${inputObj.num1} ${inputObj.operation} ${inputObj.num2} \?`);

  try {
    validateNum(inputObj.num1);
    validateNum(inputObj.num2);
  } catch (error) {
    return `Invalid input: ${error}`;
  }

  switch (inputObj.operation) {
    case 'add':
    case '+':
      return inputObj.num1 + inputObj.num2;
    case 'subtract':
    case '-':
      return inputObj.num1 - inputObj.num2;
    case 'multiply':
    case '*':
      return inputObj.num1 * inputObj.num2;
    case 'divide':
    case '/':
      try {
        if (inputObj.num2 === 0) {
          throw 'Sorry you cannot divide by zero.';
        }
      } catch (error) {
        return `Invalid input: ${error}`;
      }
      return inputObj.num1 / inputObj.num2;
    default:
      return 'Sorry that is not a valid operator. This calculator only supports add(+), subtract(-), multiply(*) and divide(/)';
  }
};



console.log(calculate(exampleAdditionInput));