import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Order, { loader as orderLoader } from "./Features/order/Order";
import Cart from "./Features/cart/Cart";
import CreateOrder, { action as newOrderAction } from "./Features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/menu`,
        element: <Menu />,
        errorElement: <Error />,
        /// call loader function and pass {params, request, headers}
        loader: menuLoader,
      },
      {
        path: `/cart`,
        element: <Cart />,
      },
      {
        path: `/order/new`,
        element: <CreateOrder />,
        action: newOrderAction
      },
      {
        path: `/order/:orderId`,
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
