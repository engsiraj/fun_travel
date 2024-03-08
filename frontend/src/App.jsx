import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Detailpage, Home } from "./pages";
import { DataContext } from "./component";

function App() {
  const [place, setPlace] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Detailpage />} />
      </Route>
    )
  );
  return (
    <>
      <DataContext.Provider
        value={{ place, setPlace, isUpdated, setIsUpdated }}
      >
        <div className="container mx-auto px-4">
          <RouterProvider router={router} />
        </div>
      </DataContext.Provider>
    </>
  );
}

export default App;
