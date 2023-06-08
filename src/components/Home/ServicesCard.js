import React from 'react';

const ServicesCard = ({ category, description, imgUrl }) => {
    return (
        <div className="flex flex-col items-center p-4 py-10 gap-8 hover:shadow-lg duration-300 hover:text-primary duration-700">
            <img src={imgUrl} alt="/" className='w-24'/>
            <h1 className='text-[1.7rem]'>{category}</h1>
            <p className='text-center text-[1.13rem]'>{description}</p>
        </div>
    );
};

export default ServicesCard;
