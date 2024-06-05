
import { useEffect, useState } from 'react';
import OverLay from "../Components/overlay";
import { NavLink , useNavigate} from 'react-router-dom';
import axios from 'axios';
import MainNavigation from '../Components/MainNavigation';
function Product3Page()
{
    const navigate = useNavigate();
    const [data,setdata]=useState([]);
    const [userid,setUserid]=useState(0);
    const [favorites, setFavorites] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                navigate('/signin')

            }
            else
            {
            setUserid(res.data.userid);
            }
            
        })
    },[])
    useEffect(()=>{
    axios.get('http://localhost:3001/fetchalljewelryproduct')
        .then(res=>{
            if(res.data.status=='notsucces')
            {
                console.log("Ieserror");
            }
            else{
                console.log(res.data);
                for(let i=0;i<res.data.length;i++)
                    {
                        console.log("Hello")
                        res.data[i].StartingTime=new Date(res.data[i].StartingTime);
                        res.data[i].EndingTime=new Date(res.data[i].EndingTime);
                    }
                setdata(res.data)
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
          });
},[])
    const backgroundImageUrl = 'images/hero-bg.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  const FvtBids=(type,id)=>
    {
        const values={
            type:type,
            itemId:id,
            userid:userid
        }
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));

        axios.post('http://localhost:3001/addtofav',values)
        .then(res=>{
            if(res.data.status=="success")
            {
                
            }
    })
    }
    return (
    <>
    
<MainNavigation></MainNavigation>
    {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
    <div className="cart-sidebar-area">
        <div className="top-content">
            <a href="index.html" className="logo">
                <img src="product1images/logo2.png" alt="logo"/>
            </a>
            <span className="side-sidebar-close-btn"><i className="fas fa-times"></i></span>
        </div>
        <div className="bottom-content">
            <div className="cart-products">
                <h4 className="title">Shopping cart</h4>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="product1images/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Color Pencil</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="product1images/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Water Pot</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="product1images/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Art Paper</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="product1images/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Stop Watch</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="product1images/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Comics Book</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="btn-wrapper text-center">
                    <a href="#0" className="custom-button"><span>Checkout</span></a>
                </div>
            </div>
        </div>
    </div>
    <div className="hero-section style-2">
        <div className="container">
            <ul className="breadcrumb">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <a href="#0">Product</a>
                </li>
                <li>
                    <span>Jewelry</span>
                </li>
            </ul>
        </div>
        <div className=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section className="featured-auction-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div className="container">
            <div className="section-header cl-white mw-100 left-style">
                <h3 className="title">Bid on These Featured Auctions!</h3>
            </div>
            <div className="row justify-content-center mb-30-none">
                
{data.map((item) => (
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div className="auction-thumb">
                        <NavLink  to={`/productdetails/${item.ID}/jewelry`}><img src={`http://localhost:3001/`+item.File[0]} alt="car" height="200px" width="200px"/></NavLink>
                            
                        <a href="#" onClick={() =>FvtBids("jewelry",item.ID)} className="rating"><i className={favorites[item.ID] ? "fas fa-star" : "far fa-star"}></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                            <NavLink  to={`/productdetails/${item.ID}/jewelry`}>{item.Name}</NavLink>
                            </h6>
                           
                            
                            
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                    <i className="flaticon-alarm"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Date</div>
                                        <div className="amount">{item.StartingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Time  </div>
                                        <div className="amount">{item.StartingTime.toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-alarm"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Ending Date</div>
                                        <div className="amount">{item.EndingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Ending Time</div>
                                        <div className="amount">{item.EndingTime.toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    Starting Price
                                </div>
                                <span className="total-bids">{item.StartingPrice} $</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                
    ))}
            </div>
        </div>
        
    </section>
    </>)
}
    
export default Product3Page;