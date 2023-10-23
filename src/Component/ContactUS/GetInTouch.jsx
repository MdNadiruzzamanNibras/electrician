import { MdElectricBolt } from 'react-icons/md';


const GetInTouch = () => {
    
    return (
        <div className="container mx-auto px-2">
            <div>
                <div className="lg:w-[700px] mx-auto">
                    <div className="text-center">
                    <h4 className="text-orange-500 text-xl font-semibold">Contact Form
                    </h4>
                    <h2 className="text-4xl font-bold">Get In Touch with Us
                    </h2>
                    <p className="lg:w-[600px] text-gray-400 lg:text-lg mx-auto">Are you stumped by a home wiring project or problem? Fill out the form with the details of your situation and we can come to your aid.
                        </p>
                        <form  className="my-14">
                             <div>
            
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name*" required/>
        </div>  

                            <div className="grid grid-cols-1 my-8 lg:grid-cols-2 gap-4">
                            <div>
            
            <input type="email" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email*" required/>
                                </div>  
                                <div>
            
            <input type="Number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone Number*" required/>
        </div>  
                            </div>
                            <div>
            
            <textarea type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-20 pb-14" placeholder="Your Name*" required/>
                            </div>  
                            
                            <p className="text-gray-400 lg:text-lg text-center">All Electrical work must be done by a qualified licensed electrician.


                            </p>
                            <div className='flex justify-center my-6'>
                                <button className="px-5 py-2 text-white bg-orange-500 hover:text-orange-500 border-orange-500 border-2 hover:bg-white text-lg flex items-center"><span></span><MdElectricBolt/> <span className='ml-3'>Contact us</span></button>
                            </div>
                        </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;