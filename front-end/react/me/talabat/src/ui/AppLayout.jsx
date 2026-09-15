import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  /// to loader 
  const navigation = useNavigation();
  /// idle , loading
  const isLoading = navigation.state === "loading";

  return (
      <div className="layout">
        {isLoading && <Loader />}

        <Header />

        <main>
          <Outlet />
        </main>

        <CartOverview />
      </div>
  );
}

export default AppLayout;
