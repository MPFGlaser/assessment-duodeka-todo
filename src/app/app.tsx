import { Outlet } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Navigation from '../components/Navigation/Navigation';

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
