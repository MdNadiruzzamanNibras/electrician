import { BsFillPeopleFill } from 'react-icons/bs';
import { FaCertificate } from 'react-icons/fa';
import uper from '../../assets/images/AboutUsRoute/experienced/up.jpg'
import down from '../../assets/images/AboutUsRoute/experienced/down.jpg'
const Experienced = () => {
    
    return (
        <div className="container mx-auto px-2">
            <div className="">
              
                <div className="grid grid-cols-1 lg:grid-cols-2 my-32">
                    <div>
                        <div>
                            <h5 className="text-orange-500 text-xl">Over 25 Years Experience
                            </h5>               
                            <h2 className="text-4xl font-bold text-black">Experienced and Reliable Electrical Contractors
                            </h2>
                            <p className='text-lg text-gray-400 my-12'>We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians.</p>
                            <p className='text-lg text-gray-400'>We started out in 2002. We are locally owned and operated which makes our services causal as they are done by friendly and helpful technicians. Our mission is to service each client with a highly trained and courteous technician that is dependable and always trustworthy.

                            </p>
                            <div className='my-5 lg:flex items-center'>
                                <div className='flex items-center'>
                                <div className='bg-orange-500 rounded-full flex justify-center items-center w-20 h-20'>
                                    <p className='text-white text-3xl font-extrabold'><BsFillPeopleFill/></p>
                                </div>
                                    <div className='ml-5'>
                                        <h1 className='text-3xl font-bold'>24</h1>
                                        <p className='text-xl'>Skilled & Certified</p>
                                        <p className='text-xl'>Electricians</p>
                                </div>
                            </div>
                                <div className='flex items-center lg:ml-44'>
                                <div className='bg-orange-500 rounded-full flex justify-center items-center w-20 h-20'>
                                    <p className='text-white text-3xl font-extrabold'><FaCertificate/></p>
                                </div>
                                    <div className='ml-5'>
                                        <h1 className='text-3xl font-bold'>10</h1>
                                        <p className='text-xl'>certified organizer</p>
                                        
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                    <div>

                        <div>
                            <div>
                                <img className=' w-[500px]  lg:absoulte' src={uper} alt="" />
                                <img className='lg:relative mt-0 lg:mt-[-100px] ml-0 lg:ml-64' src={down} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experienced;