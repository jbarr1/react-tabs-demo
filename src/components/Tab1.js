import React, { useEffect } from 'react';

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
];

const Tab1 = ({ setPackages, packages }) => {
    useEffect(() => {
        const fetchData = () => {
            console.log('tab1 Fetching data...');
            setPackages(data);
        };

        !packages.length && fetchData();
    }, [setPackages, packages]);

    useEffect(() => {
        console.log('tab1 fetched data as: ', packages);
    }, [packages]);

    return (
        <div>
            <h1>Tab1</h1>

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

export default Tab1;
