import twentyfor from '../../assets/images/AboutUsRoute/reasonForCall/twentyFourjpg.jpg'
import lowprice from '../../assets/images/AboutUsRoute/reasonForCall/lowPrice.jpg'
import calcutar from '../../assets/images/AboutUsRoute/reasonForCall/calculator.jpg'

const ReasonForCall = () => {
    return (
        <div className="container mx-auto px-2">
            <div className="my-20">
                <div className="text-center">
                    <h6 className="text-orange-500 ">
                        Our Advantages

                    </h6>
                    <h1 className="text-4xl font-bold text-black mt-2 mb-4">Reasons You Should Call Us
                    </h1>       
                    <p className='text-lg text-gray-400 mx-auto md:w-[600px]'>Electrician is your single source for a complete range of high-quality electrical services, including design/build, engineering and maintenance.
</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='bg-white shadow-xl w-80 pl-8 py-8'>
                        <div className='flex items-center'>
                            <div><img src={twentyfor} alt="" /></div>
                            <div className='ml-3'><h1 className='text-2xl font-bold '>24/7 Emergency</h1>
                          <h1 className='text-2xl font-bold '>Services</h1></div>
                        </div>
                        <p className='ml-3'>24/7 emergency electrician you can trust.

</p>
                    </div>
                    <div className='bg-white shadow-xl w-80 pl-8 py-8'>
                        <div className='flex items-center'>
                            <div><img src={calcutar} alt="" /></div>
                            <div className='ml-3'><h1 className='text-2xl font-bold '>Free Estimates
</h1>
                          </div>
                        </div>
                        <p className='ml-3'>Yes, we offer free estimates for electrical additions or replacements.



</p>
                    </div>
                    <div className='bg-white shadow-xl w-80 pl-8 py-8'>
                        <div className='flex items-center'>
                            <div><img src={lowprice} alt="" /></div>
                            <div className='ml-3'><h1 className='text-2xl font-bold '>
Low Price</h1>
                          <h1 className='text-2xl font-bold '>Guarantee</h1></div>
                        </div>
                        <p className='ml-3'>We strive to offer the lowest price on the market.

</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonForCall;