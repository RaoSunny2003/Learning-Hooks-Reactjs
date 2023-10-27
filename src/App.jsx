import { useEffect, useState } from "react";
import { getData } from "./components/Data";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((posts) => setData(posts));
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      {data ? (
        <div className="grid-container">
          {data.map((e) => (
            <div key={e.id} className="grid-item">
              <p key={e.id}>{e.title}</p>
              <img src={e.thumbnailUrl} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <p>No Images</p>
      )}
    </div>
  );
}
