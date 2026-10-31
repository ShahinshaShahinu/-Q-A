async function fetchData() {
  
    const response = await fetch("https://course-api.com/react-store-products");
    
    console.log(await response.json());
 
}

fetchData();
   