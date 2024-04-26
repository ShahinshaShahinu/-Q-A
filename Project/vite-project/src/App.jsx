// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from 'axios'

// function App() {
//   const [data, setdata] = useState();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://course-api.com/react-store-products"
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setdata(data);
//         }

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }

//       try {
//         const response = await axios.get("https://course-api.com/react-store-products");
//         console.log(response, 'dddddddddddddd');
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     }

//     fetchData(); // Call the async function immediately
//   }, []);

//   return (
//     <>
//       <div>
//   <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
//   <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
//     {data?.map((item, index) => (
//       <div key={index} className="bg-white p-4 h-56  shadow-lg rounded">
//         <img className="w-full h-full mb-2" src={item.image} alt={item.name} />
//         <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//       </div>
//     ))}
//   </div>
// </div>

//     </>
//   );
// }

// export default App;

// import { useEffect, useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const countRef = useRef(0);

//   // Create a state variable
//   const [count, setCount] = useState(0);

//   // Update the ref value without causing a re-render
//   const incrementCount = () => {
//     countRef.current += 1;
//     console.log("Ref value:", countRef.current);
//   }

//   useEffect(() => {
//     // This effect runs after every render
//     console.log("State value:", count);
//     console.log('kjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
//   });

//   const buttonListRef = useRef(null);

//   // Event handler to change button background color
//   const handleButtonClick = (event) => {
//     if (event.target.tagName === 'BUTTON') {
//       event.target.classList.toggle('bg-gray-500');
//     }
//   };
//   return (
//     <>
//      <div>
//       <p>State Count: {count}</p>
//       <p>Ref Count: {countRef.current}</p>
//       <button onClick={() => setCount(count + 1)}>Increment State</button>
//       <button className="bg-gray-500"  onClick={incrementCount}>Increment Ref</button>
//     </div>

//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useRef } from "react";
import Hello from "./HELLO";

export function App() {
  const [text, setText] = useState("HELLO");
  const [k, setk] = useState("");

  const btn = ["hello1", "hello2", "hello3"];
  const textRef = btn.map(() => useRef(null)); // Create an array of refs
  const clickFn = function (i) {
    textRef[i].current.innerText = 'hello butt';
  };

  

  return (
    <div className="App">
     

      {btn.map((it, i) => (
        <div key={i} className="flex space-x-3 space-y-3">
          <h1>{it}</h1>
          <button onClick={() => clickFn(i)} className="bg-gray-200  shadow-lg">
            show
          </button>
          <p ref={textRef[i]}></p>
        </div>
      ))}






<h1 onClick={() => setText("hellollllllllll")}>
        {text} ,{k}
      </h1>
      <Hello koko={(d) => setk(d)} text={"parent to child "} />
    </div>
  );
}

export default App;
