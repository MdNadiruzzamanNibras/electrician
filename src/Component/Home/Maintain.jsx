import {BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineElectricBolt } from 'react-icons/md';

const Maintain = () => {
    return (
        <div>
            <div className="container mx-auto my-24">
            <div className="flex justify-center items-center my-14 ">
                <div className="w-[500px] bg-base shadow-lg px-20 py-10 ">
                        <div className="">
                             <div className="border-l-4 border-orange-500">
                        <h1 className=" pl-16 text-3xl font-bold">Do you Need Help
With Electrical
Maintenance?</h1>
                        </div>
                   </div>
                        <p className=" my-7 text-lg">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!

                        </p>
                        <div className='flex justify-between'>
                            <button className='flex items-center px-4 py-2 border border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500'><BsTelephoneFill/> <span> Give Us a Call</span></button>
                            <button className='flex items-center px-4 py-2 border border-black
                            bg-black  text-white hover:bg-white hover:text-black'><MdOutlineElectricBolt /> <span> Free Estimate</span></button>
</div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Maintain;