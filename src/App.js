import React from "react";
import Header from "./component/UI/Header";
import GreenPanel from "./component/UI/GreenPanel";
import AboutUs from "./component/UI/AboutUs";
import GroupTherapy from "./component/UI/GroupTherapy";
import TrainingGroup from "./component/UI/TrainingGroup";
import GreatGroup from "./component/UI/GreatGroup";
import SupportGroup from "./component/UI/SupportGroup";
import OnlineCounseling from "./component/UI/OnlineCounseling";

function App() {
  return (
    <div>
      <Header />
      <GreenPanel />
      <AboutUs />
      <GroupTherapy />
      <TrainingGroup />
      <GreatGroup />
      <SupportGroup />
      <OnlineCounseling />
    </div>
  );
}

export default App;
