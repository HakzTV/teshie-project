import vehicle from '../assets/images/vehicle.png';
import watches from '../assets/images/watches.png';
import electronics from '../assets/images/electronics.png';
import furniture from '../assets/images/furniture.png';
import clothing from '../assets/images/clothing.png';
import shoes from '../assets/images/shoe.png';


const PrimeLocation = () => {
    return ( 
        <div className="prime-container">

    <div className="container">
        <div className="prime-header">
            <h2>Looking for premium land locations</h2>
            <p>We have partnered with the most responsible land owner to help you buy the best land with no hassle.</p>
        </div>

        <div className="prime-locations">
        <div className="categories">

<div className="category-wrapper ">

<div className="category cat-big">
<img src={vehicle} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
Accra
</span>
<div className="cat-overlay">
  <span className="bid-now">Accra</span>
</div>
</div>
<div className="category cat-small">
<img src={watches} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
Kasoa
</span>
<div className="cat-overlay">
  <span className="bid-now">Kasoa</span>
</div>
</div>
<div className="category cat-small">
<img src={electronics} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
Sakumono
</span>
<div className="cat-overlay">
  <span className="bid-now">Sakumono</span>
</div>
</div>

</div>
<div className="category-wrapper">

<div className="category cat-small">
<img src={furniture} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
Aburi
</span>
<div className="cat-overlay ">
<span className="bid-now">Aburi</span>
</div>
</div>
<div className="category cat-small">
<img src={clothing} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
    Kumasi
</span>
<div className="cat-overlay">
<span className="bid-now">Kumasi</span>
</div>
</div>
<div className="category cat-big" style={{background: "#131313"}}>
<img src={shoes} alt="Vehicle" className="vehicle-image" />
<span className="cat-title">
Axim
</span>
<div className="cat-overlay">
<span className="bid-now">Axim</span>
</div>
</div>

</div>
</div>
        </div>
    </div> 
        </div>
    );
}
 
export default PrimeLocation;