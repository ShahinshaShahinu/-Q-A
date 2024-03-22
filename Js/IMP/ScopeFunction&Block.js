function exampleFunction() {
  if (true) {
    var functionScopedVar = "I am function-scoped";
    let blockScopedLet = "I am block-scoped (let)";
    const blockScopedConst = "I am block-scoped (const)";
  }

  // This will work
  console.log(functionScopedVar);

  // This will result in an error because blockScopedLet and blockScopedConst are not visible here
  // console.log(blockScopedLet);
  // console.log(blockScopedConst);
}

exampleFunction();
