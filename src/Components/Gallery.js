import React, { useState } from 'react'
import Img1 from '../img/imagem1.jpg'
import Img2 from '../img/imagem2.jpg'
import Img3 from '../img/imagem3.webp'
import Img4 from '../img/imagem4.jpeg'
import Img5 from '../img/imagem5.jpg'
import Img6 from '../img/imagem6.jpeg'
import Img7 from '../img/imagem7.jpg'
import Img8 from '../img/imagem8.webp'
import Img9 from '../img/imagem9.webp'
import Img10 from '../img/imagem10.jpeg'
import Img11 from '../img/imagem11.jpg'
import Img12 from '../img/imagem12.jpeg'
import Img13 from '../img/imagem13.jpg'
import Img14 from '../img/imagem14.jpg'
import Img15 from '../img/imagem15.jpg'


import "../Styles/gallery.css"
import CloseIcon from '@mui/icons-material/Close';



const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        }, {
            id: 6,
            imgSrc: Img6,
        }, {
            id: 7,
            imgSrc: Img7,
        }, {
            id: 8,
            imgSrc: Img8,
        }, {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        }, {
            id: 6,
            imgSrc: Img6,
        }, {
            id: 7,
            imgSrc: Img7,
        }, {
            id: 8,
            imgSrc: Img8,
        }, {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true)
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                <div className='galleryBox'>
                    {data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>

    )
}

export default Gallery;