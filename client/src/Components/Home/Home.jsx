import herbal from "../../assets/herbal4.jpg";

function Home() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${herbal})`,
        backgroundSize: 'cover',   // Makes the image cover the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        minHeight: '100vh', 
        minWidth:'auto'      // Ensures the div takes up the full viewport height
      }}
    >
      <div className="flex items-center justify-center h-full">
        <p>ujjjjj</p>
      </div>
    </div>
  );
}

export default Home;
