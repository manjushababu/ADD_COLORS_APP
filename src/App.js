import React from 'react';

import ColorComponent from './ColorComponent/ColorComponent';
import { Layout, Wrapper } from './style';

function App() {
  return (
    <Layout>
      <Wrapper>
        <h3>Hello User!🌻</h3>
        <ColorComponent />
      </Wrapper>
    </Layout>
  );
}

export default App;
