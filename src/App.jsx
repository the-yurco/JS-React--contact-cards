import { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Han",
  //     email: "jenny.han@notreal.com",
  //     age: 25
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Paul Jones",
  //     email: "paul.jones@notreal.com",
  //     age: 33
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Peter Pan",
  //     email: "peter.pan@notreal.com",
  //     age: 40
  //   }
  // ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  //! map function => object, position
  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
}

export default App;
