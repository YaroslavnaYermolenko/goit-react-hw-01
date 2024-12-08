import css from "./Profile.module.css";
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span><strong>{stats.followers}</strong></span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span><strong>{stats.views}</strong></span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span><strong>{stats.likes}</strong></span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};