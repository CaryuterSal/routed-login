import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {SessionContext} from '../hooks/context/SessionContext.js';
import {UserDataContext} from '../hooks/context/UserDataContext.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionContext>
      <UserDataContext>
        <App />
      </UserDataContext>
    </SessionContext>
  </StrictMode>,
)
