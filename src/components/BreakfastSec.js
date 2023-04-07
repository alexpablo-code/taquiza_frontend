import React from 'react';
let brkbrto = require('./images/breakfast_burrito.jpg')

const BreakfastSec = () => {
    return (
        <div className='container my-4'>
            <div className='breakfastSec text-center'>
                <div className='my-auto'>
                    <h1 className='text-danger' >Breakfast Burritos</h1>
                    <p>6 Different burritos
                        that you must try! <br/>

                        We open at 7am Mon - Sat
                        Sunday at 9am
                        Breakfast ends at 11am</p>
                </div>
                <div className='img-side'>
                    <img src={brkbrto} alt="breakfast-burritos" />
                </div>

            </div>
            
        </div>
    );
}

export default BreakfastSec;
