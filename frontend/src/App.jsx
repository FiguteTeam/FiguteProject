
import './App.css';
import Auth from "./pages/auth/Auth.tsx";
import {
    WindowCenter,
    WindowSetSize
} from "../wailsjs/runtime/runtime.js";


function App() {

    WindowSetSize(1100, 700)
    WindowCenter()

    return (
        <>
            <Auth />
        </>
    )
}

export default App
