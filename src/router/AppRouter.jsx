import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TravelRoutes } from '../travel/routes/TravelRoutes';


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes /> } />


        <Route path="/*" element={ <TravelRoutes/> } />

    </Routes>
  )
}
