import React from 'react';
import {ipcRenderer} from 'electron'
const Home = () => {
    const open =  () => {
        ipcRenderer.invoke('OPEN:PUPPETEER')
    }
    return (
        <button onClick = {open}>Open Puppeteer</button>
    )
}

export default Home