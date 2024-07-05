const BasicPropComponent = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <p>Greetings fellow human: {user.name}</p>;
      })}
    </div>
  );
};

export default BasicPropComponent;
