import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PickerSection from "./containers/PickerSection";
import ManagementSection from "./containers/ManagementSection";

const App = () => {
  return (
    <>
      <CssBaseline />
      <PickerSection />
      <ManagementSection />
    </>
  );
};

export default App;
