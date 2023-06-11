import React from 'react';

const ServicesCard = ({ category, description, imgUrl }) => {
    return (
        <div className="flex flex-col items-center p-4 py-10 mx-7 md:mx-2 lg:mx-0 gap-8  hover:shadow-lg duration-300 hover:text-primary duration-700">
            <img src={imgUrl} alt="/" className='w-24'/>
            <h1 className='text-[1.6rem] lg:text-[1.7rem] text-center'>{category}</h1>
            <p className='text-center text-[1rem] lg:text-[1.13rem]'>{description}</p>
        </div>
    );
};

export default ServicesCard;
