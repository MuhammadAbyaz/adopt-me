import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Tommy",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Mano Billi",
//       breed: "Karachi wali",
//     }),
//     React.createElement(Pet, {
//       animal: "Rat",
//       name: "Jerry",
//       breed: "Gutter wala",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
