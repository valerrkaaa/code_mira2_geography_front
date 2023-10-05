import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import { Homework } from "../../components/Homework/Homework";

function Welcome() {
  return (
    <div>
      <Header />
      <Homework />
    </div>
  );
}

export default Welcome;
