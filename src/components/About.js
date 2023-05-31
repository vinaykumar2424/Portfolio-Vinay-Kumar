import './about.css'
import Img from '../images/VK.png'
const About = () => {
    return (
        <div className="About">
            <div className="SeftIntro">
                My self Vinay kumar and i am a web developer. My main focus on Front End web developing and designing the websites and have one plus experience in thsi field. Currently , i am pursuing my B.tech from Indian Institute of Technology, Roorkee in Mechanical Engineering field.
            </div>
            <span className='line'></span>
            <div className='RestDetails'>
                <img src={Img} className='AboutImg' alt="" />
                <div className='PersonInformation'>
                    <span className='Experience SubInformation'>
                        <p className='heading'>EXPERIENCE</p>
                        <div className='HeadingDetails'>
                            <p>Assignment Project</p>
                            <p>Personal Data records</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Personal Project</p>
                            <p>A Chatting Application</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Competition Work</p>
                            <p>Desktop Hacking Software</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Assignment Project</p>
                            <p>Dashboard</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Personal Project</p>
                            <p>A Resume Builder</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Assignment Project</p>
                            <p>Movie Ticket Book</p>
                        </div>
                    </span>
                    <span className='Education SubInformation'>
                        <p className='heading'>EDUCATION</p>
                        <div className='HeadingDetails'>
                            <p>Indian Institute of Technology, Roorkee</p>
                            <p>B.Tech ( Mechanical )</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Spectrum Sen. Sec. School</p>
                            <p>12th Class ( 81.84 %)</p>
                        </div>
                    </span>
                    <span className='Contact SubInformation'>
                        <p className='heading'>CONTACT</p>
                        <div className='HeadingDetails'>
                            <p>Contact Number</p>
                            <p>8287728203</p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Email</p>
                            <p><a href='mailto:kumarvinay8209@gmail.com' target='_blank'>kumarvinay8209 @gmail.com</a></p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Linkedln</p>
                            <p><a href="https://www.linkedin.com/in/vinay-kumar-912619210" target='_blank'>https://www.linkedin.com /in/vinay-kumar-912619210</a></p>
                        </div>
                        <div className='HeadingDetails'>
                            <p>Instagram</p>
                            <p><a href="https://www.instagram.com/vinay_k8287/" target='_blank'>https://www.instagram.com /vinay_k8287/</a></p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About;