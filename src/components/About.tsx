import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";

// interface Todo {
//   title: string;
// }

function About() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Replace this URL with your API endpoint
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Nav />

      <h1>API Data:</h1>
      {data && (
        <div className="m-2 border rounded">
          <h2>Title:</h2>
          <p>{data.title}</p>
          <h2>Body:</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default About;
