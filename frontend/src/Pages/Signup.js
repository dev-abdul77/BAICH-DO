import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink, useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";



function Signuppage()
{
    const [name,setName]=useState('');
    const [nameTouched,setNameTouched]=useState(false);
    const [email,setEmail]=useState('');
    const [emailTouched,setEmailTouched]=useState(false);
    const [number,setNumber]=useState('');
    const [numberTouched,setNumberTouched]=useState(false);
    const [address,setAddress]=useState('');
    const [addressTouched,setAddressTouched]=useState(false);
    const [dob,setdob]=useState("");
    const [dobTouched,setdobTouched]=useState(false);
    const [password,setPassword]=useState('');
    const [passwordTouched,setPasswordTouched]=useState(false);
    const [formIsValid,setFornIsValid]=useState(false);
    const [formTouched,setFormTouched]=useState(false);
    const [passVisible,setPassVisible]=useState(false);
    const [checkemail,setcheckemail]=useState(false);
    
    const [image,setImage]=useState('');
    const validatePassword=()=>{
        const pass_patter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if(password === "")
        {
            return "Password cannot be empty"
        }
        else if(!pass_patter.test(password))
        {
            return  "This is not a valid password! Password must be 8 to 15 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, ., #, $, !, %, *, ?, &, ^)";
        }
        else{
            return  ""
        }


    }
    const validateAddress=()=>{
        if(address === "")
        {
            return  "Address cannot be empty"
        }
        else{
            return "";
        }

    }
    const validatedob=()=>{
        if(dob === "")
        {
            return  "DOB cannot be empty"
        }
        else{
            return "";
        }

    }
    const validateNumber=()=>{
        if(number === "")
        {
            return  "Mobile Number cannot be empty"
        }
        else{
            return "";
        }

    }
    const validateName=()=>{
        if(name === "" && nameTouched)
        {
            return "Name cannot be empty"
        }
        else{
            return "";
        }

    }
    const validateEmail=()=>{
        const email_patter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === "")
    {
        return "Email cannot be empty";
        
    }
    else if(!email_patter.test(email))
    {
        return "This is not a valid email!";
    }
    else{
        
            return "";
    }

    }
    const enteredNameIsValid=validateName();
    const nameIsInValid=enteredNameIsValid!=""&&nameTouched;
    let enteredEmailIsValid=validateEmail();
    let emailIsInValid=enteredEmailIsValid!=""&&emailTouched;
    const enteredNumberIsValid=validateNumber();
    const numberIsInValid=enteredNumberIsValid!=""&&numberTouched;
    
    
    const entereddobIsValid=validatedob();
    const dobIsInValid=entereddobIsValid!=""&&dobTouched;


    
    const enteredAddressIsValid=validateAddress();
    const addressIsInValid=enteredAddressIsValid!=""&&addressTouched;

    const enteredPasswordIsValid=validatePassword();
    const passwordIsInValid=enteredPasswordIsValid!=""&&passwordTouched;
    const formV=!formIsValid&&formTouched;

    useEffect(()=>{
        if(enteredEmailIsValid==''&&enteredAddressIsValid==""&&enteredNameIsValid==""&&enteredNameIsValid==""&&enteredPasswordIsValid==""&&entereddobIsValid=="")
        {
            setFornIsValid(true);
        }
        else{
            setFornIsValid(false);
        }
    },[enteredNameIsValid,enteredEmailIsValid,enteredPasswordIsValid,enteredAddressIsValid,entereddobIsValid,enteredNumberIsValid])
    const nameInputHandler=(event)=>{
        setName(event.target.value);
    }
    const nameBlurhandler=()=>{
        setNameTouched(true);
    }
    const emailInputHandler=(event)=>{
        setcheckemail(false);
        setEmail(event.target.value);
    }
    const emailBlurhandler=()=>{
        setEmailTouched(true);
    }
    const numberInputHandler=(event)=>{
        setNumber(event.target.value);
        
    }
    const numberBlurhandler=()=>{
        setNumberTouched(true);
    }
    const addressInputHandler=(event)=>{
        setAddress(event.target.value);
        
    }
    const dobInputHandler=(event)=>{
        setdob(event.target.value);
        
    }
    const addressBlurhandler=()=>{
        setAddressTouched(true);
    }
    const dobBlurhandler=()=>{
        setdobTouched(true);
    }
    const passwordInputHandler=(event)=>{
        setPassword(event.target.value);
        
    }
    const FileInputHandler=(event)=>{
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
        
    }
    const passwordBlurhandler=()=>{
        setPasswordTouched(true);
    }
    

    
    const navigate = useNavigate();
   
   

    const handleSubmit = (event)=>{
        console.log("In submit");
        setFormTouched(true);
        setAddressTouched(true);
        setNumberTouched(true);
        setEmailTouched(true);
        setPasswordTouched(true);
        setNameTouched(true);
        
        event.preventDefault();

        const values =  {
            email :email,
            name: name,
            mobile: number,
            address: address,
            password: password,
            image:image,
            dob:dob
        };
        
    const config={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
        console.log(values);
        if(formIsValid)
        {
            console.log("333");
            axios.post('http://localhost:3001/signup', values,config)
        .then(res=>{
            if(res.data.status=="Email already Exist")
            {
                enteredEmailIsValid="Email already exist";
                setcheckemail(true);
                console.log(res.data.status)
            }
            else{
                navigate('/signin');

            }
        })
        }
        else{
            console.log("In submit else");
        }

        
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
  const scriptContent=`
  $('.pass-type').on('click', function () {
    var x = document.getElementById("login-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  `
  const passcheck=()=>{
    console.log("In check");
    if(passVisible)
    {
        setPassVisible(false);
    }
    else{
        setPassVisible(true);
    }
  }
//   useEffect(()=>{
//     const ele=document.createElement('script');
//     ele.innerHTML=scriptContent;
//     document.body.appendChild(ele);
//     return ()=>{
//         document.body.removeChild(ele);
//     }
//   })

return (<>
<MainNavigation></MainNavigation>

{loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
 {/* <div class="overlayer" id="overlayer">
        <div class="loader">
            <div class="loader-inner"></div>
        </div>
    </div>
    <a href="#0" class="scrollToTop"><i class="fas fa-angle-up"></i></a>
    <div class="overlay"></div> */}
    
    
    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="signupimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signupimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signupimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signupimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signupimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="signupimages/shop05.jpg" alt="shop"/></a>
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
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>Sign Up</span>
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
                        <h2 class="title">SIGN UP</h2>
                        <p>We're happy you're here!</p>
                    </div>
                   
                    <form class="login-form" onSubmit={handleSubmit}>
                        <div class="form-group mb-30">
                            <label for="login-name"><i class="fas fa-user"></i></label>
                            <input type="text" id="login-name"  onChange={nameInputHandler} onBlur={nameBlurhandler}  value={name} name="name" placeholder="Name"/>
                            

                        </div>
                        {nameIsInValid && <p  className="text-danger text-right">Name Cannot be Empty</p>}
                        <div class="form-group mb-30">
                            <label for="login-email"><i class="far fa-envelope"></i></label>
                            <input type="text" id="login-email" value={email} onBlur={emailBlurhandler} onChange={emailInputHandler} name="email" placeholder="Email Address"/>
                            
                        </div>
                        {emailIsInValid && <p  className="text-danger">{enteredEmailIsValid}</p>}
                        {checkemail && <p  className="text-danger">Email already Exist</p>}

                        <div class="form-group mb-30">
                            <label for="login-mobile"><i class="fas fa-mobile-alt"></i></label>
                            <input type="text" id="login-mobile" value={number} onChange={numberInputHandler} onBlur={numberBlurhandler} name="mobile" placeholder="Mobile Number"/>
                            
                        </div>
                        {numberIsInValid && <p className="text-danger">{enteredNumberIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="login-dob"><i class="fas fa-calendar"></i></label>
                            <input type="date" id="login-dob" value={dob} onChange={dobInputHandler} onBlur={dobBlurhandler} name="dob" placeholder="Date of Birth"/>
                            
                        </div>
                        {dobIsInValid && <p className="text-danger">Dob Cannot be Empty</p>}
                        <div class="form-group mb-30">
                            <label for="login-address"><i class="fas fa-map-marker-alt"></i></label>
                            <input type="text" id="login-address" value={address} onChange={addressInputHandler} onBlur={addressBlurhandler} name="address" placeholder="Address"/>
                            
                        </div>
                        {addressIsInValid && <p className="text-danger">Address Cannot be Empty</p>}
                        <div class="form-group mb-30">
                            <label for="login-pass"><i class="fas fa-lock"></i></label>
                            <input type="password" id="login-pass" value={password} onChange={passwordInputHandler} onBlur={passwordBlurhandler} name="password" placeholder="Password"/>
                            <span class="pass-type"  onClick={passcheck}><i class="fas fa-eye"></i></span>
                            
                        </div>
                        {passwordIsInValid && <p className="text-danger">{enteredPasswordIsValid}</p>}
                        <div class="form-group mb-30">
                            
                            <input class="form-control form-control-lg" onChange={FileInputHandler} name ="image" id="formFileLg" type="file"/>
                       </div>
                        <div class="form-group checkgroup mb-30">
                            <input type="checkbox" name="terms" id="check"/><label for="check">The Baich Do Terms of Use apply</label>
                        </div>
                        <div class="form-group mb-0">
                            {formV&&<p>Hello</p>}
                            
                            <button type="submit"  class="custom-button" >SIGN UP</button>
                        </div>
                    </form>
                </div>
                <div class="right-side cl-white">
                    <div class="section-header mb-0">
                        <h3 class="title mt-0">ALREADY HAVE AN ACCOUNT?</h3>
                        <p>Log in and go to your Dashboard.</p>
                        <a href="/signin" class="custom-button transparent">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</>
)
}
export default Signuppage;