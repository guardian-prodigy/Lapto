import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  // const people = [
  //   { name: "bob", age: 20, pos: "dev" },
  //   { name: "susy", age: 30, pos: "designer" },
  //   { name: "peter", age: 40, pos: "worker" },
  //   { name: "john", age: 56, pos: "labor-work" },
  // ];
  // const NewPeople = () =>
  //   people.map((item, index) => {
  //     const { name } = item;
  //     console.log(name);
  //     return <h4 key={index}>{name}</h4>;
  //   });
  // const fruits = ["lemon", "pears", "oranges", "lemon", "oranges"];
  // let newFruits = [...new Set(fruits.map((item) => item))];
  // console.log(newFruits);
  // let newPeople = people.filter((item) => item.pos === "worker")
  // let newPeople1 = people.filter((person) => person.age == 20)
  // let newPeople3 = people.find((person) => person.age == 20)
  // let newPeople2 = fruits.find((fruit) => fruit === "lemon")
  // console.log(newPeople1);
  // console.log(newPeople3);
  // console.log(newPeople2);

  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
