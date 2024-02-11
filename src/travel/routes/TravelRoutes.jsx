import { Navigate, Route, Routes } from "react-router-dom"
import { TravelPage } from "../pages/TravelPage"


export const TravelRoutes = () => {
  return (
    <Routes>
        <Route path="/travelapp" element={ <TravelPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
