import MainNavigation from "../Components/MainNavigation";
import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function MyitemsPage()
{
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const [userImage,setUserImage]=useState("");
    const [userEmail,setUserEmail]=useState("");
    
    const [myitemsdata,setmyitemsdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                navigate('/signin')

            }
            else
            {
            console.log(res.data.userid);
            setUserid(res.data.userid);
            setUserName(res.data.name);
            setUserImage(res.data.userImage);
            setUserEmail(res.data.email);
            const values={
                userid:res.data.userid
            }
            axios.post('http://localhost:3001/fetchAllMyItems',values)
            .then(res=>{
                    if(res.data.status=='notsucces')
                    {
                        console.log("Ieserror");
                    }
                    else{
                        console.log(res.data.data)
                        for(let i=0;i<res.data.data.length;i++)
                            {
                                console.log("Hello")
                                res.data.data[i].startingTime=new Date(res.data.data[i].startingTime);
                                res.data.data[i].endingTime=new Date(res.data.data[i].endingTime);
                            }
                        setmyitemsdata(res.data.data)
                        
                    }
                })
        
            }
        })    
    },[])
    const deleteItem=(type,id)=>
        {
            const values={
                type:type,
                itemId:id
            }
            
    
            axios.post('http://localhost:3001/deleteitemsonidandtype',values)
            .then(res=>{
                if(res.data.status=="success")
                {
                      navigate(0)
                }
        })
        }
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
    return(
        <>
        <MainNavigation></MainNavigation>
        {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
        <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="fvtimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="fvtimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="fvtimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="fvtimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="fvtimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="fvtimages/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Comics Book</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="btn-wrapper text-center">
                    <a href="#0" class="custom-button"><span>Checkout</span></a>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-section style-2">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">My Account</a>
                </li>
                <li>
                    <span>My Items</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section class="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-7 col-lg-4">
                    <div class="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                        <div class="user">
                            <div class="thumb-area">
                                <div class="thumb">
                                 <img src={`http://localhost:3001/`+userImage} alt="user"/> 
                                </div>
                                <label for="profile-pic" class="profile-pic-edit"><i class="flaticon-pencil"></i></label>
                                <input type="file" id="profile-pic" class="d-none"/>
                            </div>
                            <div class="content">
                                <h5 class="title"><a href="#">{userName}</a></h5>
                                <span class="username"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c8a2a7a0a688afa5a9a1a4e6aba7a5">{userEmail}</a></span>
                            </div>
                        </div>
                        <ul class="dashboard-menu">
                        <li>
                        <NavLink to="/dashboard"><i class="flaticon-dashboard"></i>Dashboard</NavLink>
                        </li>
                        <li>
                        <NavLink to="/userprofile"><i class="flaticon-settings"></i>Personal Profile </NavLink>
                        </li>
                        <li>
                        <NavLink to="/userbid"><i class="flaticon-auction"></i>My Bids</NavLink>
                        </li>
                        <li>
                        <NavLink to="/winningbid"><i class="flaticon-best-seller"></i>Winning Bids</NavLink>
                        </li>
                        <li>
                        <NavLink to="/fvtbids"><i class="flaticon-star"></i>My Favorites</NavLink>
                        </li>
                        <li>
                        <NavLink to="/myitems"><i class="flaticon-dashboard"></i>My Items</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="dash-bid-item dashboard-widget mb-4">
                        <div class="header">
                            <h4 class="title">My Items</h4>
                        </div>
                    </div>
                    <div class="row mb-30-none justify-content-center">
                        
{myitemsdata.map((item) => (
                        <div class="col-sm-10 col-md-6">
                            <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                                <div class="auction-thumb">
                               
                        <NavLink  to={`/productdetails/${item.id}/${item.type}`}><img src={`http://localhost:3001/`+item.image[0]} alt="user" height="200px"/> </NavLink>
                                
                                </div>
                                <div class="auction-content">
                                <h6 className="title">
                            <ul><li><NavLink  to={`/productdetails/${item.id}/${item.type}`}>{item.name}</NavLink></li>
                            
                            </ul>
                            </h6>
                                    
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                    <i className="flaticon-alarm"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Date</div>
                                        <div className="amount">{item.startingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Time  </div>
                                        <div className="amount">{item.startingTime.toLocaleTimeString()}</div>
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
                                        <div className="amount">{item.endingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Ending Time</div>
                                        <div className="amount">{item.endingTime.toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    Starting Price
                                </div>
                                <span className="total-bids">{item.startingPrice} $</span>
                            </div>
                                           
                                    <div class="text-center">
                                    
                            <NavLink  to={`/edititems/${item.id}/${item.type}`} > <a href="#0" class="custom-button">Edit Item</a></NavLink>
                            <a href="#" class="custom-button" style={{width:130,marginLeft:20}} onClick={() =>deleteItem(item.type,item.id)} >Delete</a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
))}
                        </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
    )
}
export default MyitemsPage;
