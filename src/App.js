import React from "react";

import { RetrospectiveProvider } from "./store/retrospective.store";
import Retrospective from "./components/retrospective/retrospective";
export const APp = () => {
  return (
    <RetrospectiveProvider>
      <Retrospective />
    </RetrospectiveProvider>
  );
};

export default APp;
