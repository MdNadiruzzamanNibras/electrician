import {BsFillTelephoneFill } from 'react-icons/bs';

const Client = () => {
    return (
        <div className="container mx-auto my-14">
            <div className='mt-48 lg:ml-64'>
                <div >
                    <div className="w-96 lg:relative ml-5 bg-base-100 rounded-lg shadow-md lg:w-[500px] flex justify-center items-center">
                        <div className="my-12 mx-24">
                            <p className="text-orange-500 my-4 text-xl">What Our Clients Say</p>
                            <h3 className="font-bold my-7 text-3xl">Professional, Reliable & Cost Effective</h3>
                            <p className="text-lg">We've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable. We wouldn't have any hesitation in recommending their services.</p>
                            <h5 className="font-bold text-3xl mt-10">- Teresa and Kevin K.</h5>
                        </div>
                    </div>

                    
                        <div className="bg-orange-500 lg:absolute lg:mt-[-300px] lg:ml-[460px] w-96 flex justify-center text-white items-center">
                            <div className='my-4 mx-10'>
                                <h3 className='text-3xl font-bold'>Emergency Service</h3>
                                <p>If this is an emergency outside of normal business hours, call us</p>
                                <h3 className='text-3xl font-bold flex items-center'><span><BsFillTelephoneFill/></span><span className='ml-2'>8801783014828</span></h3>
                            </div>
                        </div>





                </div>
            </div>
        </div>
    );
};

export default Client;