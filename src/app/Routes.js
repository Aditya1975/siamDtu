import {Home, Maintenance, Events, Series, Team} from './views';
export const AppRoutes = [
    {path: '/', component: <Home/> },
    {path: '/events', component: <Events/> },
    {path: '/series', component: <Series/>},
    {path: '/team', component: <Team/>}
];

export const MaintenanceRoutes = [
    { path: '/', component: <Maintenance/> }
];
