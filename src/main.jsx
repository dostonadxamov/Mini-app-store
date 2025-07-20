
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalContextProvider } from './Context/GlobalContext.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
<GlobalContextProvider>
    <App />
        <Toaster style={{ top: "70px" }}  position='top-right'/>

</GlobalContextProvider>
)
