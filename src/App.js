import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routers";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element=<Layout>
                    <Page />
                  </Layout>
                />
              );
            })}
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
