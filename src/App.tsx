import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PickerSection from "./containers/PickerSection";
import ManagementSection from "./containers/ManagementSection";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <PickerSection />
        <ManagementSection />
      </Layout>
    </>
  );
};

export default App;
