import Logo from '../assets/images/temp.jpeg';
import coin from '../assets/images/coin.png';
import trust from '../assets/images/shield.png';
import storefront from '../assets/images/storefront.png';

const ChooseUs = () => {
    return ( 
        <div className="bg-wrapper">

    <div className="container">
        <div className="chooseus-content">
        <div className="choose-left">

        <div className="header">

            <h2>Why Choose Us?</h2>
            <p>Why purchase with motito financing</p>
        </div>
        <div className="body">
        <div className="choose-content">

            <span className="icon">
                <img src={trust} alt="" />
            </span>
            <div className="content-title">
                <h3>Many locations with no litigation issues</h3>
            </div>
            <div className="content-para">
                <p>We are open about our fees and charges, and our terms and conditions are straightforward and easy to understand</p>
            </div>
        </div>
        <div className="choose-content">

<span className="icon">
    <img src={storefront} alt="" />
</span>
<div className="content-title">
    <h3>Trusted & Transparent</h3>
</div>
<div className="content-para">
    <p>We are open about our fees and charges, and our terms and conditions are straightforward and easy to understand</p>
</div>
</div>
 <div className="choose-content">

<span className="icon">
    <img src={coin} alt="" />
</span>
<div className="content-title">
    <h3>Flexible Payment Option</h3>
</div>
<div className="content-para">
    <p>We are open about our fees and charges, and our terms and conditions are straightforward and easy to understand</p>
</div>
</div>
        </div>
        </div>
        <div className="choose-right">
            <img src={Logo} alt=""
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 47vw" />
        </div>
        </div>
    </div> 
        </div>
    );
}
 
export default ChooseUs;