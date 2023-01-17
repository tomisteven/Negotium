//import { Button } from 'semantic-ui-react'
import { BrowserRouter} from 'react-router-dom'
import {WebRoutes, AdminRoutes} from './router'
import {AuthProvider} from './contexts'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <WebRoutes />
          <AdminRoutes />
      </BrowserRouter>
    </AuthProvider>

  );
}

