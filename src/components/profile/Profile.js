import './style.css'
import profileImg from '../../img/sticker.png'
import {skills} from '../../helpers/skills'
import {randomDelay} from '../../helpers/randomiser'
import {randColor} from '../../helpers/randomiser'

const Profile = () => {

    const colors = ['#ece0e9', '#b7c3c0', '#c2d3ac', '#5c8594', '#736e7f', '#c3b4f4', '#977b92', '#6b7064', '#7b6387', '#376779', '#2f6c8e'];

    return (
        <div className='profile'>
            <h1 className='title-2'>My skills</h1>
            <div className='profile__container'>
                <img className='home__img' src={profileImg} width='200px' alt='Victor Adamus' />
                <div className='profile__info'>
                    <p>Victor Adamus</p>
                    <p>30 y.o.</p>
                </div>
                <ul className='profile__skills'>
                    {
                        skills.map((skill, index) => {
                            return (
                                <li className='skills' key={randomDelay(0, 100)} style={{backgroundColor: `${ colors[randColor(colors)] }`, animationDuration: `${skills.length}s`, animationDelay: `${index -1}s`}}>{skill}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Profile;