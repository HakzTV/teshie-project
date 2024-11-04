import TextAnimation from "./TextAnimation";

const LandingPage = () => {
    return (  
        <div className="container">
            <div className="content">
            <div className="intro-text">
        <h1>
          Welcome to Teshie Project - <TextAnimation />
        </h1>
      </div>
            <div className="sub-text">


            <p>Unlock affordability with Us. Discover new ways to finance your next essential asset purchase.</p>
            </div>
            <div className="button-wrapper">
                <a href="#" className="btn">New Lands   </a>
                <a href="#" className="btn">Shop Now</a>
            </div>
            </div>

            <div className="hero-lottie">
                <div className="first"></div>
                <div className="second"></div>  
                <div className="third"></div>
                <div className="fourth"></div>
            </div>
            <div className="sub-hero-text">
                <h2>Level up your buying power and unlock your dream</h2>
            </div>
            
        </div>

    );
}
 
export default LandingPage;