
import FriendItem from '../FriendItem/FriendItem';
import styles from './friendsList.module.css';
import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// FriendsList.propTypes = {
//   friends: PropTypes.array.isRequired,
// };

