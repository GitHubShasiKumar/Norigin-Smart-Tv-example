import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

const NewTouchable = ({ onEnterPress, text, onFocus,focusKey }) => {
  const { ref, focused } = useFocusable({ onEnterPress, onFocus, focusKey });
  return (
    <div
      ref={ref}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: focused ? "red" : "white",
        height: 60,
        width: 90,
        margin: 7,
      }}
    >
      Press me
    </div>
  );
};

export default NewTouchable;
