import React, { useEffect } from 'react';
import {
    useFocusable,
    FocusContext,
  } from "@noriginmedia/norigin-spatial-navigation";
  import NewTouchable from "./NewTouchable";
const About = () => {
    const { ref, focusSelf,focusKey } = useFocusable();
    useEffect(() => {
        focusSelf();
      }, [focusSelf]);
    
  return (
    <FocusContext.Provider value={focusKey}>
    <div ref={ref}>
     <NewTouchable />
     <NewTouchable />
     <NewTouchable />
     <NewTouchable />
    </div>
    </FocusContext.Provider>
  );
};

export default About;