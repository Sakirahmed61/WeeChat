// Step 1: Import React's StrictMode (helps catch issues in development).
import { StrictMode } from 'react'
// Step 2: Import createRoot — the modern way to mount a React app on the page.
import { createRoot } from 'react-dom/client'
// Step 3: Global styles (colors, layout, typography for the whole app).
import './index.css'
// Step 4: The root React component for this project.
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from '../context/AuthContext.jsx'
import { SocketContextProvider } from '../context/SocketContext.jsx'

// Step 5: Find the #root div in index.html and render <App /> inside StrictMode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
