import React from "react";
import { useSelector } from "react-redux";
import NamePicker from "../../components/NamePicker";
import { pickRandomName, selectName } from "../../redux/slices/randomName";
import useAppDispatch from "../../redux/useAppDispatch";
import { selectNames } from "../../redux/slices/names";

const PickerSection = () => {
  const randomName = useSelector(selectName);
  const names = useSelector(selectNames);
  const dispatch = useAppDispatch();

  return (
    <>
      <NamePicker
        name={randomName}
        disabled={names.length < 2}
        onClick={() => dispatch(pickRandomName())}
      />
    </>
  );
};

export default PickerSection;
