import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GoodDetails = ({ product }) => {
    const { _id, service_name, service_image, price, service_description } = product
    return (
        <div className=''>
<div className="card lg:w-96 glass">
  <figure> <PhotoProvider>
                        <div className="">
                            <PhotoView key={_id} src={service_image} >
                                <img src={service_image} alt="" className="w-96 h-60  rounded-lg shadow-2xl" />
                            </PhotoView>

                        </div>
                    </PhotoProvider></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl font-bold">{service_name}</h2>
    <h2 className='text-yellow-500 '>Price:{price}TK/KG</h2>
    <p className="lg:hidden">{service_description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/checkout/${_id}`}><button className="btn btn-primary ">View Details</button>  </Link></button>
    </div>
  </div>
</div>


           
        </div>
    );
};

export default GoodDetails;
