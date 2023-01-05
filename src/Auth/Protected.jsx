import { useSelector } from "react-redux";
import { selectUser } from "../redux/slice/userSlice";

import Login from "./Login";

const Protected = ({ Component }) => {
  const user = useSelector(selectUser);

  return (
    <div className=" flex  justify-center p-5">
      {user ? <Component /> : <Login />}
    </div>
  );
};

export default Protected;
