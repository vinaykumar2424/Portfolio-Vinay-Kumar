import './navbar.css'
import Photo from '../images/VK.png'
import Footer from './Footer';

const SubHome = () => {
    
    return (
        <div className="SubHome">
            <div className='mainDiv'>
                <img className='profileImg' src={Photo} alt='img' />
                <div className='profileData'>
                    <p>Vinay Kumar</p>
                    <p>Web Developer</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubHome;