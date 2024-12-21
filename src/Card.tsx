import profilePic from './assets/logo.jpg'

function Card() {
  return(
    <div className="card">
      <img className='card-image' src= {profilePic} alt="Profile Picture"></img>
      <h2 className='card-title'>Tanjir Hasan</h2>
      <p className='card-text'>I make website and design brochure for my organization.</p>
    </div>
  );
}

export default Card