import { useEffect, useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  const [users1, setUsers1] = useState([]);

  const numbers = [1, 2, 3, 4, 5, 6];
  const users = [
    { name: "test user", surname: "something", age: 20 },
    { name: "unknown", surname: "idk", age: 23 },
    { name: "pilot", surname: "yooooo", age: 25 },
    { name: "abort", surname: "testtttiinngg", age: 60 },
  ];

  const DoubledNumbers = (numbers) => {
    const doubledNumbers = numbers.map((num) => num * 2).join(", ");
    return doubledNumbers;
  };

  const UserNames = (users) => {
    const userNames = users.map((user) => user.name).join(", ");
    return userNames;
  };

  const FilteredNumbers = (numbers) => {
    const evenNumbers = numbers.filter((num) => num % 2 === 0).join(", ");
    return evenNumbers;
  };

  const FilteredAges = (users) => {
    const filteredAges = users.filter((num) => num.age >= 25);
    return filteredAges.map((user) => `${user.name} (${user.age})`).join(", ");
  };

  const sumNumbers = (numbers) => {
    const sum = numbers.reduce((total, num) => {
      return total + num;
    }, 20);
    return sum;
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers1(data));
  }, []);

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>
        Numbers = [{numbers}] Doubled Numbers = {DoubledNumbers(numbers)}
      </h1>
      <h1>Usernames = {UserNames(users)}</h1>
      <h1>
        Numbers = [{numbers}] Even Numbers = {FilteredNumbers(numbers)}
      </h1>
      <h1>Users with age greater or equal 25 = {FilteredAges(users)}</h1>
      <h1>Numbers array total = {sumNumbers(numbers)}</h1>
      <h1>
        Users:{" "}
        {users1.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </h1>
    </div>
  );
};
