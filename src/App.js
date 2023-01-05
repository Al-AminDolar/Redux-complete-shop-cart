import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  let persistor = persistStore(store);
  return (
    <div className="App ">
      <Provider store={store}>
        <PersistGate loading="Persist getting..." persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
