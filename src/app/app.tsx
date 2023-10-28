import { Outlet } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
