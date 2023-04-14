import './style.css'

import {sertificateList} from '../../helpers/sertificateList'

const Sertificates = () => {
    return (
        <>
            <h2 className="title-2">My training</h2>
            <ul className='sertificate__list'>
                {sertificateList.map((item, index) => {
                    const {src, title, id} = item;
                    return (
                        <li className='sertificate__item' key={id}>
                            <img className='sertificate__img' src={src} alt={title} />
                            <p className='sertificate__title'>{title}</p>
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}

export default Sertificates;