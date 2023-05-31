import './home.css';
import Navbar from './Navbar';
import SubHome from './SubHome';
const Home = () => {
    return (
        <div>
            <div className='bg-img'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <SubHome />
                </div>

            </div>
        </div>
    )
}

export default Home;