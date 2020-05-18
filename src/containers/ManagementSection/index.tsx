import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NameList from "../../components/NameList";
import NameForm from "../NameForm";
import { addName, selectNames } from "../../redux/slices/names";

const ManagementSection = () => {
  const names = useSelector(selectNames);
  const dispatch = useDispatch();

  return (
    <>
      <NameForm
        onSubmit={(n: string) => {
          dispatch(addName(n));
        }}
      />
      <NameList names={names} />
    </>
  );
};

export default ManagementSection;
