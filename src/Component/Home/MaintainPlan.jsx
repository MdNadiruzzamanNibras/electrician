import { AiFillHome} from 'react-icons/ai';
import { FaIndustry } from 'react-icons/fa';
import { GiElectricalResistance } from 'react-icons/gi';

const MaintainPlan = () => {
    return (
        <div className='container mx-auto my-6 lg:my-24'>
            <div>
                <div className='text-center'>
                    <h6 className='text-xl text-orange-500'>Save on the Service You Need
                </h6>
                <h2 className="text-3xl font-bold">Maintenance Plans</h2>
                <p className='text-lg w-full lg:w-[500px] mx-auto text-slate-400'>With an electrical maintenance plan, you won’t find yourself in a panic wondering who to call when you’re having problems with your electrical system.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-60'>
                    <div className="bg-base-100 shadow-md w-72">
                        <div className="my-4 mx-6 ">
                            <h1 className='text-orange-500  my-6 text-7xl flex justify-center font-extrabold'><AiFillHome/></h1>
                            <h1 className='text-2xl text-center font-bold my-7 '> Residential Service</h1>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Annual A/C inspection</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Annual electrical inspection</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Design-Build Services</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Design-Build Services</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Supply and install Sensor light</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Lighting Fixtures</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Replace hot plates</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Switchboard Upgrade</p>

                       </div>

                    </div>
                    <div className="bg-base-100 shadow-md w-72">
                        <div className="my-4 mx-6 ">
                            <h1 className='text-orange-500  my-6 text-7xl flex justify-center font-extrabold'><FaIndustry/></h1>
                            <h1 className='text-2xl text-center font-bold my-7 '> Commercial Service</h1>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Indoor/outdoor Lighting Installation</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Appliance & Fixture Installation</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Annual Electrical Inspection</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> New & Replacement Wiring</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Supply and install Sensor light</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Lighting Fixtures</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> 24-hour Response</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Surge Protection Maintenance</p>

                       </div>

                    </div>
                    <div className="bg-base-100 shadow-md w-72">
                        <div className="my-4 mx-6 ">
                            <h1 className='text-orange-500  my-6 text-7xl flex justify-center font-extrabold'><GiElectricalResistance/></h1>
                            <h1 className='text-2xl text-center font-bold my-7 '> Industrial Service</h1>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Annual A/C inspection</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Annual electrical inspection</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Design-Build Services</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Critical Installations</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Supply and install Sensor light</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Lighting Fixtures</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Replace hot plates</p>
                            <p  className='text-slate-400'><span className='text-orange-500 font-extrabold'>✓</span> Switchboard Upgrade</p>

                       </div>

                    </div>

                </div>
            </div>











        </div>
    );
};

export default MaintainPlan;