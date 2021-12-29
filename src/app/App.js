import { Header } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import { CONSTANT as _const } from './util';
import { AppRoutes, MaintenanceRoutes } from './Routes';

function App() {
  const routes = _const.maintenanceMode ? MaintenanceRoutes : AppRoutes;
  const routeComponents = routes.map(({ path, component }, key) => <Route path={path} element={component} key={key} />);

  return (
    <div>
      <Router>
        {!_const.maintenanceMode ? <Header /> : ''}
        <Routes>
          {routeComponents}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
