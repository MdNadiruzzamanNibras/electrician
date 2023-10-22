
const RequestToday = () => {
    return (
        <div className="container mx-auto px-2 mb-10">
            <div>
                <div className="bg-orange-500 rounded-t-lg mt-2 w-64">
                    <h4 className="text-center  text-xl font-bold text-white px-5 py-3">Request Service Today
</h4>
                </div>
 <div className="bg-black h-fit py-2 lg:h-40 text-white sm:flex sm:items-center sm:justify-center">
    <div className="grid pl-3 grid-cols-1 lg:grid-cols-5 gap-2 ml-4">
        <div><input type="text" placeholder="Your Name" className="input text-black input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="email" placeholder="Your Email" className="input  text-black input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="number" placeholder="Your Phone" className="input  text-black input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="date" placeholder="Date" className="input   text-black input-bordered focus:outline-none max-w-xs" /></div>
        <div><button className="btn bg-orange-500 text-white  duration-700 hover:bg-white hover:text-orange-500">Get Service</button></div>
    </div>
</div>

                </div>
            </div>
        
    );
};

export default RequestToday;