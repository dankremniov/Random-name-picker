import { useDispatch } from "react-redux";
import { RootDispatch } from "./createStore";

const useAppDispatch = () => useDispatch<RootDispatch>();

export default useAppDispatch;
