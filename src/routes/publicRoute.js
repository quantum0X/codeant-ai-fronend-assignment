import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from '../components/login';
import Dashboard from "../components/dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

        </Route>
    )
)

export default router;