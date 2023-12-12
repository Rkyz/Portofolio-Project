import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/page'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

export default router;

