import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:1,
            title: 'Córdoba'
        },
        {
            id:2,
            title: 'Mendoza'
        },
        {
            id:3,
            title: 'Formosa'
        },
        {
            id:4,
            title: 'Rawson'
        },
        {
            id:5,
            title: 'Corrientes'
        },
    ]
    return <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
}

export default TopButtons