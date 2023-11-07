import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routers";
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";
import { UserProvider } from "./context/UserContext";
import { TestProvider } from "./context/TestContext";

function App() {
  
  return (
    <div className="App">
      <Router>
        <TestProvider>
          <UserProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
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

        </TestProvider>

      </Router>
    </div>
  );
}

export default App;
