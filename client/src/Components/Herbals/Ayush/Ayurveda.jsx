import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"

const Ayurveda = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
        </div>
      </div>
    );
  };
  

  export default Ayurveda;