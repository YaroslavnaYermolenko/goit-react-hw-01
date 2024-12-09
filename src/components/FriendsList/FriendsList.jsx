import FriendsListItem from "./FriendsListItem";
import css from './FriendsList.module.css'
//import PropTypes from "prop-types";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => { return <li className={css.friendItem} key={friend.id}>
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        /></li>;
      })}
    </ul>
  );
}/*
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};*/
