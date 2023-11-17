// Home.js
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import NewTouchable from "./NewTouchable";

const Home = () => {
  console.log("Home");
  const { ref, focusSelf, focusKey } = useFocusable({
    saveLastFocusedChild: true,});
  const navigate = useNavigate();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <NewTouchable onEnterPress={() => navigate("/about")} />
        <NewTouchable onEnterPress={() => navigate("/about")} />
        <NewTouchable onEnterPress={() => navigate("/about")} />
      </div>
    </FocusContext.Provider>
  );
};

export default Home;
