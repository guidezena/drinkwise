import React, { useState } from 'react'
import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import Img4 from '../img/img4.jpg'
import Img5 from '../img/img5.jpg'
import "../Styles/gallery.css"
import CloseIcon from '@mui/icons-material/Close';



const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img2,
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
            imgSrc: Img3,
        },
        {
            id: 5,
            imgSrc: Img4,
        }, {
            id: 6,
            imgSrc: Img3,
        }, {
            id: 7,
            imgSrc: Img2,
        }, {
            id: 8,
            imgSrc: Img4,
        }, {
            id: 9,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 2,
            imgSrc: Img2,
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