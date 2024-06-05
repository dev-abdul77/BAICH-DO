import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import { NavLink } from "react-router-dom";
function Dashboardpage()
{
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const [userImage,setUserImage]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [userAddress,setUserAddress]=useState("");
    const [userMobile,setUserMobile]=useState("");

    
    const [favcount,setfavcount]=useState(0);
    const [wincount,setwincount]=useState(0);
    const [bidcount,setbidcount]=useState(0);

    
    const [mybidsdata,setmybidsdata]=useState([]);
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
            setUserName(res.data.name);
            setUserImage(res.data.userImage);
            setUserEmail(res.data.email);
            setUserAddress(res.data.userAddress);
            setUserMobile(res.data.userMobile);
            const values={
                userId:res.data.userid
            }
            axios.post('http://localhost:3001/getdashboarddata',values)
            .then(res=>{
                if(res.data.status=='ok')
                {
                    setfavcount(res.data.totalfvt);
                    setwincount(res.data.itemsWon);
                    setbidcount(res.data.totalBids);
                    
                }
                else{

                }
            })
            const vals={
                userid:res.data.userid
            }
            axios.post('http://localhost:3001/getmybids',vals)
            .then(res=>{
                if(res.data.status=='notsucces')
                {
                    console.log("Ieserror");
                }
                else{
                    console.log(res.data.data);
                    for(let i=0;i<res.data.data.length;i++)
                        {
                            res.data.data[i].startingTime=new Date(res.data.data[i].startingTime);
                            res.data.data[i].endingTime=new Date(res.data.data[i].endingTime);
                        }
                    setmybidsdata(res.data.data)
                    
                }
            }).catch((error) => {
                console.error('Error fetching data:', error);
              });
            }
            
        })
    },[])
    
    const backgroundImageUrl = `images/hero-bg.png`; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);

  },[])
    return (
        <>
        <MainNavigation></MainNavigation>

        {loading && <><div className="overlayer" id="overlayer">
        <div className="loader">
            <div className="loader-inner"></div>
        </div>
    </div>
    <div className="overlay"></div></>
    }
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
<div class="cart-sidebar-area">
    <div class="top-content">
        <a href="index.html" class="logo">
            <img src="dashboardimages/logo2.png" alt="logo"/>
        </a>
        <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
    </div>
    <div class="bottom-content">
        <div class="cart-products">
            <h4 class="title">Shopping cart</h4>
            <div class="single-product-item">
                <div class="thumb">
                    <a href="#0"><img src="dashboardimages/shop01.jpg" alt="shop"/></a>
                </div>
                <div class="content">
                    <h4 class="title"><a href="#0">Color Pencil</a></h4>
                    <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                    <a href="#" class="remove-cart">Remove</a>
                </div>
            </div>
            <div class="single-product-item">
                <div class="thumb">
                    <a href="#0"><img src="dashboardimages/shop02.jpg" alt="shop"/></a>
                </div>
                <div class="content">
                    <h4 class="title"><a href="#0">Water Pot</a></h4>
                    <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                    <a href="#" class="remove-cart">Remove</a>
                </div>
            </div>
            <div class="single-product-item">
                <div class="thumb">
                    <a href="#0"><img src="dashboardimages/shop03.jpg" alt="shop"/></a>
                </div>
                <div class="content">
                    <h4 class="title"><a href="#0">Art Paper</a></h4>
                    <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                    <a href="#" class="remove-cart">Remove</a>
                </div>
            </div>
            <div class="single-product-item">
                <div class="thumb">
                    <a href="#0"><img src="dashboardimages/shop04.jpg" alt="shop"/></a>
                </div>
                <div class="content">
                    <h4 class="title"><a href="#0">Stop Watch</a></h4>
                    <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                    <a href="#" class="remove-cart">Remove</a>
                </div>
            </div>
            <div class="single-product-item">
                <div class="thumb">
                    <a href="#0"><img src="dashboardimages/shop05.jpg" alt="shop"/></a>
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
<div class="hero-section style-2 pb-lg-400">
    <div class="container">
        <ul class="breadcrumb">
            <li>
            <NavLink to="/Home1">Home</NavLink>
            </li>
            <li>
            <NavLink to="/dashboard">My Account</NavLink>
            </li>
            <li>
                <span>Dashboard</span>
            </li>
        </ul>
    </div>
    
    <div class=" hero-bg bottom_center" style={sectionStyle}></div>
</div>
<section class="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-10 col-md-7 col-lg-4">
                <div class="dashboard-widget mb-30 mb-lg-0">
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
                            <span class="username"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9ef4f1f6f0def9f3fff7f2b0fdf1f3">{userEmail}</a></span>
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
                <div class="dashboard-widget mb-40">
                    <div class="dashboard-title mb-30">
                        <h5 class="title">My Activity</h5>
                    </div>
                    <div class="row justify-content-center mb-30-none">
                        <div class="col-md-4 col-sm-6">
                            <div class="dashboard-item">
                                <div class="thumb">
                                <NavLink  to={`/userbid`}> <img src="dashboardimages/01.png" alt="dashboard"/></NavLink>
                                </div>
                                <div class="content">
                                    <h2 class="title"><span>{bidcount}</span></h2>
                                    <h6 class="info">Total Bids</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="dashboard-item">
                                <div class="thumb">
                                <NavLink  to={`/winningbid`}>  <img src="dashboardimages/02.png" alt="dashboard"/></NavLink>
                                </div>
                                <div class="content">
                                    <h2 class="title"><span >{wincount}</span></h2>
                                    <h6 class="info">Items Won</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="dashboard-item">
                                <div class="thumb">
                                <NavLink  to={`/fvtbids`}> <img src="dashboardimages/03.png" alt="dashboard"/></NavLink>
                                </div>
                                <div class="content">
                                    <h2 class="title"><span >{favcount}</span></h2>
                                    <h6 class="info">Favorites</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                
    </div>
                <div class="dashboard-widget">
                    <h5 class="title mb-10">My Activity</h5>
                    <div class="dashboard-purchasing-tabs">
                        <ul class="nav-tabs nav">
                            <li>
                                <a href="#current" class="active" data-toggle="tab">My Bids</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane show active fade" id="current">
                                <table class="purchasing-table">
                                <thead>
                                        <tr><th>Item Name</th>
                                        <th>Item Type</th>
                                        <th>Bid Amount</th>
                                        <th>Starting Time</th>
                                        <th>Ending Time</th>
                                        <th>Starting Price</th>
                                    </tr></thead>
                                    <tbody>
                                                            
{mybidsdata.map((item) => (
                                        <tr>
                                            <td data-purchase="item">{item.name}</td>
                                            <td data-purchase="bid price">{item.type}</td>
                                            <td data-purchase="highest bid">{item.amount}</td>
                                            <td data-purchase="lowest bid">{item.startingTime.toLocaleTimeString()}</td>
                                            <td data-purchase="expires">{item.endingTime.toDateString()}</td>
                                            <td>{item.startingPrice}</td>
                                        </tr>))}
                        
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane show fade" id="pending">
                                <table class="purchasing-table">
                                    <thead>
                                        <tr><th>Item</th>
                                        <th>Bid Price</th>
                                        <th>Highest Bid</th>
                                        <th>Lowest Bid</th>
                                        <th>Expires</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                        <tr>
                                            <td data-purchase="item">2018 Hyundai Sonata</td>
                                            <td data-purchase="bid price">$1,775.00</td>
                                            <td data-purchase="highest bid">$1,775.00</td>
                                            <td data-purchase="lowest bid">$1,400.00</td>
                                            <td data-purchase="expires">7/2/2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
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
export default Dashboardpage;


