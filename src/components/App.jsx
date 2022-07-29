import "./App.css";
import user from "./Profile/user.json";
import data from './Statistcs/data.json';
import friends from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import Profile from "./Profile/profile";
import Statistics from './Statistcs/statistics';
import FriendsList from './FriendsList/friendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        marginLeft: "auto",
        margin: "32px auto 64px",
        alignItems: "center",
        width: "400px",
        padding: "15px",
        borderRadius: "5px",
        boxShadow: "rgb(192 323 525) 3px 6px 17px 1px"
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      </div>
  );
};

// function App() {
//   return <div className="App">React Page</div>;
// }
// export default App;