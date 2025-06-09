const JustSomeExample = (props) => {
  const users = props.users;

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default JustSomeExample;
