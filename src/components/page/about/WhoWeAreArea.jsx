import bg from "../../../assets/images/bg/banner-bg1.png";

const WhoWeAreArea = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-20 items-center justify-between p-8">
      <div className="w-full lg:w-1/2 my-20 mr-8">
        <img src={bg} alt="House" className="w-full h-[60vw] lg:h-[35vw]" />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <h3 className="text-xl font-bold mb-4">Our Company Overview</h3>
        <p className="mb-4">
          At bidsl, we believe in the power of possibilities and the thrill of
          securing unique treasures through the art of bidding. Establishing an
          interactive platform is more than just an auction site—it's a dynamic
          community where value meets opportunity.
        </p>
        <h3 className="text-xl font-bold mb-4">Our Mission:</h3>
        <p className="mb-8">
          Empowering individuals and businesses alike, we strive to create a
          transparent and exhilarating bidding experience. Whether you're a
          seasoned bidder or a first-time participant, Bidsl is your go-to
          destination for unlocking a world of diverse items, from rare
          collectibles to everyday essentials.
        </p>
        <button className="bg-[#210D42] text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhoWeAreArea;
