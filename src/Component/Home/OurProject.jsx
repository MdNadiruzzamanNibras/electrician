import cellinLamp from '../../assets/images/ourProject/cellinLamp.jpg'
import homeService from '../../assets/images/ourProject/homeService.jpg'
import meeting from '../../assets/images/ourProject/meeting_room.jpg'
import office from '../../assets/images/ourProject/office_design.jpg'
import resturant from '../../assets/images/ourProject/resturant.jpg'
import chair from '../../assets/images/ourProject/chair.jpg'
import room_design from '../../assets/images/ourProject/room_design.jpg'
import the_lightHub from '../../assets/images/ourProject/the_lightHub.jpg'
import Y from '../../assets/images/ourProject/Y Pendant Light.jpg'
import Zs from '../../assets/images/ourProject/Zsjpdp.jpg'

const OurProject = () => {
    return (
        <div className="container mx-auto">
            <div className="my-20">
                <h6 className="text-center text-lg font-semibold text-orange-500">@electricians</h6>
                <h2 className="text-center text-4xl font-bold ">Our Projects
                </h2>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-5 my-8'>
                    <div>
                        <img src={Y} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={cellinLamp} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={room_design} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={resturant} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={meeting} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={homeService} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={Zs} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={office} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={chair} className='w-64 h-60' alt="" />
                    </div>
                    <div>
                        <img src={the_lightHub} className='w-64 h-60' alt="" />
                    </div>
</div>
            </div>
        </div>
    );
};

export default OurProject;