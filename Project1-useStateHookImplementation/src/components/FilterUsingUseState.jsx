import React, { useState } from 'react';

const allBrands = [
    { id: 1, name: 'Nike' },
    { id: 2, name: 'Adidas' },
    { id: 3, name: 'Puma' },
    { id: 4, name: 'Reebok' },
    { id: 5, name: 'Under Armour' }
];

export const FilterUsingUseState = () => {
    // const [search, setSearch] = useState();
    const [brands, setBrands] = useState(allBrands);

    const onSearchFunction = (e) => {
        // Update the search state with the current input value
        // This allows us to filter the brands based on the user's input
        // e.target.value is the current value of the input field
        // setSearch(e.target.value);
        let search = e.target.value;

        // If the search input is empty, reset to all brands
        // This allows the user to clear the search and see all brands again
        if (search === '') {
            setBrands(allBrands);
            return;
        }

        // Filter brands based on the search input
        // Convert both brand names and search input to lowercase for case-insensitive comparison
        const filteredBrands = brands.filter(brand =>
            brand.name.toLowerCase().includes(search?.toLowerCase())
        );
        setBrands(filteredBrands);
    }

    return (
        <>
            <input onChange={onSearchFunction} type="search" name="" id="" />
            <ul>
                {
                    // Map through the filtered brands and render each brand's name in a list item
                    brands.map((brand) => (
                        <li key={brand.id}>
                            {brand.name}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
