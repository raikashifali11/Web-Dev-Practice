import profilePic from './assets/image.jpg'
function Card(){


  return(
      <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture" />
        <h2 className='card-title'>Rai Kashif Ali</h2>
        <p className='card-description'>I am a frontend developer</p>
      </div>
  );
}
export default Card