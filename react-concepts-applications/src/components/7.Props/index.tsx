import React from "react";

const PropElement: React.FC = () => {
const example1 = `import React from "react" 
const Greeting = (props)=>{
return <h1>Hello,{props.name}!</h1>;
};
export default Greeting;

Now we have to import this Greeting component in App component

import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return <Greeting name={"Sid"} />;
};

export default App;`
const example11 = `const UserInfo = ({ name, age }) => {
return (
<div>
<h2>Name: {name}</h2>
<p>Age: {age}</p>
</div>
);
};
export default UserInfo;

Now we have to import this UserInfo Component in App Component.

import React from "react";
import UserInfo from "./UserInfo";

const App = () => {
  return <UserInfo name={"Adi"} age={30} />;
};

export default App;`
const example2=`import React from "react" 
const Welcome = ({ name = "Guest" }) => {
  return <h1>Welcome, {name}!</h1>;
};
export default Welcome;

Now we have to import this Welcome Component in App Component

import React from "react";
import Welcome from "./Welcome";

const App = () => {
  return (
    <>
      <Welcome name="John" />
      <Welcome />  {/* Uses default prop */}
    </>
  );
};

export default App;
`
const example12 = `const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;

Now we have import this List Component in App Component

import React from "react";
import List from "./List";

const App = () => {
  const fruits = ["Apple", "Banana", "Orange"];

  return <List items={fruits} />;
};

export default App;`
const example3 = `Passing an Object as Prop: 
Props can pass objects and extract values using destructuring.

const Profile = ({ user,email }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default Profile;

Now we have to import this Profile Component in App Component.

import React from "react";
import Profile from "./Profile";

const App = () => {
  const userDetails = { name: "Mani Kumar", email: "mani@example.com" };

  return <Profile user={userDetails} />;
};

export default App;`
   return( 
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-red-300 text-gray-800">
            {/* Header */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white py-8 shadow-lg">
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold"> Props</h1>
                <b className="mt-2 text-lg">Learn about props and understand how data is passed to component using props.</b>
                </div>
                </header>
                <main className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-xl mt-8 mb-16">
                            {/* Section 1: what is props*/}
                            <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <b className="mr-2 text-purple-600"> What is Props?</b>
                              </h2>
                              <h5>Props are used to pass data from a parent component to a child component. They are read-only and help mae components reusable by providing dynamic content.</h5>
                              </section>
                              <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                                <h5 className="text-2xl font-extrabold text-purple-600 mb-4">How Props Work</h5>
                                <ol className="list-inside list-disc">
                                    <li>Props are passed as attributes to components.</li>
                                    <li>They are immutable(cannot be modified inside the child component).</li>
                                    <li>Props make components reusable and dynamic by allowing different values to be passed.</li>
                                    <li>Props are passed from parent to child or vice-versa but they cannot be modified inside the other component.</li>
                                </ol>
                              </section>
                              <h5 className="mb-4 text-2xl">Basic Example how props works</h5>
                              <section className="mb-12 bg-gradient-to-l from-purple-50 via-pink-50 to-red-50 p-6 rounded-lg shadow-md">
                                <section className="flex flex-row justify-around">
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <pre>{example1}</pre>
                              </section>
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <h5 className="mb-4">Basic Example how props works by passing multiple props</h5>
                                 <pre>{example11}</pre>
                              </section>
                              </section>
                              <section className="flex flex-row justify-around">
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <h5 className="mb-4">If no prop is passed, a default value can be set using defaultprops.</h5>
                                 <pre>{example2}</pre>
                              </section>
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <h5 className="mb-4">If no prop is passed, a default value can be set using defaultprops.</h5>
                                 <pre>{example12}</pre>
                              </section>
                              </section>
                              <section className="flex flex-row justify-around">
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <h5 className="mb-4">If no prop is passed, a default value can be set using defaultprops.</h5>
                                 <pre>{example3}</pre>
                              </section>
                              <section className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow my-2 ">
                                 <h5 className="mb-4">If no prop is passed, a default value can be set using defaultprops.</h5>
                                 <pre>{example3}</pre>
                              </section>
                              </section>
                              </section>
                </main>
                </div>
   );
}





























































































export default PropElement;