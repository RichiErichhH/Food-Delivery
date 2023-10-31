const heading=React.createElement("h1",{
    id:"title", },
    "Namasate Everyone from React");

const heading2=React.createElement("h2",{
     id:"title"
     },"Hello this is heading2");

const container=React.createElement("div",{
      id:"container"
     },[heading,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
 // Passing the react element inside the root
root.render(container);