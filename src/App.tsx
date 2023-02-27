import { AppWrapper } from './App.styles';

import { SerasaHeader } from './components/molecules/header/header';
import Landing from './components/sections/landing/landing';
import Suggestions from './components/sections/suggestions/suggestions';
import { globalStyles } from './themes/globalStyles';

function App() {
  globalStyles();
  return (
    <AppWrapper>
      <SerasaHeader />
      <Landing />
      <Suggestions />
    </AppWrapper>
  );
}

export default App;
