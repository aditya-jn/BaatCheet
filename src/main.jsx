
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>   
    <App />
  </BrowserRouter>,
)

// use of react-router-dom allows us to manage navigation and routing in our React application.
// This is useful for creating single-page applications (SPAs) where you can navigate between different views without reloading the page.
// The BrowserRouter component uses the HTML5 history API to keep your UI in sync with the URL.
// This means that you can use the browser's back and forward buttons to navigate through your app, and the URL will reflect the current view.
// The BrowserRouter component is typically used at the top level of your application, wrapping your main App component.
// This allows all components within the App to access the routing functionality provided by react-router-dom.
// The BrowserRouter component is essential for enabling client-side routing in React applications.
// It allows you to define routes, navigate between different components, and manage the application's state based on the URL.
// By using BrowserRouter, you can create a more dynamic and responsive user experience in your React application.