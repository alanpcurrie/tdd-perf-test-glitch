import React, { ReactNode, useState } from "react";
import GlitchTextContext from "./GlitchTextContext";

type GlitchTextContextProps = {
  children: ReactNode;
};

const GlitchTextProvider = ({ children }: GlitchTextContextProps) => {
  const [glitchOn, setGlitchOn] = useState<boolean>(true);
  return (
    <GlitchTextContext.Provider value={{ glitchOn, setGlitchOn }}>
      {children}
    </GlitchTextContext.Provider>
  );
};

export default GlitchTextProvider;
