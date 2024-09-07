/* eslint-disable no-unused-vars */

import { ButtonDemo } from "../components/Button";
import { CardList } from "../components/CardList";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { ButtonList } from "../components/cardList";

export const Listing = () => {
  return (
    <div>
      <ButtonDemo label={"+ Create New Button"} />
      <CardList />

      {/* <ButtonList /> */}
    </div>
  );
};
