import React from 'react';
import {GlobalStyle} from "./theme/GlobalStyle";
import {Box, Wrapper} from "./interface/layout";

function App() {
  return (
      <>
          <GlobalStyle/>
          <Wrapper>
              <Box
                  initial={{ scale:0 }}
                  animate={{ scale:1, rotateZ: 360 }}
                  transition={{ type: "spring", damping: 5 }}
              />
          </Wrapper>
      </>
  );
}

export default App;
