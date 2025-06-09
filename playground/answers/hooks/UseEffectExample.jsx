import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  const handelClearItems = () => {
    setItems([]);
  };

  return (
    <>
      <div>
        <div>
          <h2>useEffect()</h2>
        </div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <button onClick={handelClearItems}>Clear</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default UseEffectExample;
