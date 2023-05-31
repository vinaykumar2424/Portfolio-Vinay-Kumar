import './navbar.css'

const Footer = () => {
    return (
        <div className='personalLinks'>
            <span className='bottomGrid1'>
                <i className="fa fa-envelope"></i>&nbsp;
                <a href='mailto:kumarvinay8209@gmail.com' target='_blank'>Email&nbsp;&nbsp;- kumarvinay8209@gmail.com</a>&nbsp;&nbsp;
            </span>
            <span className='bottomGrid2'>
                <span>
                    <i className="fa fa-linkedin"></i>&nbsp;
                    <a href="https://www.linkedin.com/in/vinay-kumar-912619210" target='_blank'>Linkedln&nbsp;&nbsp;-</a>&nbsp;&nbsp;
                </span>
                <span>
                    <i className="fa fa-github"></i>&nbsp;
                    <a href="https://github.com/vinaykumar2424" target='_blank'>Github&nbsp;&nbsp;-</a>&nbsp;&nbsp;
                </span>
                <span>
                    <i className="fa fa-instagram" style={{ fontWeight: "bold" }}></i>&nbsp;
                    <a href="https://www.instagram.com/vinay_k8287/" target='_blank'>Instagram</a>
                </span>
            </span>
        </div>
    )
}

export default Footer;