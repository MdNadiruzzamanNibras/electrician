
const RequestToday = () => {
    return (
        <div className="container mx-auto px-2">
            <div>
                <div className="bg-orange-500 rounded-t-lg mt-2 w-64">
                    <h4 className="text-center  text-xl font-bold text-white px-5 py-3">Request Service Today
</h4>
                </div>
                <div className="bg-black h-48  text-white lg:flex lg:items-center
                lg:justify-center flex-none">
    <div className="grid grid-cols-5 gap-2 ml-4">
        <div><input type="text" placeholder="Type here" className="input input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="text" placeholder="Type here" className="input input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="text" placeholder="Type here" className="input input-bordered focus:outline-none max-w-xs" /></div>
        <div><input type="text" placeholder="Type here" className="input input-bordered focus:outline-none max-w-xs" /></div>
        <div><button className="btn">Get Service</button></div>
    </div>
</div>

                </div>
            </div>
        
    );
};

export default RequestToday;