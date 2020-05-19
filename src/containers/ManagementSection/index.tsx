import React from "react";
import { useSelector } from "react-redux";
import NameList from "../../components/NameList";
import NameForm from "../NameForm";
import useAppDispatch from "../../redux/useAppDispatch";
import { addName, removeName, selectNames } from "../../redux/slices/names";
import Section from "../../components/Section";

const ManagementSection = () => {
  const names = useSelector(selectNames);
  const dispatch = useAppDispatch();

  return (
    <Section title="Add/edit names">
      <NameForm
        onSubmit={(n) => {
          dispatch(addName(n));
        }}
      />
      <NameList
        names={names}
        onDelete={(n) => {
          dispatch(removeName(n));
        }}
      />
    </Section>
  );
};

export default ManagementSection;
