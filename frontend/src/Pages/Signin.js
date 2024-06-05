import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

function Signinpage()
{
    const [values , setValues] = useState({
        email :'',
        name:''

    });
    const [emailInvalid,setEmailInvalid]=useState(false);
    const [passwordInvalid,setpassswordInvalid]=useState(false);

    const navigate = useNavigate();
    const changeHandler = (event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }
    axios.defaults.withCredentials=true;
    const submitHandler = (event)=>{
        event.preventDefault();
         axios.post('http://localhost:3001/signin',values)
        .then(res=>{
            console.log(res.data.status);
            if(res.data.status=="Done")
            {
                navigate('/dashboard');
            }
            else if(res.data.status=="Email Not Matched"){
                setEmailInvalid(true);
            }
            else if(res.data.status=="Password Not Matched")
            {
                setEmailInvalid(false);
                setpassswordInvalid(true);
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
return (<>
<MainNavigation></MainNavigation>

{loading && <OverLay></OverLay>}
    
{!loading && 
(<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
<div className="overlay"></div> </div>) }
    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="signinimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signinimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signinimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signinimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signinimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signinimages/shop05.jpg" alt="shop"/></a>
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
    <div class="hero-section">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="/home2">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>Sign In</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section class="account-section padding-bottom">
        <div class="container">
            <div class="account-wrapper mt--100 mt-lg--440">
                <div class="left-side">
                    <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                        <h2 class="title">HI, THERE</h2>
                        <p>You can log in to your Baich-Do account here.</p>
                    </div>
                    <form class="login-form" onSubmit={submitHandler}>
                        <div class="form-group mb-30">
                            <label for="login-email"><i class="far fa-envelope"></i></label>
                            <input type="text" id="login-email" placeholder="Email Address" name="email" onChange={changeHandler}/>
                        </div>
                        {emailInvalid&&<p className="text-danger">Email not Match</p>}

                        <div class="form-group">
                            <label for="login-pass"><i class="fas fa-lock"></i></label>
                            <input type="password" id="login-pass" placeholder="Password" name="password" onChange={changeHandler}/>
                            <span class="pass-type"><i class="fas fa-eye"></i></span>
                        </div>
                        <br></br>
                        {passwordInvalid&&<p className="text-danger">Password not Match</p>}

                        <div class="form-group mt-3 mb-3">
                            <a href="#0">Forgot Password?</a>
                        </div>
                        <div class="form-group mb-0">
                            <button type="submit" class="custom-button">LOG IN</button>
                        </div>
                    </form>
                </div>
                <div class="right-side cl-white">
                    <div class="section-header mb-0">
                        <h3 class="title mt-0">NEW HERE?</h3>
                        <p>Sign up and create your Account</p>
                        <a href="/signup" class="custom-button transparent">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</>
)
}
export default Signinpage;