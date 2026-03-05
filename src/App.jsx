import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("https://www.dbooks.org/api/recent")
      .then((res) => res.json())
      .then((data) => console.log(data));
  } , []);

  return <div>App component</div>;
}
