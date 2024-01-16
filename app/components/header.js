const Header = () => {
    return ( 
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#experience" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Experience</span></a></li>
                    {/* <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li> */}
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;