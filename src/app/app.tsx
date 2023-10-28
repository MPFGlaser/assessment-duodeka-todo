import { Outlet } from 'react-router-dom';
import Navigation from 'src/components/Navigation/Navigation';

export function App() {
  return (
    <div>
      <Navigation>
        <Outlet />
      </Navigation>
    </div>
  );
}

export default App;
