import React from "react";
import { FaReact} from "react-icons/fa";

const ReactElements: React.FC = () => {
  const example1 = `
  scope statement variable_name = React.createElement(<Tag_name>,
  {props:Attributes like className,id,etc.},
  <children : InnerChildren>);`
  const example2 = `
  const heading = React.createElement("h1",null,"Hello World");
  ReactDOM.render(heading,document.getElementById("root))`
  const example3 = `
  const div = React.createElement("div","null","This is a div Element");
  ReactDOM.render(div,document.getElementById("div"));`
  const example4 = `
  const headingone =  React.createElement("h2",
  {
   className: "heading",
   style:{
   color:"pink",
   backgroundColor:"blue"}
   },
   "Welcome to react world!!");
   ReactDOM.render(headingone,document.getElementById("root"));`
  const example5 = `
  const buttonElement =  React.createElement("button",
  {
   className: "btn",
   onClick: () => alert("Button Clicked!)
   },
   "Click Me");
   ReactDOM.render(buttonElement,document.getElementById("root"));`
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-red-300 text-gray-800">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold">Create React Elements</h1>
                <b className="mt-2 text-lg">Learn how to create React Elements and understand how it works!</b>
              </div>
            </header>
             {/* Content */}
                  <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-8 mb-16">
                    {/* Section 1: what is ReactElements */}
                    <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                      <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <FaReact className="mr-2 text-purple-600" /><b> What are React Elements?</b>
                      </h2>
                      <p>
                      React Elements are the smallest building blocks of UI. Unlike components,which are more complex,React Elements are plain Javascript objects representing DOM nodes.
                      </p>
                    </section>
                            <section className="mb-12 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg shadow-md">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                              <b className="text-2xl font-extrabold">How To Create React Elements?</b>
                            <h5 className="m-2">To create React Elements it provide some objects and functions using them we will create react elements and then place inside the DOM and dom will display it in UI.</h5>
                             <p>React elements are created using the <a href="https://legacy.reactjs.org/docs/cdn-links.html" target="new"> React.createElement()</a> method. To use it, you need to import React into your file.It will take three arguments that are tag name and attributes or styles and the other is children</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-4">
                              <pre className="text-pink-900">
                                <b>Syntax :</b>
                                {example1}
                              </pre>
                            </div>
                            </section>
                            <section className="mb-12 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg shadow-md">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                  <h3 className="text-2xl font-bold  mb-4"><b>Steps to create React Elements?</b></h3>
                                  <ol className="list-inside list-disc">
                                    <li>Firstly create an html file and add basic code of html.</li>
                                    <li>Add script tag inside the body tag.</li>
                                    <li>Now visit the official document of react <a href="https://legacy.reactjs.org/docs/cdn-links.html" target="new">legacy.reactjs.org</a> and copy those cdn links and wrap inside the script tag </li>
                                    <li>Now create the React Elements using <a href="https://legacy.reactjs.org/docs/hello-world.html">React.createElement</a></li>
                                  </ol>
                                </div>
                                <section className="flex flex-row justify-around">
                                <div className= "mt-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                 <h2 className="text-xl text-violet-900" >Let's create Heading h1 using React </h2>
                                  <pre>{example2}</pre>
                                  <h3>Output :  Hello World</h3>
                                </div>
                                <div className= "mt-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <h2 className="text-xl text-violet-900" >Create div using React </h2>
                                  <pre>{example3}</pre>
                                  <h3>Output : This is a div Element</h3>
                                </div>
                                </section>
                            </section>
                            <section className="mb-12 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg shadow-md">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                  <h3 className="text-xl font-extrabold mb-4">How to pass the second argument to the createElement function</h3>
                                  <p>The second argument in create function is used to pass props to the element.You can pass an object containing properties that define attributes and other properties for the component. </p>
                                  <div className="flex flex-row justify-around">
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-4">
                                       <pre>{example4}</pre>
                                       <h2 className="text-pink-900 bg-blue-400">Output : Welcome to react world!!</h2>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-4">
                                      <pre>{example5}</pre>
                                      <h3 className="mb-4">Output : </h3>
                                      <div>
                                        {
                                          <button onClick={()=>{alert("Button Clicked!")}} className="text-white bg-black">Click Me</button>
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </section>
                            </main>
                            </div>
    );
}




































































































export default ReactElements;