import MainNavigation from "../Components/MainNavigation";
import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function UserProfile()
{
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const [userImage,setUserImage]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [userAddress,setUserAddress]=useState("");
    const [userMobile,setUserMobile]=useState("");
    
    const [userdob,setUserdob]=useState("");
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                navigate('/signin')

            }
            else
            {
                console.log(res.data.userdob)
            setUserid(res.data.userid);
            setUserName(res.data.name);
            setUserImage(res.data.userImage);
            setUserEmail(res.data.email);
            
            setUserAddress(res.data.userAddress);
            setUserMobile(res.data.userMobile);

//             const dateStr = res.data.userdob.split('T')[0]; // Extract only the date part
// const [year, month, day] = dateStr.split('-');
// const dd = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
setUserdob(res.data.userdob);
            }
            
        })
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
                <img src="userprofileimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="userprofileimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="userprofileimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="userprofileimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="userprofileimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="userprofileimages/shop05.jpg" alt="shop"/></a>
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
                    <span>Personal profile</span>
                </li>
            </ul>
        </div>
        <div class="hero-bg bottom_center" style={sectionStyle}></div>
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
                                <h5 class="title"><a href="#0">{userName}</a></h5>
                                <span class="username"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7d171215133d1a101c1411531e1210">{userEmail}</a></span>
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
                    <div class="row">
                        <div class="col-12">
                            <div class="dash-pro-item mb-30 dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Personal Details</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Name</div>
                                        <div class="info-value">{userName}</div>
                                    </li>
                                    <li>
                                        <div class="info-name">Address</div>
                                        <div class="info-value">{userAddress}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="dash-pro-item mb-30 dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Account Settings</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Language</div>
                                        <div class="info-value">English (United States)</div>
                                    </li>
                                    <li>
                                        <div class="info-name">Time Zone</div>
                                        <div class="info-value">(GMT-06:00) Central America</div>
                                    </li>
                                    <li>
                                        <div class="info-name">Status</div>
                                        <div class="info-value"><i class="flaticon-check text-success"></i> Active</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="dash-pro-item mb-30 dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Email Address</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Email</div>
                                        <div class="info-value"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="66070a0403141255525f26010b070f0a4805090b">{userEmail}</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="dash-pro-item mb-30 dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Phone</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Mobile</div>
                                        <div class="info-value">{userMobile}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="dash-pro-item dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Security</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Password</div>
                                        <div class="info-value">xxxxxxxxxxxxxxxx</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
export default UserProfile;