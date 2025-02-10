import React from "react";
import { FaReact} from "react-icons/fa";

const Component: React.FC = () => {
  const example1 = `function FunctionName(){
                    return //code block;
                    };`
  const example2 = `<html>
<body>
div id="root"></div>
<script type="text/babel">
function createImage(){
return (
<img src="https://url.com" alt="display text" width="" height=""/>
)}
ReactDOM.render(CreateImage(),document.getElementById("root"));
</script>
</body>
</html>`
                    
  const example3 = `<html>
<body>
<div id="root"></div>
<script type="text/babel">
function createh2(title){
return (
<h1>{title}</h2>
 )}
ReactDOM.render(createh2("ReactJS"),document.getElementById("root"));
</script>
</body>
</html>`
    const example4 = `<html>
<body>
<div id="root"></div>
<script type="text/babel">
function UserInfo(){
return (
<h1>Name : John</h2>
<h3>Role : Developer</h3>
)}
ReactDOM.render(<UserInfo/>,document.getElementById("root"))
</script>
</body>
</html>`
    const example5 = `<html>
<body>
<div id="root"></div>
<script type="text/babel">
function Greeting(name){
return (
<h1>Hello {name}! welcome to ReactJS world! </h1>
)}
ReactDOM.render(<UserInformation name={"Raj"}/>,document.getElementById("root"));
</script>
</body>
</html>`
    const example6 =`            import {Component} from 'react'
            class Class_Name extends Component 
            //code
            }`
    const example7 = `import {Component} from 'react' 
class User extends Component {
render() {
return(
<div>
<h2>Class Component</h2>
<p>Class components are JavaScript classes that extend the React.Component</p>
</div>
);
}
}`
    const example8 = `import {Component} from 'react' 
class Greet extends Component {
render() {
return(
<div>
<h2>Welcome to ReactJS!!!</h2>
<img src="https://url.com" alt="image displayed" width="" height=""/>
</div>
);
}
}`
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-red-300 text-gray-800">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold"> Components and Its Types</h1>
            <b className="mt-2 text-lg">Learn different types of components and understand where it is used.</b>
            </div>
            </header>
            <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-8 mb-16">
                        {/* Section 1: what is component */}
                        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                          <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaReact className="mr-2 text-purple-600" /><b> What is Component?</b>
                          </h2>
                          <p>A component in react is a reusable piece of code that defines part of the UI. Components make it easy to build and maintain large applications by breaking them into smaller,independent pieces making the UI modular and maintainable.</p>
                          <p>Each component is like a function that returns JSX and can have its own state and logic.</p>
                          <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                          <h5>There are two types of components.</h5>
                          <h6>1. Functional Component</h6>
                          <h6>2. Class Component</h6>
                         </section>
                         </section>
                         <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                         <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                          <p className="text-2xl font-semibold mb-4 flex items-center"> <b>1. Functional Component :</b></p>
                          <p>A Functional Component in react is a javascript function that returns JSX. It is a simple,reusable unit that helps build react applications.  </p>
                          <h5 className="mb-4">Functional Component take only one parameter which is object type</h5>
                          <ol className="list-disc list-inside mb-4 space-y-2">
                           <li>Props are properties of component. Receives data via props</li>
                           <li>Returns JSX to define the UI</li>
                           <li>Uses Hooks for state & life cycle management.</li>
                           <li>stateless, represented as functions.</li>
                           </ol>
                           <h5 className="text-2xl text-pink-900">Syntax to define functional component</h5>
                           <section className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                            <pre>{example1}</pre>
                           </section>
                           <h4>In two ways functional component can be declared they are old approach and new approach.Example to define Functional component in old approach.</h4>
                           <b className="text-xl">Creating functional component using old Approach</b>
                           <section className="flex flex-row justify-between">
                           <section className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                             <h3>Creating simple image functional component </h3>
                              <pre>{example2}</pre>
                              <h3> Output : Image will be displayed</h3> 
                            </section>
                            <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md"> 
                              <h3>Creating a functional component by passing parameters</h3>
                              <pre>{example3}</pre>
                              <h3>Output : "ReactJS"</h3>
                            </section>
                            </section>
                            <section className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                             <b className="text-xl mb-4">Creating functional component in new approach</b>
                             <p>The input to functional component can be passed in the form of key-value pair.we can pass any data as a attributes so they will store like properties in the parameter is an object name.</p><p>If we are calling the function in new approach and then arguments are passed as attributes so they will store like properties in the parameter is an object name.</p>
                             </section>
                             <section className="flex justify-between">
                             <section className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                             <h5>Creating functional component </h5>
                             <pre>{example4}</pre>
                             <h3>Output : Name : John</h3>
                             <h3>Role : Developer</h3>
                             </section>
                             <section className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                             <h5>Creating functional component by passing attributes.</h5>
                             <pre>{example5}</pre>
                             <h3>Output : Hello Raj! welcome to ReactJS world!</h3>
                             </section>
                             </section> 
                         </section>
                        </section>
                        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                        <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                        <b className="text-2xl">2.Class Component : </b>
                        <h5 className="mt-4">A Class Component are javascript classes that extended the React Component class. They allow you to manage state and handle lifecycle methods,providing a way create dynamic and interactive UI elements.</h5>
                        <h5>If you want to create UI inside class component then you have to override render() which coming from react and inside this we can add our code </h5>
                        <h5>render() should return a single React element or null.</h5>
                        </section> 
                        <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                          <h5 className="text-xl mb-4">When to use Class Components?</h5>
                          <ol className="list-disc list-inside mb-4 space-y-2">
                            <li>When managing complex state logic.</li>
                            <li>When needing lifecycle methods for tasks like API calls</li>
                            <li>In older projects that haven't adopted React Hooks. </li>
                          </ol>
                        </section>
                        <h5 className="text-2xl text-pink-800">Syntax to define class component</h5>
                        <section  className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                         <pre>{example6}</pre>
                        </section>
                        <section className="flex justify-between">
                        <section  className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                         <h5>Creating class component</h5>
                         <pre>{example7}</pre>
                         <h3>Output : Class Component</h3>
                         <h3>Class components are Javascript classes that extend the React.Component</h3>
                        </section>
                        <section  className="mb-8 bg-gradient-to-l from-purple-50 via-pink-50 to-green-50 p-6 rounded-lg shadow-md">
                        <h5>Creating class component</h5>
                         <pre>{example8}</pre>
                         <h3>Output : Welcome to ReactJS!!!</h3>
                         <h3>Image is displayed</h3>
                        </section>
                        </section>
                        </section>
                        <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                        <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                        <b className="text-2xl mb-8">Purpose : </b><br/>
                         <b className="mt-4">Reusability : </b><h5>Break down the application into smaller, manageable pieces.</h5>
                         <b>Maintainability : </b><br/>
                         <h5>Easier to read,debug, and test.</h5>
                         <b>Seperation of Concerns : </b> <br/>
                         <h5>Easier to read,debug, and test.</h5>
                        </section>
                        </section>
            </main>
          </div> 
    )
}








































export default Component;