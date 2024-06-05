import MainNavigation from "../Components/MainNavigation";
import OverLay from "../Components/overlay";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
function ProductDetailsPage() {
    const navigate = useNavigate();
    const[hours,setHours]=useState();
    const[minutes,setminutes]=useState();
    const[seconds,setseconds]=useState();
    const [startDate,setStartDate]=useState("");
    const [startTime,setStartTime]=useState("");
    const [errorMsg,seterrorMsg]=useState(false);
    const [bidIncreament,setbidIncreament]=useState(0);
    const [endTime , setEndTime] = useState()
    const [bidhistory,setbidhistory]=useState([]);
    const [timeLeft, setTimeLeft] = useState({})
    const [timeEnd , setTimeEnd] = useState(false);
    
    const [totalBiders,settotalBiders]=useState(0);

    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const[userImage,setUserImage]=useState("");
    axios.defaults.withCredentials=true;
    const calculateTimeLeft = (targetDate) => {
        const difference = new Date(targetDate) - new Date();
        console.log("Ending date is: ",targetDate)
        console.log("difference is: ",difference)
        let timeLeft = {};
    
        if (difference > 0) {
          //difference*=-1;  
          timeLeft = {
            days: Math.floor((difference/(1000*60*60*24))),
            hours: Math.floor((difference / (1000 * 60 * 60))%24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
          console.log("Time left is: ",timeLeft)
        } else {
            console.log("in else")
          timeLeft = { hours: 0, minutes: 0, seconds: 0 };
          setend(true)
        }
    
        return timeLeft;
      };
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                navigate("/signin")
            }
            console.log("HELLOHELLO")
            console.log(res.data.userImage);
            setUserid(res.data.userid);
            setUserName(res.data.name);
            setUserImage(res.data.userImage);     
        })
    },[])
    const [bidHistory,setBidHistory]=useState([]);
    const { id, type } = useParams();
    const [data,setData]=useState([]);
    const[im,setIm]=useState([]);


    const [car,setCar]=useState(true);
    const [jewelry,setJewelry]=useState(false);
    const [house,setHouse]=useState(false);
    const [bidamount,setBidAmount]=useState(0);
    
    const [totalBids,setTotalBids]=useState(0);
    const [timeStart,settimeStart]=useState(false);
    
    const [end,setend]=useState(false);

    const makePayment = async (itemPrice,itemName)=>{
        const stripe = await loadStripe('pk_test_51PLWbLSFjZBdM15RW6Hn1xKE1ADVdSzLlmf2cQSsJLcTrPmq4EJxsGH5uuZmaQBZlbipwBA1OOP4ZXU3lEcTJw1m00lsiMey6m');
        const values = {price:itemPrice , name:itemName}
        console.log("values: ",values)
        let session;
        axios.post('http://localhost:3001/stripePaymentSession',values)
                    .then(res=>{
                        const id= res.data.id
                        const result = stripe.redirectToCheckout({
                            sessionId:id
                        })
                    })
      }
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/product/${id}/${type}`)
            .then(res=>{
                if(res.data.status=='notsucces') 
                {
                    console.log("Ieserror");
                }
                else
                {
                    console.log("response is: ",res.data);
                    setbidIncreament(res.data.data[0].bidIncreament);
                    
                    var eshoooo="";
                    if(res.data.totalBidders<10)
                    {
                        eshoooo="0";
                    }
                    eshoooo=eshoooo+res.data.totalBidders;
                    settotalBiders(parseInt(eshoooo)) ;
                    var startingTime=new Date(res.data.data[0].StartingTime)
                    var endingTime=new Date(res.data.data[0].EndingTime)
                    setEndTime(res.data.data[0].EndingTime)
                    setTimeLeft(calculateTimeLeft(endingTime))

                    var hour="";
                    var min="";
                    var sec="";
                    if(startingTime.getHours()<10)
                    {
                        hour="0";
                    }
                    if(startingTime.getMinutes()<10)
                    {
                        min="0";
                    }
                    if(startingTime.getSeconds()<10)
                    {
                        sec="0";
                    }
                    hour=hour+startingTime.getHours();
                    min=min+startingTime.getMinutes();
                    sec=sec+startingTime.getSeconds();

                    setHours(hour);
                    setminutes(min);
                    setseconds(sec);
                    setStartDate(startingTime.toDateString());
                    setStartTime(startingTime.getTime());
                    var currentTime=new Date();
                    if(currentTime<startingTime || currentTime>endingTime)
                    {
                     settimeStart(true);
                     
                    }
                    if(currentTime>endingTime)
                    {
                        console.log("Sayhello");
                        setend(true)
                    }
                    console.log(res.data);
                    setData(res.data.data)

                    
                    if(res.data.totalBids>0)
                    {
                        setCurrentBidPrice(res.data.price);
                        setTotalBids(res.data.totalBids);
                    }
                    else{
                    setCurrentBidPrice(res.data.data[0].StartingPrice)
                    }
                }
            }).catch((error) => {
                console.error('Error fetching data:', error);
              });

    },[id])
    const [currentBidPrice,setCurrentBidPrice]=useState(0)

    useEffect(()=>{
    if(type=="carproduct")
    {
        setCar(true);
        setHouse(false);
        setJewelry(false);
    }
    else if(type=="jewelry")
    {
        setCar(false);
        setJewelry(true);
        setHouse(false);
    }
    else if(type=="house")
    {
        setCar(false);
        setHouse(true);
        setJewelry(false);
    }
},[car,jewelry,house])
    const backgroundImageUrl = '/images/hero-bg.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  const bidSubmit=(event)=>{
    event.preventDefault();
    console.log("hel")
    console.log(bidIncreament);
    console.log(currentBidPrice);
    console.log(bidamount)

    // Assuming you have a JavaScript Date object
    const currentDate = new Date();
    console.log(currentBidPrice+bidIncreament)

    if((currentBidPrice+bidIncreament)>bidamount)
    {
        seterrorMsg(true);
        return;
    }
    seterrorMsg(false);
    // Get the year, month, day, hour, minute, and second components
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(userImage)
    console.log("Here");

    const values =  {
        amount :bidamount,
        userId: userid,
        itemID: data[0].ID,
        type: type,
        time:formattedDate ,
        userName:userName,
        userImage:userImage
    };
    axios.post('http://localhost:3001/submitbid', values).then(
        res=>{
            
            setCurrentBidPrice(parseInt(res.data.currentBidPrice));
            setTotalBids(parseInt(res.data.totalBids))
            settotalBiders(parseInt(res.data.totalBidders))
        }
    )

  }
  const bidchangehandler=(event)=>{
    setBidAmount(event.target.value);
}
const his=()=>{
    const values =  { 
        itemID: data[0].ID,
        type:type
    };
    console.log(data[0].ID);
    axios.post('http://localhost:3001/getBidHistoryForAProduct', values).then(
        res=>{
            console.log(res.data);
            for(let i=0;i<res.data.length;i++)
                {
                    console.log("Hello")
                    res.data[i].Time=new Date(res.data[i].Time);
                }
            setBidHistory(res.data);
            console.log("bid history is: ",res.data)
        }
    )

}

useEffect(()=>{
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime));
          }, 1000);
      
          return () => clearInterval(timer);
    })



  return (
    <>
    <MainNavigation></MainNavigation>
     {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
    
    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="/prodetailsimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="/prodetailsimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="/prodetailsimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="/prodetailsimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="/prodetailsimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="/prodetailsimages/shop05.jpg" alt="shop"/></a>
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
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>{type} detail</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    {car && <div>{data.map((item) => (
    
    
    
    <section class="product-details padding-bottom mt--240 mt-lg--440">
    <div class="container">
        <div class="product-details-slider-top-wrapper">
            <div class="product-details-slider owl-theme owl-carousel" id="sync1">
                {
                    item.Picture.map((items)=>(
                        <div class="slide-top-item">
                    <div class="slide-inner">
                        <img height="500px" src={`http://localhost:3001/`+items} alt="product"/>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
        <div class="product-details-slider-wrapper">
            <div class="product-bottom-slider owl-theme owl-carousel" id="sync2">
                {
                    item.Picture.map((items)=>(
                        <div class="slide-bottom-item">
                        <div class="slide-inner">
                            <img height="100px" src={`http://localhost:3001/`+items} alt="product"/>
                        </div>
                    </div>
                    ))
                }
               
            </div>
            
        </div>
             
            <div class="row mt-40-60-80">
                <div class="col-lg-8">
                    <div class="product-details-content">
                        <div class="product-details-header">
                            <h2 class="title">{item.Name}</h2>
                            <ul>
                                <li>Listing ID: 14076242</li>
                                <li>Item #: {item.ID}</li>
                            </ul>
                        </div>
                        {!end &&
                        <ul class="price-table mb-30">
                            
                        {!timeStart &&
                            <li class="header">
                                <h5 class="current">Current Bid Price</h5>
                                <h3 class="price">{currentBidPrice}</h3>
                            </li>}
                            {timeStart &&
                            <div>
                            <li class="header">
                                <h5 class="current">Bid Starting at...</h5>
                                <h3 class="price">{startDate}</h3>
                            </li>

                            <li class="header">
                            <h5 class="current">On</h5>
                            <h3 class="price">{hours}h:{minutes}m:{seconds}s</h3>
                        </li>
                        </div>
                            
                            }
                            <li>
                                <span class="details">Starting Price</span>
                                <h5 class="info">{item.StartingPrice}</h5>
                            </li>
                            <li>
                                <span class="details">Bid Increment (US)</span>
                                <h5 class="info">RS {bidIncreament}</h5>

                            </li>
                        </ul>}
                        {end &&
                        
                        <ul class="price-table mb-30">
                            <li class="header">
                                <h5 class="current">Bid Finishes</h5>
                             </li>
                             <li>
                             <h5 class="current">Winning amount</h5>
                                <h5 class="info">RS {currentBidPrice}</h5>
                             </li>
                            
                            
                        </ul>}
                        {!timeStart &&
                        <div class="product-bid-area">
                            {
                                endTime? (<form class="product-bid-form" onSubmit={bidSubmit}>
                                <div class="search-icon">
                                    <img src="/prodetailsimages/search-icon.png" alt="product"/>
                                </div>
                                <input type="text" placeholder="Enter you bid amount"  onChange={bidchangehandler}/>
                                <button type="submit" class="custom-button">Submit a bid</button>
                            </form>):(<p>Time ended for auction</p>)
                            }
                            
                        </div>}
                        <br></br><br></br>
                        {errorMsg && <p style={{ color: 'red' }}>New bid amount should have increament of {bidIncreament} from previous</p>}
                        <div class="buy-now-area">
                            <a href="#0" onClick={()=>(makePayment(item.purchase,item.Name))} class="custom-button">Buy Now: RS {item.purchase}</a>
                            <a href="#0" class="rating custom-button active border"><i class="fas fa-star"></i> Add to Wishlist</a>
                            <div class="share-area">
                                <span>Share to:</span>
                                <ul>
                                    <li>
                                        <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="product-sidebar-area">
                        <div class="product-single-sidebar mb-3">
                            <h6 class="title">This Auction Ends in:</h6>
                            <div class="countdown">
                                <div>
                                    <p>{timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s</p>
                                </div>
                            </div>
                            <div class="side-counter-area">
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon1.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBiders}</span></h3>
                                        <p>Total Bidders</p>
                                    </div>
                                </div>
                                
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon3.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBids}</span></h3>
                                        <p>Total Bids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#0" class="cart-link">View Shipping, Payment &amp; Auction Policies</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-menu-area mb-40-60 mt-70-100">
            <div class="container">
                <ul class="product-tab-menu nav nav-tabs">
                    <li>
                        <a href="#details" class="active" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab1.png" alt="product"/>
                            </div>
                            <div class="content">Description</div>
                        </a>
                    </li>
                    <li>
                        <a href="#delevery" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab2.png" alt="product"/>
                            </div>
                            <div class="content">Delivery Options</div>
                        </a>
                    </li>
                    <li>
                        <a href="#history" data-toggle="tab" onClick={his} >
                            <div class="thumb">
                                <img src="/prodetailsimages/tab3.png" alt="product"/>
                            </div>
                            <div class="content">Bid History</div>
                        </a>
                    </li>
                    <li>
                        <a href="#questions" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab4.png" alt="product"/>
                            </div>
                            <div class="content">Questions </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="details">
                    <div class="tab-details-content">
                        <div class="header-area">
                            <h3 class="title">{item.Name}</h3>
                            <div class="item">
                                <table class="product-info-table">
                                    <tbody>
                                        <tr>
                                            <th>Condition</th>
                                            <td>{item.Conditionn}</td>
                                        </tr>
                                        <tr>
                                            <th>Mileage</th>
                                            <td>{item.Mileage}</td>
                                        </tr>
                                        <tr>
                                            <th>Year</th>
                                            <td>09-2017</td>
                                        </tr>
                                        <tr>
                                            <th>Engine</th>
                                            <td>{item.Engine}</td>
                                        </tr>
                                        <tr>
                                            <th>Fuel</th>
                                            <td>{item.Fuel}</td>
                                        </tr>
                                        <tr>
                                            <th>Transmission</th>
                                            <td>{item.Transmission}</td>
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <td>{item.Color}</td>
                                        </tr>
                                        <tr>
                                            <th>Doors</th>
                                            <td>{item.Doors}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">NYC Fleet / DCAS units may be located at either of two locations:</h5>
                                <ul>
                                    <li>Brooklyn, NY (1908 Shore Parkway)</li>
                                    <li>Medford, NY (66 Peconic Ave)</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">This unit is located at:</h5>
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Acceptance of condition - buyer inspection/preview</h5>
                                <p>Vehicles and equipment often display significant wear and tear. Assets are sold AS IS with no warranty, express or implied, and we highly recommend previewing them before bidding. The preview period is the only opportunity to inspect an asset to verify condition and suitability. No refunds, adjustments or returns will be entertained. </p>
                                <p>Vehicle preview inspections of the vehicle can be done at the below location on Monday and Tuesday from 10am - 2pm. See Preview Rules Here.</p>                                
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Legal Notice</h5>
                                <p>Vehicles may not be driven off the lot except with a dealer plate affixed. By law, vehicles are not permitted to be parked on or to drive on the streets of New York without registration and plates registered to the vehicle. If the buyer cannot obtain the required registration and plates prior to pick up, they should have the vehicle towed at their own expense. The buyer should have the vehicle towed at their own expense.</p>
                                <p>Condition: Untested - Sold As-Is</p>
                                <p>Employees of Baich-Do, its subcontractors and affiliated companies, employees of the NYC Government and those bidding on behalf of PropertyRoom.com, its subcontractors and affiliated companies and employees of the NYC Government are not permitted to bid on or purchase NYC Fleet/DCAS assets. </p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Condition</h5>
                                <p>This ASSET is being listed on behalf of a law enforcement agency or other partner ("SELLER") by PropertyRoom.com on a Sold AS IS, WHERE IS, WITH ALL FAULTS basis, with no representation or warranty from PropertyRoom.com or SELLER. In many cases, the car, boat, truck, motorcycle, aircraft, mowers/tractors, etc. ("ASSET") sold on PropertyRoom.com comes from seizure or forfeiture, and the SELLER typically does not possess use-based knowledge of the ASSET. Further, PropertyRoom.com does not physically inspect the ASSET and cannot attest to actual working conditions. PropertyRoom.com and SELLER gather information about the ASSET from authoritative sources; still, errors may appear from time to time in the listing. PropertyRoom.com cautions any website user, shopper, bidder, etc. ("BUYER") to attempt to confirm, with us, information material to a bidding/purchasing decision.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Bidding</h5>
                                <p>At this time Baich-DO only accepts bidders from the United States, Canada and Mexico on Vehicles and Heavy Industrial Equipment. The Bid Now button will appear on auctions where you are qualified to place a bid.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Buyer Responsibility</h5>
                                <p>The BUYER will receive an email notification from PropertyRoom.com following the close of an auction. After fraud verification and payment settlement, we will email the BUYER instructions for retrieving the ASSET from the Will-Call Location listed above.</p>
                                <p>All applicable shipping, logistics, transportation, customs, fees, taxes, export/import activities and all associated costs are the sole responsibility of the BUYER. No shipping, customs, export or import assistance is available from Baich-Do.</p>
                                <p>When applicable for a given ASSET, BUYER bears responsibility for determining motor vehicle registration requirements in the applicable jurisdiction as well as costs, including any fees, registration fees, taxes, etc., owed as a result of BUYER registering an ASSET; for example, BUYER bears sole responsibility for all title/registration/smog and other such fees.</p>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="delevery">
                    <div class="shipping-wrapper">
                        <div class="item">
                            <h5 class="title">shipping</h5>
                            <div class="table-wrapper">
                                <table class="shipping-table">
                                    <thead>
                                        <tr>
                                            <th>Available delivery methods </th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Customer Pick-up (within 10 days)</td>
                                            <td>RS0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Shipping (5-7 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                        <tr>
                                            <td>Expedited Shipping (2-4 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">Notes</h5>
                            <p>Please carefully review our shipping and returns policy before committing to a bid.
                            From time to time, and at its sole discretion, Baich Do may change the prevailing fee structure for shipping and handling.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="history">
                    
                    <div class="history-wrapper">
                        <div class="item">
                            <h5 class="title">Bid History</h5>
                            <div class="history-table-area">
                                <table class="history-table">
                                    <thead>
                                        <tr>
                                            <th>Bidder</th>
                                            <th>date</th>
                                            <th>time</th>
                                            <th>unit price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bidHistory.map((items)=>(
                                            <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={`http://localhost:3001/`+items.userImage}alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        {items.userName}
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">{items.Time.toDateString()}</td>
                                            <td data-history="time">{items.Time.toLocaleTimeString()}</td>
                                            <td data-history="unit price">{items.BidAmount}</td>
                                        </tr>


                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="questions">
                        <h5 class="faq-head-title">Frequently Asked Questions</h5>
                        <div class="faq-wrapper">
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to start bidding?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Security Deposit / Bidding Power </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Delivery time to the destination port </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to register to bid in an auction?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item open active">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How will I know if my bid was successful?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">What happens if I bid on the wrong lot?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section> 
     ))}
     </div>
    }

{house && <div>{data.map((item) => (
    <section class="product-details padding-bottom mt--240 mt-lg--440">
    <div class="container">
        
    <div class="product-details-slider-top-wrapper">
             <div class="product-details-slider owl-theme owl-carousel" id="sync1">
                {
                    item.picture.map((items)=>(
                        <div class="slide-top-item">
                     <div class="slide-inner">
                         <img height="500px" src={`http://localhost:3001/`+items}  alt="product"/>
                     </div>
                 </div>
                    ))
                }
                
             </div>
         </div>
         <div class="product-details-slider-wrapper">
             <div class="product-bottom-slider owl-theme owl-carousel" id="sync2">
             {
                    item.picture.map((items)=>(
                        <div class="slide-top-item">
                     <div class="slide-inner">
                         <img height="100px" src={`http://localhost:3001/`+items}  alt="product"/>
                     </div>
                 </div>
                    ))
            }
                  
             </div>
             
         </div>
           <div class="row mt-40-60-80">
                <div class="col-lg-8">
                    <div class="product-details-content">
                        <div class="product-details-header">
                            <h2 class="title">{item.Housename}</h2>
                            <ul>
                                <li>Listing ID: 14076242</li>
                                <li>Item #: {item.ID}</li>
                            </ul>
                        </div>
                        {!end &&
                        <ul class="price-table mb-30">
                        {!timeStart &&
                            <li class="header">
                                <h5 class="current">Current Bid Price</h5>
                                <h3 class="price">{currentBidPrice}</h3>
                            </li>}
                            {timeStart &&
                            <div>
                            <li class="header">
                                <h5 class="current">Bid Starting at...</h5>
                                <h3 class="price">{startDate}</h3>
                            </li>

                            <li class="header">
                            <h5 class="current">On</h5>
                            <h3 class="price">{hours}h:{minutes}m:{seconds}s</h3>
                        </li>
                        </div>
                            
                            }

                            <li>
                                <span class="details">Starting Price</span>
                                <h5 class="info">{item.startingprice}</h5>
                            </li>
                            <li>
                                <span class="details">Bid Increment (US)</span>
                                <h5 class="info">RS {bidIncreament}</h5>
                            </li>
                        </ul>}
                        {end &&
                        
                        <ul class="price-table mb-30">
                            <li class="header">
                                <h5 class="current">Bid Finishes</h5>
                             </li>
                             <li>
                             <h5 class="current">Winning amount</h5>
                                <h5 class="info">RS {currentBidPrice}</h5>
                             </li>
                            
                            
                        </ul>}
                        {!timeStart &&
                        <div class="product-bid-area">
                            {
                                endTime? (<form class="product-bid-form" onSubmit={bidSubmit}>
                                <div class="search-icon">
                                    <img src="/prodetailsimages/search-icon.png" alt="product"/>
                                </div>
                                <input type="text" placeholder="Enter you bid amount"  onChange={bidchangehandler}/>
                                <button type="submit" class="custom-button">Submit a bid</button>
                            </form>):(<p>{endTime}</p>)
                            }
                        </div>}
                        <br></br><br></br>
                        {errorMsg && <p style={{ color: 'red' }}>New bid amount should have increament of {bidIncreament} from previous</p>}
                        <div class="buy-now-area">
                            <a href="#0" onClick={()=>(makePayment(item.purchase,item.Name))} class="custom-button">Buy Now: RS {item.purchase}</a>
                            <a href="#0" class="rating custom-button active border"><i class="fas fa-star"></i> Add to Wishlist</a>
                            <div class="share-area">
                                <span>Share to:</span>
                                <ul>
                                    <li>
                                        <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="product-sidebar-area">
                        <div class="product-single-sidebar mb-3">
                            <h6 class="title">This Auction Ends in:</h6>
                            <div class="countdown">
                                <div>
                                    <p>{timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s</p>
                                </div>
                            </div>
                            <div class="side-counter-area">
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon1.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBiders}</span></h3>
                                        <p>Total Bidders</p>
                                    </div>
                                </div>
                                
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon3.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBids}</span></h3>
                                        <p>Total Bids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#0" class="cart-link">View Shipping, Payment &amp; Auction Policies</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-menu-area mb-40-60 mt-70-100">
            <div class="container">
                <ul class="product-tab-menu nav nav-tabs">
                    <li>
                        <a href="#details" class="active" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab1.png" alt="product"/>
                            </div>
                            <div class="content">Description</div>
                        </a>
                    </li>
                    <li>
                        <a href="#delevery" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab2.png" alt="product"/>
                            </div>
                            <div class="content">Delivery Options</div>
                        </a>
                    </li>
                    <li>
                        <a href="#history" data-toggle="tab" onClick={his} >
                            <div class="thumb">
                                <img src="/prodetailsimages/tab3.png" alt="product"/>
                            </div>
                            <div class="content">Bid History</div>
                        </a>
                    </li>
                    <li>
                        <a href="#questions" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab4.png" alt="product"/>
                            </div>
                            <div class="content">Questions </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="details">
                    <div class="tab-details-content">
                        <div class="header-area">
                            <h3 class="title">{item.Housename}</h3>
                            <div class="item">
                                <table class="product-info-table">
                                    <tbody>
                                        <tr>
                                            <th>Condition</th>
                                            <td>{item.conditionn}</td>
                                        </tr>
                                        <tr>
                                            <th>No of Floors</th>
                                            <td>{item.Floors}</td>
                                        </tr>
                                        <tr>
                                            <th>Year</th>
                                            <td>09-2017</td>
                                        </tr>
                                        <tr>
                                            <th>Bedrooms</th>
                                            <td>{item.bedrooms}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{item.Address}</td>
                                        </tr>
                                        <tr>
                                            <th>Plot Size</th>
                                            <td>{item.plotSize}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">NYC Fleet / DCAS units may be located at either of two locations:</h5>
                                <ul>
                                    <li>Brooklyn, NY (1908 Shore Parkway)</li>
                                    <li>Medford, NY (66 Peconic Ave)</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">This unit is located at:</h5>
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Acceptance of condition - buyer inspection/preview</h5>
                                <p>Vehicles and equipment often display significant wear and tear. Assets are sold AS IS with no warranty, express or implied, and we highly recommend previewing them before bidding. The preview period is the only opportunity to inspect an asset to verify condition and suitability. No refunds, adjustments or returns will be entertained. </p>
                                <p>Vehicle preview inspections of the vehicle can be done at the below location on Monday and Tuesday from 10am - 2pm. See Preview Rules Here.</p>                                
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Legal Notice</h5>
                                <p>Vehicles may not be driven off the lot except with a dealer plate affixed. By law, vehicles are not permitted to be parked on or to drive on the streets of New York without registration and plates registered to the vehicle. If the buyer cannot obtain the required registration and plates prior to pick up, they should have the vehicle towed at their own expense. The buyer should have the vehicle towed at their own expense.</p>
                                <p>Condition: Untested - Sold As-Is</p>
                                <p>Employees of Baich-Do, its subcontractors and affiliated companies, employees of the NYC Government and those bidding on behalf of PropertyRoom.com, its subcontractors and affiliated companies and employees of the NYC Government are not permitted to bid on or purchase NYC Fleet/DCAS assets. </p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Condition</h5>
                                <p>This ASSET is being listed on behalf of a law enforcement agency or other partner ("SELLER") by PropertyRoom.com on a Sold AS IS, WHERE IS, WITH ALL FAULTS basis, with no representation or warranty from PropertyRoom.com or SELLER. In many cases, the car, boat, truck, motorcycle, aircraft, mowers/tractors, etc. ("ASSET") sold on PropertyRoom.com comes from seizure or forfeiture, and the SELLER typically does not possess use-based knowledge of the ASSET. Further, PropertyRoom.com does not physically inspect the ASSET and cannot attest to actual working conditions. PropertyRoom.com and SELLER gather information about the ASSET from authoritative sources; still, errors may appear from time to time in the listing. PropertyRoom.com cautions any website user, shopper, bidder, etc. ("BUYER") to attempt to confirm, with us, information material to a bidding/purchasing decision.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Bidding</h5>
                                <p>At this time Baich-DO only accepts bidders from the United States, Canada and Mexico on Vehicles and Heavy Industrial Equipment. The Bid Now button will appear on auctions where you are qualified to place a bid.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Buyer Responsibility</h5>
                                <p>The BUYER will receive an email notification from PropertyRoom.com following the close of an auction. After fraud verification and payment settlement, we will email the BUYER instructions for retrieving the ASSET from the Will-Call Location listed above.</p>
                                <p>All applicable shipping, logistics, transportation, customs, fees, taxes, export/import activities and all associated costs are the sole responsibility of the BUYER. No shipping, customs, export or import assistance is available from Baich-Do.</p>
                                <p>When applicable for a given ASSET, BUYER bears responsibility for determining motor vehicle registration requirements in the applicable jurisdiction as well as costs, including any fees, registration fees, taxes, etc., owed as a result of BUYER registering an ASSET; for example, BUYER bears sole responsibility for all title/registration/smog and other such fees.</p>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="delevery">
                    <div class="shipping-wrapper">
                        <div class="item">
                            <h5 class="title">shipping</h5>
                            <div class="table-wrapper">
                                <table class="shipping-table">
                                    <thead>
                                        <tr>
                                            <th>Available delivery methods </th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Customer Pick-up (within 10 days)</td>
                                            <td>RS0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Shipping (5-7 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                        <tr>
                                            <td>Expedited Shipping (2-4 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">Notes</h5>
                            <p>Please carefully review our shipping and returns policy before committing to a bid.
                            From time to time, and at its sole discretion, Baich Do may change the prevailing fee structure for shipping and handling.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="history">
                    <div class="history-wrapper">
                        <div class="item">
                            <h5 class="title">Bid History</h5>
                            <div class="history-table-area">
                                <table class="history-table">
                                    <thead>
                                        <tr>
                                            <th>Bidder</th>
                                            <th>date</th>
                                            <th>time</th>
                                            <th>unit price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bidHistory.map((items)=>(
                                            <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={`http://localhost:3001/`+items.userImage} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        {items.userName}
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">{items.Time.toDateString()}</td>
                                            <td data-history="time">{items.Time.toLocaleTimeString()}</td>
                                            <td data-history="unit price">{items.BidAmount}</td>
                                        </tr>


                                        ))}
                                    </tbody>
                                </table>
                                <div class="text-center mb-3 mt-4">
                                    <a href="#0" class="button-3">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="questions">
                        <h5 class="faq-head-title">Frequently Asked Questions</h5>
                        <div class="faq-wrapper">
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to start bidding?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Security Deposit / Bidding Power </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Delivery time to the destination port </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to register to bid in an auction?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item open active">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How will I know if my bid was successful?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">What happens if I bid on the wrong lot?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section> 
     ))}
     </div>
    }

{jewelry && <div>{data.map((item) => (
     <section class="product-details padding-bottom mt--240 mt-lg--440">
     <div class="container">
         <div class="product-details-slider-top-wrapper">
             <div class="product-details-slider owl-theme owl-carousel" id="sync1">
                {
                    item.File.map((items)=>(
                        <div class="slide-top-item">
                     <div class="slide-inner">
                         <img height="500px" src={`http://localhost:3001/`+items}  alt="product"/>
                     </div>
                 </div>
                    ))
                }
                
             </div>
         </div>
         <div class="product-details-slider-wrapper">
             <div class="product-bottom-slider owl-theme owl-carousel" id="sync2">
             {
                    item.File.map((items)=>(
                        <div class="slide-top-item">
                     <div class="slide-inner">
                         <img height="100px" src={`http://localhost:3001/`+items}  alt="product"/>
                     </div>
                 </div>
                    ))
            }
                  
             </div>
             
         </div>
         <div class="row mt-40-60-80">
                <div class="col-lg-8">
                    <div class="product-details-content">
                        <div class="product-details-header">
                            <h2 class="title">{item.Name}</h2>
                            <ul>
                                <li>Listing ID: 14076242</li>
                                <li>Item #: {item.ID}</li>
                            </ul>
                        </div>
                        
                        {!end &&
                        <ul class="price-table mb-30">
                        {!timeStart &&
                            <li class="header">
                                <h5 class="current">Current Bid Price</h5>
                                <h3 class="price">{currentBidPrice}</h3>
                            </li>}
                            {timeStart &&
                            <div>
                            <li class="header">
                                <h5 class="current">Bid Starting at...</h5>
                                <h3 class="price">{startDate}</h3>
                            </li>

                            <li class="header">
                            <h5 class="current">On</h5>
                            <h3 class="price">{hours}h:{minutes}m:{seconds}s</h3>
                        </li>
                        </div>
                            
                            }
                            
                            <li>
                                <span class="details">Starting Price</span>
                                <h5 class="info">{item.StartingPrice}</h5>
                            </li>
                            <li>
                                <span class="details">Bid Increment (US)</span>
                                <h5 class="info">RS {bidIncreament}</h5>
                            </li>
                        </ul>}
                        {end &&
                        
                        <ul class="price-table mb-30">
                            <li class="header">
                                <h5 class="current">Bid Finishes</h5>
                             </li>
                             <li>
                             <h5 class="current">Winning amount</h5>
                                <h5 class="info">RS {currentBidPrice}</h5>
                             </li>
                            
                            
                        </ul>}
                        {!timeStart &&
                        <div class="product-bid-area">
                            {
                                endTime? (<form class="product-bid-form" onSubmit={bidSubmit}>
                                <div class="search-icon">
                                    <img src="/prodetailsimages/search-icon.png" alt="product"/>
                                </div>
                                <input type="text" placeholder="Enter you bid amount"  onChange={bidchangehandler}/>
                                <button type="submit" class="custom-button">Submit a bid</button>
                            </form>):(<p>{endTime}</p>)
                            }
                        </div>}
                        <br></br><br></br>

                        {errorMsg && <p style={{ color: 'red' }}>New bid amount should have increament of {bidIncreament} from previous</p>}
                        <div class="buy-now-area">
                            <a href="#0" onClick={()=>(makePayment(item.purchase,item.Name))} class="custom-button">Buy Now: RS {item.purchase}</a>
                            <a href="#0" class="rating custom-button active border"><i class="fas fa-star"></i> Add to Wishlist</a>
                            <div class="share-area">
                                <span>Share to:</span>
                                <ul>
                                    <li>
                                        <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#0"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="product-sidebar-area">
                        <div class="product-single-sidebar mb-3">
                            <h6 class="title">This Auction Ends in:</h6>
                            <div class="countdown">
                                <div>
                                    <p>{timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s</p>
                                </div>
                            </div>
                            <div class="side-counter-area">
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon1.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBiders}</span></h3>
                                        <p>Total Bidders</p>
                                    </div>
                                </div>
                                
                                <div class="side-counter-item">
                                    <div class="thumb">
                                        <img src="/prodetailsimages/icon3.png" alt="product"/>
                                    </div>
                                    <div class="content">
                                        <h3 class="count-title"><span>{totalBids}</span></h3>
                                        <p>Total Bids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#0" class="cart-link">View Shipping, Payment &amp; Auction Policies</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-menu-area mb-40-60 mt-70-100">
            <div class="container">
                <ul class="product-tab-menu nav nav-tabs">
                    <li>
                        <a href="#details" class="active" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab1.png" alt="product"/>
                            </div>
                            <div class="content">Description</div>
                        </a>
                    </li>
                    <li>
                        <a href="#delevery" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab2.png" alt="product"/>
                            </div>
                            <div class="content">Delivery Options</div>
                        </a>
                    </li>
                    <li>
                        <a href="#history" data-toggle="tab" onClick={his} >
                            <div class="thumb">
                                <img src="/prodetailsimages/tab3.png" alt="product"/>
                            </div>
                            <div class="content">Bid History</div>
                        </a>
                    </li>
                    <li>
                        <a href="#questions" data-toggle="tab">
                            <div class="thumb">
                                <img src="/prodetailsimages/tab4.png" alt="product"/>
                            </div>
                            <div class="content">Questions </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="details">
                    <div class="tab-details-content">
                        <div class="header-area">
                            <h3 class="title">{item.Name}</h3>
                            <div class="item">
                                <table class="product-info-table">
                                    <tbody>
                                    <tr>
                                            <th>Jewelry Type</th>
                                            <td>{item.Type}</td>
                                        </tr>
                                        <tr>
                                            <th>Designer</th>
                                            <td>{item.Designer}</td>
                                        </tr>
                                        <tr>
                                            <th>Material Used</th>
                                            <td>{item.Material}</td>
                                        </tr>
                                        <tr>
                                            <th>Made In</th>
                                            <td>{item.MadeIn}</td>
                                        </tr>
                                        <tr>
                                            <th>Condition</th>
                                            <td>{item.Conditionn}</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Brand</th>
                                            <td>{item.Brand}</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>{item.Size}</td>
                                        </tr>
                                        <tr>
                                            <th>Starting Price</th>
                                            <td>{item.StartingPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">NYC Fleet / DCAS units may be located at either of two locations:</h5>
                                <ul>
                                    <li>Brooklyn, NY (1908 Shore Parkway)</li>
                                    <li>Medford, NY (66 Peconic Ave)</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">This unit is located at:</h5>
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Acceptance of condition - buyer inspection/preview</h5>
                                <p>Vehicles and equipment often display significant wear and tear. Assets are sold AS IS with no warranty, express or implied, and we highly recommend previewing them before bidding. The preview period is the only opportunity to inspect an asset to verify condition and suitability. No refunds, adjustments or returns will be entertained. </p>
                                <p>Vehicle preview inspections of the vehicle can be done at the below location on Monday and Tuesday from 10am - 2pm. See Preview Rules Here.</p>                                
                                <ul>
                                    <li>Kenben Industries Ltd.</li>
                                    <li>1908 Shore Parkway</li>
                                    <li>Brooklyn, NY 11214</li>
                                </ul>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Legal Notice</h5>
                                <p>Vehicles may not be driven off the lot except with a dealer plate affixed. By law, vehicles are not permitted to be parked on or to drive on the streets of New York without registration and plates registered to the vehicle. If the buyer cannot obtain the required registration and plates prior to pick up, they should have the vehicle towed at their own expense. The buyer should have the vehicle towed at their own expense.</p>
                                <p>Condition: Untested - Sold As-Is</p>
                                <p>Employees of Baich-Do, its subcontractors and affiliated companies, employees of the NYC Government and those bidding on behalf of PropertyRoom.com, its subcontractors and affiliated companies and employees of the NYC Government are not permitted to bid on or purchase NYC Fleet/DCAS assets. </p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Condition</h5>
                                <p>This ASSET is being listed on behalf of a law enforcement agency or other partner ("SELLER") by PropertyRoom.com on a Sold AS IS, WHERE IS, WITH ALL FAULTS basis, with no representation or warranty from PropertyRoom.com or SELLER. In many cases, the car, boat, truck, motorcycle, aircraft, mowers/tractors, etc. ("ASSET") sold on PropertyRoom.com comes from seizure or forfeiture, and the SELLER typically does not possess use-based knowledge of the ASSET. Further, PropertyRoom.com does not physically inspect the ASSET and cannot attest to actual working conditions. PropertyRoom.com and SELLER gather information about the ASSET from authoritative sources; still, errors may appear from time to time in the listing. PropertyRoom.com cautions any website user, shopper, bidder, etc. ("BUYER") to attempt to confirm, with us, information material to a bidding/purchasing decision.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Bidding</h5>
                                <p>At this time Baich-DO only accepts bidders from the United States, Canada and Mexico on Vehicles and Heavy Industrial Equipment. The Bid Now button will appear on auctions where you are qualified to place a bid.</p>
                            </div>
                            <div class="item">
                                <h5 class="subtitle">Buyer Responsibility</h5>
                                <p>The BUYER will receive an email notification from PropertyRoom.com following the close of an auction. After fraud verification and payment settlement, we will email the BUYER instructions for retrieving the ASSET from the Will-Call Location listed above.</p>
                                <p>All applicable shipping, logistics, transportation, customs, fees, taxes, export/import activities and all associated costs are the sole responsibility of the BUYER. No shipping, customs, export or import assistance is available from Baich-Do.</p>
                                <p>When applicable for a given ASSET, BUYER bears responsibility for determining motor vehicle registration requirements in the applicable jurisdiction as well as costs, including any fees, registration fees, taxes, etc., owed as a result of BUYER registering an ASSET; for example, BUYER bears sole responsibility for all title/registration/smog and other such fees.</p>
                                <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="delevery">
                    <div class="shipping-wrapper">
                        <div class="item">
                            <h5 class="title">shipping</h5>
                            <div class="table-wrapper">
                                <table class="shipping-table">
                                    <thead>
                                        <tr>
                                            <th>Available delivery methods </th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Customer Pick-up (within 10 days)</td>
                                            <td>RS0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Shipping (5-7 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                        <tr>
                                            <td>Expedited Shipping (2-4 business days)</td>
                                            <td>Not Applicable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="item">
                            <h5 class="title">Notes</h5>
                            <p>Please carefully review our shipping and returns policy before committing to a bid.
                            From time to time, and at its sole discretion, Baich Do may change the prevailing fee structure for shipping and handling.</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="history">
                    <div class="history-wrapper">
                        <div class="item">
                            <h5 class="title">Bid History</h5>
                            <div class="history-table-area">
                                <table class="history-table">
                                    <thead>
                                        <tr>
                                            <th>Bidder</th>
                                            <th>date</th>
                                            <th>time</th>
                                            <th>unit price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bidHistory.map((items)=>(
                                            <tr>
                                            <td data-history="bidder">
                                                <div class="user-info">
                                                    <div class="thumb">
                                                        <img src={`http://localhost:3001/`+items.userImage} alt="history"/>
                                                    </div>
                                                    <div class="content">
                                                        {items.userName}
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-history="date">{items.Time.toDateString()}</td>
                                            <td data-history="time">{items.Time.toLocaleTimeString()}</td>
                                            <td data-history="unit price">{items.BidAmount}</td>
                                        </tr>


                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show" id="questions">
                        <h5 class="faq-head-title">Frequently Asked Questions</h5>
                        <div class="faq-wrapper">
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to start bidding?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Security Deposit / Bidding Power </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">Delivery time to the destination port </span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How to register to bid in an auction?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item open active">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">How will I know if my bid was successful?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <div class="faq-title">
                                    <img src="/prodetailsimages/faq.png" alt="css"/><span class="title">What happens if I bid on the wrong lot?</span><span class="right-icon"></span>
                                </div>
                                <div class="faq-content">
                                    <p>All successful bidders can confirm their winning bid by checking the “Baich Do”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section> 
     ))}
     </div>
    }
   </>
    )
};
    
export default ProductDetailsPage;