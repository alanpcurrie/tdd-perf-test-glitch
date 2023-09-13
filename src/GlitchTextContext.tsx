import React, { createContext } from "react";

type GlitchTextContextType = {
  glitchOn: boolean;
  setGlitchOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlitchTextContext = createContext<GlitchTextContextType | null>(null);

export default GlitchTextContext;
