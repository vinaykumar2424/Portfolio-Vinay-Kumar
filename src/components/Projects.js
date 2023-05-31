import { Link } from 'react-router-dom'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import Footer from './Footer'
import './project.css'
const Projects = () => {
    return (
        <>
            <div className="Projects">
                <div className="projectDiv">
                <a href="https://cybertech-206b4.web.app/" target='_blank'><img className='projectImg' src={img1} alt='img' /></a>
                    <div className='detailed'>
                        <p>Personal Data records</p>
                        <p>Assignment Project</p>
                    </div>
                </div>
                <div className="projectDiv">
                <a href="https://chat-576b0.web.app/" target='_blank'><img className='projectImg' src={img3} alt='img' /></a>
                    <div className='detailed'>
                        <p>A Chatting Application</p>
                        <p>Personal Project</p>
                    </div>
                </div>
                <div className="projectDiv">
                <a><img className='projectImg' src={img2} alt='img' /></a>
                    <div className='detailed'>
                        <p>Desktop Hacking Software (Front End)</p>
                        <p>Competition Work</p>
                    </div>
                </div>
                <div className="projectDiv">
                <a><img className='projectImg' src={img5} alt='img' /></a>
                    <div className='detailed'>
                        <p>Dashboard</p>
                        <p>Assignment Project</p>
                    </div>
                </div>
                <div className="projectDiv">
                <a href="https://resumebuilder-ad81a.web.app/login" target='_blank'><img className='projectImg' src={img6} alt='img' /></a>
                    <div className='detailed'>
                        <p>A Resume Builder</p>
                        <p>Personal Project</p>
                    </div>
                </div>
                <div className="projectDiv" style={{ marginBottom: "10vh" }}>
                <a href="https://incredible-souffle-47689c.netlify.app/" target='_blank'><img className='projectImg' src={img4} alt='img' /></a>
                    <div className='detailed'>
                        <p>Movie Ticket Book (Front End)</p>
                        <p>Assignment Project</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects;