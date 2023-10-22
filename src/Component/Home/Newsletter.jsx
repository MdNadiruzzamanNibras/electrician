import { AiOutlineMail} from 'react-icons/ai';
AiOutlineMail
const Newsletter = () => {
    return (
        <div className="container mx-auto">
            <div className="bg-orange-500 ">
                <div className="lg:flex lg:justify-center items-center py-14 mx-12">
                    <div className="mr-32 text-white font-bold text-xl">
                        <p>Subscribe to Our Newsletter

</p>
                    </div>
                    <div>
                          <input type="text" placeholder="Type your email" className="input input-bordered w-full max-w-xs focus:outline-none" />

                    </div>
                    <div className='ml-20'>
                        <button className='flex items-center px-4 py-2 border
                         border-orange-500 bg-black text-white hover:bg-white hover:text-orange-500'><AiOutlineMail /> <span> Give Us a Call</span></button>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Newsletter;