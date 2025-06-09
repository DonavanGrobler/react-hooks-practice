import PropTypes from "prop-types";

const BasicPropComponent = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <p key={user.name}>Greetings fellow human: {user.name}</p>;
      })}
    </div>
  );
};

BasicPropComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BasicPropComponent;
