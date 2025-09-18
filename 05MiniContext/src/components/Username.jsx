import { useContext } from "react";
import UserContext from "../context/UserContext";
function Username() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please log in</div>;
  return <div>Username:{user.username}</div>;
}
export default Username;
