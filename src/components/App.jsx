import Profile from "./Profile/Profile";
import userData from "../data/userData.json";
import FriendsList from "./FriendsList/FriendsList";
import friends from "../data/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions.json";
import "./App";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
