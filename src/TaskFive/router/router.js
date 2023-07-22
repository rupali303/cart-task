import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HodDashboard from "../Pages/HodDashboard";
import StaffDashboard from "../Pages/StaffDashboard";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={< RootLayout />}>
            <Route index element={< Dashboard />} />
            <Route path="login" element={< Login />} />
            <Route path="register" element={< Register />} />
            <Route path="HodDashboard" element={
                <ProtectedRoute allowedRoles={"hod"}>
                    < HodDashboard />
                </ProtectedRoute>
            }
            />
            <Route path="StaffDashboard" element={
                <ProtectedRoute allowedRoles={"staff"}>
                    < StaffDashboard />
                </ProtectedRoute>
            } />
            <Route path="dashboard" element={<Dashboard/>}/>

        </Route>
    )
)