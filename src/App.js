import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import './App.css';

function App() {
    const [value, setValue] = React.useState(0);

    const [partNumber, setPartNumber] = useState('');
    const [partPackages, setPartPackages] = useState([]);
    const [packages, setPackages] = useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <h1>Tabs Demo</h1>
            <p>
                Demo to show how to use tabs to switch components (not page
                urls)
            </p>
            <p>
                Note: each tab has a separate component, and on tab change it
                will destroy and reload that compoment meaning the state will be
                lost in each tab.
            </p>
            <div className="tab_container">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />s
                </Tabs>
                {value === 0 && (
                    <Tab1 packages={packages} setPackages={setPackages} />
                )}
                {value === 1 && (
                    <Tab2
                        partNumber={partNumber}
                        setPartNumber={setPartNumber}
                        packages={partPackages}
                        setPackages={setPartPackages}
                    />
                )}
                {value === 2 && <Tab3 />}
            </div>
        </div>
    );
}

export default App;

//<TabPanel value={value} index={0}>
//Item One
//</TabPanel>
