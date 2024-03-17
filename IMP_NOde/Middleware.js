const firstMiddleware = (req, res, next) => {
  console.log("First middleware");
  next(); // Move to the next middleware
};

const secondMiddleware = (req, res, next) => {
  console.log("Second middleware");
  next(); // Move to the next middleware
};

const myMiddleware = (next) => {
  console.log("This is a middleware function");
  // You can perform operations here before passing the request to the next middleware or route handler
  // Call next() to proceed to the next middleware in the chain

  next();
};
myMiddleware(function name(params) {
  console.log("next called this function --");
});

const eerrrrmyMiddleware = (err, req, res, next) => {
  console.log("This is a middleware function");
  console.log("error is -", err);
  // You can perform operations here before passing the request to the next middleware or route handler
  // Call next() to proceed to the next middleware in the chain

  next();
};
