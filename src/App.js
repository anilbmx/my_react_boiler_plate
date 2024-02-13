import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Home } from "./views";
import { rootStore } from "./store"
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

const ProtectedRoute = ({children}) => {
  const location = useLocation();
  if(!getCookie("id_token")?.length) {
    return <Navigate to="/login" state={{ from: location}} replace />
  }
  return children
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>Login</div>
  },
  {
    path: "/",
    element: <ProtectedRoute><Home/></ProtectedRoute>,
  },
]);

function App() {
  const history = createBrowserHistory();
  const store = rootStore(history);
  return (
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
