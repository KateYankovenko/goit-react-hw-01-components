import "./App.css";
import user from "./Profile/user.json";

import Profile from "./Profile/profile";


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
        boxShadow: "rgb(197 232 252) 2px 3px 15px 1px"
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </div>
  );
};

// function App() {
//   return <div className="App">React Page</div>;
// }
// export default App;