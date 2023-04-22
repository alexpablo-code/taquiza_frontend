import React from 'react';

const InfoSec = () => {
    return (
        <section className='bg-black text-white' id='location'>
            <div className='container my-5 text-center py-5'>
                <h4 className='text-danger fs-1'>Location & Hours</h4>
                <div className='row'>
                    <div className=''>
                        <p className='fw-bold my-1'>Visit Us</p>
                        <p>9571 Silverdale Way NW, Silverdale, WA 98383</p>
                        <p className='fw-bold my-1'>Call us</p>
                        <p>(360) 914-9152</p>
                    </div>
                    <div>
                        <p className='fw-bold'>Hours</p>
                        <ul className='list-group mb-3'>
                            <li className='list-group-item'>Mon - Thur 7AM - 7PM</li>
                            <li className='list-group-item'>Sat 8AM - 8PM</li>
                            <li className='list-group-item'>Sun 9AM - 6PM</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default InfoSec;
