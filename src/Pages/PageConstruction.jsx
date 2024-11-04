const UnderConstructionPage = () => {
    return (
      <div className="construction-container">
        <div className="content">
          <h1 className="headline">We're Building Something Great!</h1>
          <p className="subheadline">Our site is currently under construction, but we’ll be up and running soon.</p>
          
          <div className="animation-box">
            <div className="tool-icon hammer"></div>
            <div className="tool-icon wrench"></div>
            <div className="tool-icon bolt"></div>
          </div>
          
          <a href="/" className="notify-btn">Notify Me</a>
        </div>
      </div>
    );
  };
  
  export default UnderConstructionPage;
      