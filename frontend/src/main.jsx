import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './style.css'
import WindowPanel from "./components/UI/WindowPanel/WindowPanel.tsx";
import {WindowSetBackgroundColour} from "../wailsjs/runtime/runtime.js";


const container = document.getElementById('root')

const root = createRoot(container)


root.render(


    <React.StrictMode>

        <WindowPanel/>
        <App/>
    </React.StrictMode>
)





