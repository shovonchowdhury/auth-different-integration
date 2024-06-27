import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);

  return <div>This is home </div>;
};

export default Home;
