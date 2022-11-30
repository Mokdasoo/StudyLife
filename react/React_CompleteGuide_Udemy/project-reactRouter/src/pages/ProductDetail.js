import {useParams} from 'react-router-dom';


const ProductDetail = () => {
    document.querySelector(".app--sidebar-column--2t0E8")
    const params = useParams();

    return(
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};
 
export default ProductDetail;