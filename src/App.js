import { useEffect, useState } from "react";
import "./index.css";
//yang.li41@centific.com
export default function App() {
  //  console.log(val);
  function getLabels(keyword) {
    const allLabels = ["NextActions", "Someday_Actions", "Costco", "Alexa"];
    const result = allLabels.filter(function (x) {
      return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
    return result;
  }

  // This function mocks the asynchronous API to fetch the label list by keyword.
  // Example:
  //  getLabelsAsync('C').then(function(val) {
  //     console.log(val);
  //  })
  function getLabelsAsync(keyword) {
    const result = getLabels(keyword);
    const delay = Math.random() * 800 + 200; // delay 200~1000ms
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, delay, result);
    });
  }

  const [inputSearch, setInputSearch] = useState("");
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    if (inputSearch.includes("@")) {
      console.log(String);
      const searchItem = inputSearch.slice(inputSearch.indexOf("@") + 1);

      // console.log(searchItem);
      getLabelsAsync(searchItem).then(function (res) {
        console.log(res);
        setDropdownItems(res);
      });
    } else {
      setDropdownItems([]);
    }
  }, [inputSearch]);

  return (
    <div className="App">
      <p>
        Below is an example scenario taken from a to-do list app. Please
        implement a text field control in React.js that can serve this scenario.
      </p>
      <p>
        <h2>Notes:</h2>
        <ul>
          <li>
            You do not need to implement the business logic of a to-do list app.
            the goal is to build a text input field control that activates a
            dropdown selector based on a special symbol ('@' for labels in this
            case).
          </li>
          <li>
            Please use the "<b>Fork</b>" button to start your work, so that you
            could have your private dedicated url. And please send the url back
            to the recruiter once you are done.{" "}
          </li>
          <li>
            Please use one of the two provided functions to get the label list
            by keyword. Do not modify the provided functions. Using the
            asynchronous api correctly is a bonus.
          </li>
          <li>Please implement the control using React.js.</li>
        </ul>
      </p>
      <div>
        <input
          type="text"
          id="inputSearch"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <select id="dropdownItems">
          {dropdownItems.map((items) => {
            return (
              <option value={items} key={items}>
                {items}
              </option>
            );
          })}
        </select>
      </div>
      <img
        src="https://media.giphy.com/media/dtM5LTpHaDniDTee9x/giphy.gif"
        width="580"
      />
    </div>
  );
}
