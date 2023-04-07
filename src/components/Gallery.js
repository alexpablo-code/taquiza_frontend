const asadaF = require('./images/asada_fries.jpg')
const tacosO = require('./images/tacos_outs.jpg')
const torta = require('./images/torta.jpg')
const moreTacos = require('./images/more_tacos.jpg')
const ckTaquitos = require('./images/ck_taquitos.jpg')
const caliBrto = require('./images/cali_brto.jpg')


const Gallery = () => {
    return (
        <div className='container text-center'>
            <h4>Gallery</h4>
            <div className='gallery-container'>
                <figure className='gallery-item'>
                    <img className='gallery-img' src={asadaF} alt="" />
                </figure>
                <figure>
                    <img className='gallery-img' src={tacosO} alt="" />
                </figure>
                <figure>
                    <img className='gallery-img' src={torta} alt="" />
                </figure>
                <figure>
                    <img className='gallery-img' src={moreTacos} alt="" />
                </figure>
                <figure>
                    <img className='gallery-img' src={ckTaquitos} alt="" />
                </figure>
                <figure>
                    <img className='gallery-img' src={caliBrto} alt="" />
                </figure>
            </div>
            
        </div>
    );
}

export default Gallery;
