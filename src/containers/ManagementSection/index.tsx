import React from "react";
import { useSelector } from "react-redux";
import NameList from "../../components/NameList";
import NameForm from "../NameForm";
import useAppDispatch from "../../redux/useAppDispatch";
import { addName, removeName, selectNames } from "../../redux/slices/names";

const ManagementSection = () => {
  const names = useSelector(selectNames);
  const dispatch = useAppDispatch();

  return (
    <>
      <NameForm
        onSubmit={(n: string) => {
          dispatch(addName(n));
        }}
      />
      <NameList
        names={names}
        onDelete={(n: string) => {
          dispatch(removeName(n));
        }}
      />
    </>
  );
};

export default ManagementSection;
