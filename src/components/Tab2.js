import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

let data = [
    {
        packageId: 1,
        packageName: 'package one',
        packagePrice: 30.56,
    },
    {
        packageId: 2,
        packageName: 'package one',
        packagePrice: 58.2,
    },
    {
        packageId: 3,
        packageName: 'package 3',
        packagePrice: 205.0,
    },
    {
        packageId: 4,
        packageName: 'package 4',
        packagePrice: 459.42,
    },
    {
        packageId: 5,
        packageName: 'package 5',
        packagePrice: 503.0,
    },
    {
        packageId: 6,
        packageName: 'package 6',
        packagePrice: 634.0,
    },
];

const Tab2 = ({ setPartNumber, partNumber, setPackages, packages }) => {
    // console.log('tab2 partnumber is: ', partNumber); /renders each time part changes
    const [mainPartNumber, setMainPartNumber] = useState(''); //useState(partNumber);

    useEffect(() => {
        const fetchData = () => {
            console.log('Tab2 Fetching data...');
            setPackages(data);
        };

        mainPartNumber > '' && fetchData();
    }, [mainPartNumber, setPackages]);

    useEffect(() => {
        console.log('tab2 fetched data as: ', packages);
    }, [packages]);

    return (
        <div>
            <h1>Tab2</h1>
            <TextField
                className="tab1-textfield"
                fullWidth={false}
                label="Manufacturer part number"
                value={partNumber}
                onChange={(event) => {
                    setPartNumber(event.target.value);
                }}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        ev.preventDefault();
                        setMainPartNumber(partNumber);
                    }
                }}
            />
            {packages.map((pkg) => {
                return (
                    <ul key={pkg.packageId}>
                        {pkg.packageId} - {pkg.packageName} -{pkg.packagePrice}
                    </ul>
                );
            })}
        </div>
    );
};

export default Tab2;
