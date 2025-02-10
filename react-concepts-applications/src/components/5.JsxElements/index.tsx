import React from "react";
import { FaReact} from "react-icons/fa";

const Element: React.FC = () => {
  const Ruleone = `
                    // Correct
                     return (
                     <div>
                     <h1>Hello</h1>
                     <p>World</p>
                     </div>)`
  const Ruletwo = `                 const h1 = <h1>I Love JSX!</h1>`
  const Rulethree = `
                  const name = "Alice";
                  return <h1>Hello, {name}!</h1>;`
  const Rulefour = `              <div className="container"></div>`
  const myheading = `                  <html>
                  <body>
                   <div id="root"> </div>
                  <script type= "text/babel">
                  function headingCreation() 
                  { 
                  return  (
                  const h1 = <h1>I Love JSx!</h1>
                  );
                  }
                 ReactDOM.render(h1,document.getElementById("root"))
                 </script>
                 </body>
                 </html>`
  const myimage = `                    <html>
                    <body>
                    <div id="root">  </div>
                    <script type="text/babel">
                    function imageCreation()
                    {
                    return (
                    const img = <img src="" alt="" width="" height=""/>
                    );
                    }
                    ReactDOM.render(img,document.getElementById("root"));
                    <script/>
                    <body/>
                    }`
  const mypara = `                    <html>
                    <body>
                    <div id="root">  </div>
                    <script type="text/babel">
                    function paraCreation()
                    {
                    return (
                    const para = <p>JSX is a syntax extension for JavaScript in React that allows developers to write HTML-like code inside JavaScript. </p>
                    );
                    }
                    ReactDOM.render(para,document.getElementById("root"));
                    </script>
                    </body>
                    }`
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-red-300 text-gray-800">
    {/* Header */}
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold">Why JSX?</h1>
        <b className="mt-2 text-lg">Learn how to create JSX Elements and understand how it works!</b>
      </div>
    </header>
     {/* Content */}
          <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-8 mb-16">
            {/* Section 1: what is jsx */}
            <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaReact className="mr-2 text-purple-600" /><b> What is Jsx?</b>
              </h2>
              <p>
              JSX (JavaScript + XML) is a syntax extension to JavaScript commonly used with React to define the structure and appearance of user interfaces. Each JSX element consists of an opening tag, content, and a closing tag  and can include nested elements, attributes, and expressions enclosed in curly braces. 
              </p>
            </section>
             {/* use of jsx*/}
                    <section className="mb-12 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-lg shadow-md">
                      <div >
                        {/* Why jsx */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                          <h3 className="text-2xl font-bold  mb-4"><b>Why do we use JSX ?</b></h3>
                          <ol className="list-decimal list-inside mb-4 space-y-2">
                          <li>JSX looks like HTML, so it’s easy to understand and also you can write JavaScript and HTML together in one file, making your code more organized.</li>
                          <li>JSX makes it simple to create reusable UI blocks.</li>
                          <li>React uses JSX with a Virtual DOM, making UI updates efficient and quick.</li>
                          <li>You can use JavaScript expressions inside braces to display dynamic data in the UI.</li>
                          </ol>
                        </div>
                      </div>
                    </section>
            <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
            <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
               
                 <b>Rules to be followed while Creating JSX Elements </b>
              </h2>
              <p>
              <ol className="list-disc list-inside mb-4 space-y-2">
                <li>JSX Elements must have one root element</li>
                <pre>
                  {Ruleone}
                </pre>
                <li>Every opening tag should have closing tag</li>
                <pre>
                  {
                    Ruletwo
                  }
                </pre>
                <li>Create JSX or React Elements inside the JSFunction and return it.</li>
                <li>Inside JSX code if you want to write JS code then add {"{ }"} inside the JSX and write the JSX and write JS code inside the {"{ }"} </li>
                <pre>
                  {Rulethree}
                </pre>
                <li>class is a reserved keyword in Javascript. use ClassName instead of class</li>
                <pre>
                  {Rulefour}
                </pre>
              </ol>
              </p>
            </section>
           </section>
            <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
              <h5>JSX </h5>
              <h5>
               Example 1  : To create a simple h1 Element
              </h5>
              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                 {
                  <pre>
                 {myheading}
                 </pre>
                 }
              </section>
                 <h5>Example 2: To create image Element</h5>
              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                {
                  <pre>
                    {myimage}
                  </pre>
                }
              </section>
              <h5>
               Example 3  : To create a simple paragraph Element
              </h5>
              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">

                {
                  <pre>
                    {mypara}
                  </pre>
                }
              </section>

            </section>
            </main>
    </div>
  );
};
export default Element;