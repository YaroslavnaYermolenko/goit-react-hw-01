import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendsListItem.module.css";

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={css.freindAvatar} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline ? css.green : css.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
