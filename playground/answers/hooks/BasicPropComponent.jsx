import PropTypes from "prop-types";

const BasicPropComponent = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return <p key={user.id}>Greetings fellow human: {user.name}</p>;
      })}
    </div>
  );
};

BasicPropComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BasicPropComponent;
