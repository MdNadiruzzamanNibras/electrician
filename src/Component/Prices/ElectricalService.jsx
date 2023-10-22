

const ElectricalService = () => {
    return (
        <div className="container mx-auto">
            <div >
                <div className="text-center">
                    <h4 className="text-xl font-bold text-orange-500">Our Rates
                    </h4>
                    <h2 className="text-4xl font-bold ">Electrical Service Prices
                    </h2>
                    <p className="w-[600px] mx-auto text-lg text-gray-400">Our prices for all of our electrical services are as competitive as anywhere in the market place. All of our prices include labour and materials but exclude VAT.
</p>
                </div>
                <div>
                     <div className="overflow-x-auto">
  <table className="table">
   
    <thead className="bg-orange-500">
      <tr className="text-lg text-white">
        
                                    <th>Common Job	</th>
                                    <th></th>
        <th>Cost*	</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Install ceiling fan	</td>
                                    <td></td>
        <td>$100	</td>
        <td>You supply ceiling fan to suit your home.
</td>
      </tr>
     
      <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Supply ceiling fan	</td>
                                    <td></td>
        <td>	$75</td>
        <td>You supply house to bolt it to.
</td>
      </tr>
      
      <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Install new double power	</td>
                                    <td></td>
        <td>$90	</td>
        <td>Includes labour, cable, gpo, everything
</td>
      </tr>
      <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Install double power outside	</td>
                                    <td></td>
        <td>$150	</td>
        <td>Includes everything + weatherporoof gpo

</td>
                                </tr>
                                <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Install new light in new location	</td>
                                    <td></td>
        <td>$90	</td>
        <td>Includes everything except new light
</td>
      </tr>
                                {/* <tr className="text-lg font-semibold text-gray-400">
        
                                    <td>Cy Ganderton</td>
                                    <td></td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
    </tbody>
  </table>
</div>
               </div>
            </div>
        </div>
    );
};

export default ElectricalService;