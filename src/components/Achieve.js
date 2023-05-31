import './achieve.css'
import img7 from '../images/7.png'
import Footer from './Footer';
const Achieve = () => {
    return (
        <div className="Achieve">
            <div className="AchievementDiv">
                <a><img className='AchievementImg' src={img7} alt='img' /></a>
                <div className='AchievementDetailed'>
                    <p>Desktop Hacking Software (Front End)</p>
                    <p>Competition Work</p>
                    <p>Gold Medal</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Achieve;