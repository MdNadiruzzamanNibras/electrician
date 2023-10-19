
import { BsFillCaretRightFill } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
  };

  return (
    <div className="container mx-auto  ">
      <div>
        <h4 className="text-center text-orange-500 font-semibold text-lg">24/7 Electrician Services – Safe and Efficient</h4>
        <h1 className="text-center font-bold text-3xl">We are a Full Service Electrical Contractor</h1>
        <div className="my-10 ">
          <Slider {...settings}>
            <div className="w-20 shadow-lg bg-base-100 text-center rounded-lg px-4 py-6">
              <h5 className='text-2xl font-bold my-4'>Electrical Service</h5>
              <p className='text-lg  px-12'>We provide complete electrical design and installation services</p>
              <h5 className="flex justify-center text-lg font-bold my-2 items-center">
                <span>More info</span> <span className="text-orange-500"><BsFillCaretRightFill/></span>
              </h5>
            </div>
            <div className="w-20 shadow-lg bg-base-100 text-center rounded-lg px-4 py-6">
              <h5 className='text-2xl font-bold my-4'>Heating Service</h5>
              <p className='text-lg  px-12'>We provide complete electrical design and installation services</p>
              <h5 className="flex justify-center text-lg font-bold my-2 items-center">
                <span>More info</span> <span className="text-orange-500"><BsFillCaretRightFill/></span>
              </h5>
            </div>
            <div className="w-20 shadow-lg bg-base-100 text-center rounded-lg px-4 py-6">
              <h5 className='text-2xl font-bold my-4'>Air Conditioning</h5>
              <p className='text-lg  px-12'>Our installation services ensure that you get the right air conditioner</p>
              <h5 className="flex justify-center text-lg font-bold my-2 items-center">
                <span>More info</span> <span className="text-orange-500"><BsFillCaretRightFill/></span>
              </h5>
            </div>
            <div className="w-20 shadow-lg bg-base-100 text-center rounded-lg px-4 py-6">
              <h5 className='text-2xl font-bold my-4'>Panels Changes</h5>
              <p className='text-lg  px-12'>Our installation services ensure that you get the right air conditioner</p>
              <h5 className="flex justify-center text-lg font-bold my-2 items-center">
                <span>More info</span> <span className="text-orange-500"><BsFillCaretRightFill/></span>
              </h5>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FullService;
