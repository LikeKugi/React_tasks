import {JSX} from "react";
import pic from '../../assets/img/img.png';

const HomePage = (): JSX.Element => {
  return (
    <section>
      <h1>Web Coast Customs</h1>
      <img src={pic}
           alt="hey"/>
    </section>
  );
};
export default HomePage;
