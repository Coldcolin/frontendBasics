import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Colin from "./Context/ThemeContext"
import store  from './Redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Colin>
          <App />
        </Colin>
      </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
