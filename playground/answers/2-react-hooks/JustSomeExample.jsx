import PropTypes from "prop-types";

const JustSomeExample = (props) => {
  const users = props.users;

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.name}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

JustSomeExample.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JustSomeExample;
