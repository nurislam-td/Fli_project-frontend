import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Airport from "./pages/Airport";
import Aircraft from "./pages/Aircraft";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="airport" element={<Airport />} />
      <Route path="aircraft" element={<Aircraft />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
