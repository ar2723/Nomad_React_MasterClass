import React from 'react';
import {GlobalStyle} from "./theme/GlobalStyle";
import {Box, Wrapper} from "./interface/layout";
import {motion} from "framer-motion";

function App() {
  return (
      <>
          <GlobalStyle/>
          <Wrapper>
              <Box/>
              <motion.span animate={{x: 100}}/>
          </Wrapper>
      </>
  );
}

export default App;
