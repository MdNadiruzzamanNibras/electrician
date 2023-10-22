import main from '../../assets/images/abuotUs/main.jpg'
import trams from '../../assets/images/abuotUs/termers.jpg'
import { BsCheck2 } from 'react-icons/bs';

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div className=' mb-20 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='lg:mt-96'>
                    <img src={main} className='lg:w-[650px] lg:h-[600px] lg:absolute lg:mt-[-350px] lg:ml-[200px]' alt="" />
                    <img src={trams} className='lg:relative lg:w-[450px] ' alt="" />
                </div>
                <div className='lg:ml-28 lg:mt-28'>
                    <div >
                        <h5 className='ml-2 text-lg font-semibold text-orange-500'>About Us</h5>
                        <h1 className='text-5xl font-semibold mt-5 mb-8'>Outstanding Residential & Commercial Services</h1>
                        <p>All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.</p>
                        <div>
                            <p className='flex items-center'><span className='text-orange-500 text-lg font-extrabold'><BsCheck2/></span> <span className='ml-3'>Full-service electrical layout, design</span></p>
                            <p className='flex items-center'><span className='text-orange-500 text-lg font-extrabold'><BsCheck2/></span> <span className='ml-3'>Wiring and installation/upgrades</span></p>
                            <p className='flex items-center'><span className='text-orange-500 text-lg font-extrabold'><BsCheck2/></span> <span className='ml-3'>Emergency power solutions (generators)</span></p>
                            <p className='flex items-center'><span className='text-orange-500 text-lg font-extrabold'><BsCheck2/></span> <span className='ml-3'>Virtually any electrical needs you have – just ask!</span></p>
                           


                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;