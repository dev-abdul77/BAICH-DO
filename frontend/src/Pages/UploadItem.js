import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
function UploadItempage()
{
    
    const [userid,setUserid]=useState(0);
   const Navigate=useNavigate();
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
    const [formTouched,setFormTouched]=useState(false);
    const navigate=useNavigate();
    const[error,seterror]=useState("");
    const[formisvalid,setformisvalid]=useState(false);
    const[jewelryformisvalid,setjewelryformisvalid]=useState(false);
    const[houseformisvalid,sethouseformisvalid]=useState(false);
    const [initialValidation, setInitialValidation] = useState(false);  
    //states for car input fields
    const[name,setName]=useState("");
    const[model,setModel]=useState("");
    const[madeIn,setMadeIn]=useState("");
    const[startingprice,setstartingprice]=useState(0);
    const[bidIncreament,setbidIncreament]=useState(0);
    const[condition,setcondition]=useState("");
    const[color,setcolor]=useState("");
    const[fuel,setfuel]=useState(0);
    const[milage,setmilage]=useState(0);
    const[file,setFile]=useState([]);
    const[doors,setdoors]=useState(0);
    const[transmission,settransmission]=useState("");
    const[engine,setengine]=useState(0);
    const[startingtime,setstartingtime]=useState("");
    const[endingtime,setendingtime]=useState("");
    const [carPurchase , setCarPurchase] = useState(0)
    //states for categories
    const[car,setcar]=useState(true);
    const[jewelery,setjewelery]=useState(false);
    const[house,sethouse]=useState(false)
    const backgroundImageUrl = `images/hero-bg.png`; // Replace with the actual path to your image
     //states for jewelry input fields
    const[ProductName,setProductName]=useState("");
    const[JewelryType,setJewelryType]=useState("");
    const[JewelryMaterial,setJewelryMaterial]=useState(""); 
    const[JewelryDesigner,setJewelryDesigner]=useState(""); 
    const[JewelryMadeIn,setJewelryMadeIn]=useState("");
    const[JewelryBrand,setJewelryBrand]=useState("");
    const[JewelryStartingTime,setJewelryStartingTime]=useState("");
    const[JewelryCondition,setJewelryCondition]=useState("");
    const[JewelryEndingTime,setJewelryEndingTime]=useState("");
    const[JewelryStartingPrice,setJewelryStartingPrice]=useState(0);
    const[JewelryBidIncreament,setJewelryBidIncreament]=useState(0);
    const[JewelrySize,setJewelrySize]=useState(0);
    const[JewelryFile,setJewelryFile]=useState([]);
    const [jewelPurchase , setJewelPurchase] = useState(0)
    const formV=!formisvalid&&formTouched
    
    const[ProductAdded,setProductAdded]=useState(false);
    //Gettinginputs fronm jewelrey form
    const ProductNameInputHandler=(event)=>{
        setProductName(event.target.value);
    }
    const JewelryFileInputHandler=(event)=>{
        setJewelryFile(Array.from(event.target.files));
    }
    const JewelryDesignerInputHandler=(event)=>{
        setJewelryDesigner(event.target.value);
    }
    const JewelryConditionInputHandler=(event)=>{
        setJewelryCondition(event.target.value);
    }

    const JewelryBrandInputHandler=(event)=>{
        setJewelryBrand(event.target.value);
    }
    const JewelryTypeInputHandler=(event)=>{
        setJewelryType(event.target.value);
    }
    const JewelrySizeInputHandler=(event)=>{
        setJewelrySize(event.target.value);
    }
    const JewelryMadeInInputHandler=(event)=>{
        setJewelryMadeIn(event.target.value);
    }
    const JewelryMaterialInputHandler=(event)=>{
        setJewelryMaterial(event.target.value);
    }
    const JewelryEndingTimeInputHandler=(event)=>{
        setJewelryEndingTime(event.target.value);
    }
    const JewelryStartingTimeInputHandler=(event)=>{
        setJewelryStartingTime(event.target.value);
    }
    const JewelryStartingPriceInputHandler=(event)=>{
        setJewelryStartingPrice(event.target.value);
    }
    const JewelryBidIncreamentInputHandler=(event)=>{
        setJewelryBidIncreament(event.target.value);
    }
    const jewelPurchaseInputHandler = (event)=>{
        setJewelPurchase(event.target.value)
    }
     //states for house input fields
     const[HouseName,setHouseName]=useState("");
     const[HouseFloors,setHouseFloors]=useState(0);
     const[HouseBedrooms,setHouseBEdrooms]=useState(0);
     const[HouseCondition,setHouseCondition]=useState("");
     const[HouseAddress,setHouseAddress]=useState("");
     const[HousePlotSize,setHousePlotsize]=useState(0);
     const[HouseStartingPrice,setHouseStartingPrice]=useState(0);
     const[HouseBidIncreament,setHouseBidIncreament]=useState(0);
     const[HouseStartingTime,setHouseStartingTime]=useState("");
     const[HouseEndingTime,setHouseEndingTime]=useState("");
    const[HouseFile,setHouseFile]=useState([]);
    const [housePurchase, setHousePurchase] = useState(0);
    //empty checks
    
    const [nameTouched,setNameTouched]=useState(false);
    const [madeinTouched,setmadeinTouched]=useState(false);
    const [modelTouched,setmodelTouched]=useState(false);
    const [mileageTouched,setmileageTouched]=useState(false);
    const [startingpriceTouched,setstartingpriceTouched]=useState(false);
    const [bidIncreamentTouched,setbidIncreamentTouched]=useState(false);
    const [fuelTouched,setfuelTouched]=useState(false);
    const [engineTouched,setengineTouched]=useState(false);
    const [transmissionTouched,settransmissionTouched]=useState(false);
    const [startingtimeTouched,setstartingtimeTouched]=useState(false);
    const [endingtimeTouched,setendingtimeTouched]=useState(false);
    const [conditionTouched,setconditionTouched]=useState(false);
    const [doorsTouched,setdoorsTouched]=useState(false);
    const[colorTouched,setcolorTouched]=useState(false);
    const validatename=()=>{
        if(name === "")
        {
            return  "Name cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatemadein=()=>{
        if(madeIn=== "")
        {
            return  "MadeIn cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatemodel=()=>{
        if(model === "")
        {
            return  "Model cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateengine=()=>{
        if(engine === 0)
        {
            return  "Engine cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatecolor=()=>{
        if(color=== "")
        {
            return  "Color cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatefuel=()=>{
        if(fuel === 0)
        {
            return  "Fuel cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatedoors=()=>{
        if(doors === 0)
        {
            return  "Doors cannot be 0";
        }
        else{
            return "";
        }
    }
    const validatestartingtime=()=>{
        if(startingtime === "")
        {
            return  "StartingTime cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateendingtime=()=>{
        if(endingtime === "")
        {
            return  "EndingTime cannot be empty"
        }
        else if(startingtime==="" && endingtime!="")
        {
            return  "Specify starting time first"
        }
        else if(startingtime!="" && endingtime!="")
        {
            const startobj=new Date(startingtime);
            const endobj=new Date(endingtime);
            if(startobj>endobj)
            {
                return "Ending date must grater";
            }
            else{
                return "";
            }
        }
        else{
            return "";
        }
    }
    const validatestartingprice=()=>{
        if(startingprice === 0)
        {
            return  "StartingPrice cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatebidIncreament=()=>{
        if(bidIncreament === 0)
        {
            return  "Bid Increament cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatecondition=()=>{
        if(condition === "")
        {
            return  "Condition cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatetransmission=()=>{
        if(transmission === "")
        {
            return  "Transmission cannot be empty"
        }
        else{
            return "";
        }
    }
    const validatemileage=()=>{
        if(milage === 0)
        {
            return  "Milage cannot be empty"
        }
        else{
            return "";
        }
        
    }
    
    const enteredNameIsValid=validatename();
    const nameIsInValid=enteredNameIsValid!=""&&nameTouched;
    const enteredMadeInIsValid=validatemadein();
    const MadeInIsInValid=enteredMadeInIsValid!=""&&madeinTouched;
    const enteredModelIsValid=validatemodel();
    const ModelIsInValid=enteredModelIsValid!=""&&modelTouched;
    const enteredstartingpriceIsValid=validatestartingprice();
    const StartingPriceIsInValid=enteredstartingpriceIsValid!=""&&startingpriceTouched;
    
    const enteredbidIncreamentIsValid=validatebidIncreament();
    const bidIncreamentIsInValid=enteredbidIncreamentIsValid!=""&&bidIncreamentTouched;

    const enteredstartingtimeIsValid=validatestartingtime();
    const StartingTimeIsInValid=enteredstartingtimeIsValid!=""&&startingtimeTouched;
    const enteredendingtimeIsValid=validateendingtime();
    const EndingTimeIsInValid=enteredendingtimeIsValid!=""&&endingtimeTouched;
    const enteredFuelIsValid=validatefuel();
    const FuelIsInValid=enteredFuelIsValid!=""&&fuelTouched;
    const enteredTransmissionIsValid=validatetransmission();
    const TransmissionIsInValid=enteredTransmissionIsValid!=""&&transmissionTouched;
    const enteredDoorsIsValid=validatedoors();
    const DoorsIsInValid=enteredDoorsIsValid!=""&&doorsTouched;
    const enteredConditionIsValid=validatecondition();
    const ConditionIsInValid=enteredConditionIsValid!=""&&conditionTouched;
    const enteredcolorIsValid=validatecolor();
    const ColorIsInValid=enteredcolorIsValid!=""&&colorTouched;
    const enteredEngineIsValid=validateengine();
    const EngineIsInValid=enteredEngineIsValid!=""&&engineTouched;
    const enteredMileageIsValid=validatemileage();
    const MilageIsInValid=enteredMileageIsValid!=""&&mileageTouched;
    
    useEffect(()=>{
    if(enteredNameIsValid=="" &&enteredDoorsIsValid=="" && enteredEngineIsValid=="" && enteredConditionIsValid=="" && enteredFuelIsValid=="" &&enteredModelIsValid=="" && enteredTransmissionIsValid=="" && enteredstartingpriceIsValid=="" && enteredstartingtimeIsValid=="" && enteredendingtimeIsValid==""  && enteredcolorIsValid==""&& enteredMileageIsValid=="" && enteredMadeInIsValid=="" && enteredbidIncreamentIsValid=="")
    {
        setformisvalid(true);
    }
    else{
        setformisvalid(false);
    }
},[enteredNameIsValid,enteredDoorsIsValid,enteredEngineIsValid,enteredConditionIsValid,enteredFuelIsValid,enteredModelIsValid,enteredTransmissionIsValid,enteredstartingpriceIsValid,enteredstartingtimeIsValid,enteredendingtimeIsValid,enteredcolorIsValid,enteredMileageIsValid,enteredMadeInIsValid,enteredbidIncreamentIsValid])
    
    const NameBlurHandle=()=>{
        setNameTouched(true);
    }
    const MileageBlurHandle=()=>{
        setmileageTouched(true);
    }
    const ModelBlurHandle=()=>{
        setmodelTouched(true);
    }
    const MadeInBlurHandle=()=>{
        setmadeinTouched(true);
    }
    const EngineBlurHandle=()=>{
        setengineTouched(true);
    }
    const TransmissionBlurHandle=()=>{
        settransmissionTouched(true);
    }
    const DoorsBlurHandle=()=>{
        setdoorsTouched(true);
    }
    const ConditionBlurHandle=()=>{
        setconditionTouched(true);
    }
    const FuelBlurHandle=()=>{
        setfuelTouched(true);
    }
    const ColorBlurHandle=()=>{
        setcolorTouched(true);
    }
    const StartingPriceBlurHandle=()=>{
        setstartingpriceTouched(true);
    }
    
    const bidIncreamentBlurHandle=()=>{
        setbidIncreamentTouched(true);
    }
    const StartingTimeBlurHandle=()=>{
        setstartingtimeTouched(true);
    }
    const EndingTimeBlurHandle=()=>{
        setendingtimeTouched(true);
    }
    //House empty checks
    const [HouseNameTouched,setHouseNameTouched]=useState(false);
    const [HouseFloorTouched,setHouseFloorTouched]=useState(false);
    const [HouseBedroomsTouched,setHouseBedroomsTouched]=useState(false);
    const [HousePlotSizeTouched,setHousePlotSizeTouched]=useState(false);
    const [HouseStartingPriceTouched,setHouseStartingPriceTouched]=useState(false);
    const [HouseBidIncreamentTouched,setHouseBidIncreamentTouched]=useState(false);
    const [HouseStartingTimeTouched,setHouseStartingTimeTouched]=useState(false);
    const [HouseEndingTimeTouched,setHouseEndingTimeTouched]=useState(false);
    const [HouseConditionTouched,setHouseConditionTouched]=useState(false);
    const [HouseAddressTouched,setHouseAddressTouched]=useState(false);
    const HouseNameBlurHandle=()=>{
        setHouseNameTouched(true);
    }
    const HousePlotSizeBlurHandle=()=>{
        setHousePlotSizeTouched(true);
    }
    const HouseFloorBlurHandle=()=>{
        setHouseFloorTouched(true);
    }
    const HouseBedroomsBlurHandle=()=>{
        setHouseBedroomsTouched(true);
    }
    const HouseStartingPriceBlurHandle=()=>{
        setHouseStartingPriceTouched(true);
    }
    const HouseBidIncreamentBlurHandle=()=>{
        setHouseBidIncreamentTouched(true);
    }
    const HouseStartingTimeBlurHandle=()=>{
        setHouseStartingTimeTouched(true);
    }
    const HouseEndingTimeBlurHandle=()=>{
        setHouseEndingTimeTouched(true);
    }
    const HouseConditionBlurHandle=()=>{
        setHouseConditionTouched(true);
    }
    const HouseAddressBlurHandle=()=>{
        setHouseAddressTouched(true);
    }
    const validateHouseName=()=>{
        if(HouseName === "")
        {
            return  "Name cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHousePlotSize=()=>{
        if(HousePlotSize === 0)
        {
            return  "PlotSize cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseBidIncreament=()=>{
        if(HouseBidIncreament === 0)
        {
            return  "Bid Increament cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseAddress=()=>{
        if(HouseAddress === "")
        {
            return  "Address cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseCondition=()=>{
        if(HouseCondition === "")
        {
            return  "Condition cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseFloor=()=>{
        if(HouseFloors === 0)
        {
            return  "Floor cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseBedrooms=()=>{
        if(HouseBedrooms === 0)
        {
            return  "Bedroom cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseStartingPrice=()=>{
        if(HouseStartingPrice === 0)
        {
            return  "strating price cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseStartingTime=()=>{
        if(HouseStartingTime === "")
        {
            return  " StartingTime cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateHouseEndingTime=()=>{
        if(HouseEndingTime === "")
        {
            return  "EndingTime cannot be empty"
        }
        else if(HouseStartingTime==="" && HouseEndingTime!="")
        {
            return  "Specify starting time first"
        }
        else if(HouseStartingTime!="" && HouseEndingTime!="")
        {
            const startobj=new Date(HouseStartingTime);
            const endobj=new Date(HouseEndingTime);
            if(startobj>endobj)
            {
                return "Ending date must grater";
            }
            else{
                return "";
            }
        }
        else{
            return "";
        }
    }
    const enteredHouseNameIsValid=validateHouseName();
    const enteredHouseFloorIsValid=validateHouseFloor();
    const enteredHouseBedroomsIsValid=validateHouseBedrooms();
    const enteredHousePlotSizeIsValid=validateHousePlotSize();
    const enteredHouseConditionIsValid=validateHouseCondition();
    const enteredHouseStartingPriceIsValid=validateHouseStartingPrice();
    
    const enteredHouseBidIncreamentIsValid=validateHouseBidIncreament();
    const enteredHouseStartingTimeIsValid=validateHouseStartingTime();
    const enteredHouseEndingTimeIsValid=validateHouseEndingTime();
    const enteredHouseAddressIsValid=validateHouseAddress();   
    useEffect(()=>{
        if(enteredHouseNameIsValid=="" &&enteredHouseFloorIsValid=="" && enteredHouseBedroomsIsValid=="" && enteredHousePlotSizeIsValid=="" && enteredHouseConditionIsValid=="" &&enteredHouseStartingPriceIsValid=="" &&  enteredHouseStartingTimeIsValid=="" && enteredHouseEndingTimeIsValid==""  && enteredHouseAddressIsValid=="" && enteredHouseBidIncreamentIsValid=="")
        {
            sethouseformisvalid(true);
        }
        else{
            sethouseformisvalid(false);
        }
    },[enteredHouseNameIsValid,enteredHouseFloorIsValid, enteredHouseBedroomsIsValid, enteredHousePlotSizeIsValid,enteredHouseConditionIsValid,enteredHouseStartingPriceIsValid,  enteredHouseStartingTimeIsValid,enteredHouseEndingTimeIsValid, enteredHouseAddressIsValid,enteredHouseBidIncreamentIsValid]);
    const HouseNameIsInValid=enteredHouseNameIsValid!=""&&HouseNameTouched;
    const HousePlotSizeIsInValid=enteredHousePlotSizeIsValid!=""&&HousePlotSizeTouched;
    const HouseConditionIsInValid=enteredHouseConditionIsValid!=""&&HouseConditionTouched;
    const HouseBedRoomsIsInValid=enteredHouseBedroomsIsValid!=""&&HouseBedroomsTouched;
    const HouseFloorsIsInValid=enteredHouseFloorIsValid!=""&&HouseFloorTouched;
    const HouseAddressIsInValid=enteredHouseAddressIsValid!=""&&HouseAddressTouched;
    const HouseStartingPriceIsInValid=enteredHouseStartingPriceIsValid!=""&&HouseStartingPriceTouched;
    const HouseBidIncreamentIsInValid=enteredHouseBidIncreamentIsValid!=""&&HouseBidIncreamentTouched;
    const HouseStartingTimeIsInValid=enteredHouseStartingTimeIsValid!=""&&HouseStartingTimeTouched;
    const HouseEndingTimeIsInValid=enteredHouseEndingTimeIsValid!=""&&HouseEndingTimeTouched;
    //jewelry empty checks 
    const [JeweleryNameTouched,setJeweleryNameTouched]=useState(false);
    const [JewelerymadeinTouched,setJewelerymadeinTouched]=useState(false);
    const [JewelerydesignerTouched,setJewelerydesignerTouched]=useState(false);
    const [JeweleryTypeTouched,setJeweleryTypeTouched]=useState(false);
    const [JewelerystartingpriceTouched,setJewelerystartingpriceTouched]=useState(false);
    
    const [JeweleryBidIncreamentTouched,setJeweleryBidIncreamentTouched]=useState(false);
    const [JewelerystartingtimeTouched,setJewelerystartingtimeTouched]=useState(false);
    const [JeweleryendingtimeTouched,setJeweleryendingtimeTouched]=useState(false);
    const [JeweleryMaterialTouched,setJeweleryMaterialTouched]=useState(false);
    const [JeweleryBrandTouched,setJeweleryBrandTouched]=useState(false);
    const [JewelerySizeTouched,setJewelerySizeTouched]=useState(false);
    const [JeweleryConditionTouched,setJeweleryConditionTouched]=useState(false);
    const JewelryNameBlurHandle=()=>{
        setJeweleryNameTouched(true);
    }
    const JewelerymadeinBlurHandle=()=>{
        setJewelerymadeinTouched(true);
    }
    const JewelerydesignerBlurHandle=()=>{
        setJewelerydesignerTouched(true);
    }
    const JeweleryTypeBlurHandle=()=>{
        setJeweleryTypeTouched(true);
    }
    const JewelerystartingpriceBlurHandle=()=>{
        console.log("eshahere");
        setJewelerystartingpriceTouched(true);
        console.log(JewelerystartingpriceTouched);
    }
    const JeweleryBidIncreamentBlurHandle=()=>{
        setJeweleryBidIncreamentTouched(true);
    }
    const JewelerystartingtimeBlurHandle=()=>{
        setJewelerystartingtimeTouched(true);
    }
    const JeweleryendingtimeBlurHandle=()=>{
        setJeweleryendingtimeTouched(true);
    }
    const JeweleryMaterialBlurHandle=()=>{
        setJeweleryMaterialTouched(true);
    }
    const JeweleryBrandBlurHandle=()=>{
        setJeweleryBrandTouched(true);
    }
    const JewelerySizeBlurHandle=()=>{
        setJewelerySizeTouched(true);
        console.log(JewelerySizeTouched);
    }
    const JeweleryConditionBlurHandle=()=>{
        setJeweleryConditionTouched(true);
    }
    const validateJewelryName=()=>{
        if(ProductName === "")
        {
            return  "Name cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryMadeIn=()=>{
        if(JewelryMadeIn === "")
        {
            return  "Made In cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryDesigner=()=>{
        if(JewelryDesigner === "")
        {
            return  "Designer cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryType=()=>{
        if(JewelryType=== "")
        {
            return  "Type cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryCondition=()=>{
        if(JewelryCondition === "")
        {
            return  "Condition cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryMaterial=()=>{
        if(JewelryMaterial === "")
        {
            return  "Material cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryBrand=()=>{
        if(JewelryBrand === "")
        {
            return  "Brand cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelrySize=()=>{
        if(JewelrySize === 0)
        {
            return  "Size cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryStartingPrice=()=>{
        if(JewelryStartingPrice=== 0)
        {
            
            console.log("amnnnnn");
            return  "StartingPrice cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryBidIncreament=()=>{
        if(JewelryBidIncreament=== 0)
        {
            
            console.log("amnnnnn");
            return  "Bid Increament cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryStartingTime=()=>{
        if(JewelryStartingTime === "")
        {
            return  "StartingTime cannot be empty"
        }
        else{
            return "";
        }
    }
    const validateJewelryEndingTime=()=>{
        if(JewelryEndingTime === "")
        {
            return  "EndingTime cannot be empty"
        }
        
        else if(JewelryStartingTime==="" && JewelryEndingTime!="")
        {
            return  "Specigy startingtime first"
        }
        else if(JewelryEndingTime!="" && JewelryStartingTime!="")
        {
            const startobj=new Date(JewelryStartingTime);
            const endobj=new Date(JewelryEndingTime);
            if(startobj>endobj)
            {
                console.log("tototot");
                return "Ending date must grater";
            }
            else{
                return "";
            }
        }
        else{
            return "";
        }
    }
    const enteredJewelryNameIsValid=validateJewelryName();
    const enteredJewelryTypeIsValid=validateJewelryType();
    const enteredJewelrySizeIsValid=validateJewelrySize();
    const enteredJewelryMaterialIsValid=validateJewelryMaterial();
    const enteredJewelryMadeInIsValid=validateJewelryMadeIn();
    const enteredJewelryDesignerIsValid=validateJewelryDesigner();
    const enteredJewelryStartingPriceIsValid=validateJewelryStartingPrice();
    const enteredJewelryStartingTimeIsValid=validateJewelryStartingTime();
    const enteredJewelryEndingTimeIsValid=validateJewelryEndingTime();
    const enteredJewelryBrandIsValid=validateJewelryBrand();
    const enteredJewelryConditionIsValid=validateJewelryCondition();
    
    const enteredJewelryBidIncreamentIsValid=validateJewelryBidIncreament();
    useEffect(()=>{
        if(enteredJewelryNameIsValid=="" &&enteredJewelryTypeIsValid=="" && enteredJewelrySizeIsValid=="" && enteredJewelryMaterialIsValid=="" && enteredJewelryMadeInIsValid=="" &&enteredJewelryDesignerIsValid=="" &&  enteredJewelryStartingPriceIsValid=="" && enteredJewelryStartingTimeIsValid==""  && enteredJewelryEndingTimeIsValid==""  && enteredJewelryConditionIsValid=="" && enteredJewelryBrandIsValid=="")
        {
            setjewelryformisvalid(true);
        }
        else{
            setjewelryformisvalid(false);
        }
    },[enteredJewelryNameIsValid,enteredJewelryTypeIsValid,enteredJewelrySizeIsValid, enteredJewelryMaterialIsValid, enteredJewelryMadeInIsValid,enteredJewelryDesignerIsValid, enteredJewelryStartingPriceIsValid,enteredJewelryStartingTimeIsValid, enteredJewelryEndingTimeIsValid,enteredJewelryConditionIsValid, enteredJewelryBrandIsValid]);
    const jewelryNameIsInValid=enteredJewelryNameIsValid!=""&&JeweleryNameTouched;
    const jewelryMaterialIsInValid=enteredJewelryMaterialIsValid!=""&&JeweleryMaterialTouched;
    const jewelryTypeIsInValid=enteredJewelryTypeIsValid!=""&&JeweleryTypeTouched;
    const jewelryBrandIsInValid=enteredJewelryBrandIsValid!=""&&JeweleryBrandTouched;
    const jewelryMadeInIsInValid=enteredJewelryMadeInIsValid!=""&&JewelerymadeinTouched;
    const jewelryStartingPriceIsInValid=enteredJewelryStartingPriceIsValid!=""&&JewelerystartingpriceTouched;
    const jewelryBidIncreamentIsInValid=enteredJewelryBidIncreamentIsValid!=""&&JeweleryBidIncreamentTouched;
    const jewelryStartingTimeIsInValid=enteredJewelryStartingTimeIsValid!=""&&JewelerystartingtimeTouched;
    const jewelryEndingTimeIsInValid=enteredJewelryEndingTimeIsValid!=""&&JeweleryendingtimeTouched;
    const jewelryConditionIsInValid=enteredJewelryConditionIsValid!=""&&JeweleryConditionTouched;
    const jewelrySizeIsInValid=enteredJewelrySizeIsValid!=""&&JewelerySizeTouched;
    const jewelryDesignerIsInValid=enteredJewelryDesignerIsValid!=""&&JewelerydesignerTouched;
    
  //setting states of three categories
  const carClick=()=>{
    setcar(true);
    setjewelery(false);
    sethouse(false);
    setProductAdded(false);
    setFormTouched(false);
    setformisvalid(false);
  }
  const JewClick=()=>{
    setcar(false);
    setjewelery(true);
    sethouse(false);
    setProductAdded(false);
    setFormTouched(false);
    setformisvalid(false);
  }
  const houseClick=()=>{
    setcar(false);
    setjewelery(false);
    sethouse(true);
    setProductAdded(false);
    setFormTouched(false);
    setformisvalid(false);
  }
  //getting input from car form
  const nameInputHandler=(event)=>{
        setName(event.target.value);
    }
    const modelInputHandler=(event)=>{
        setModel(event.target.value);
    }
    const madeInInputHandler=(event)=>{
        setMadeIn(event.target.value);
    }
    const StartingpriceInputHandler=(event)=>{
        setstartingprice(event.target.value);
    }
    const bidIncreamentInputHandler=(event)=>{
        setbidIncreament(event.target.value);
    }
    const EndingtimeInputHandler=(event)=>{
        setendingtime(event.target.value);
    }
    const Startingtimehandler=(event)=>{
        setstartingtime(event.target.value);
    }
    const FuelInputHandler=(event)=>{
        setfuel(event.target.value);
    }
    const MilageInputHandler=(event)=>{
        setmilage(event.target.value);
    }
    const  ConditionInputHandler=(event)=>{
        setcondition(event.target.value);
    }
    const  DoorsInputHandler=(event)=>{
        setdoors (event.target.value);
    }
    const FileInputHandler=(event)=>{
        setFile(Array.from(event.target.files));
    }
    const  TransmissionInputHandler=(event)=>{
        settransmission(event.target.value);
    }
    const  EngineInputHandler=(event)=>{
        setengine(event.target.value);
    }
    const ColorInputHandler=(event)=>{
        setcolor(event.target.value);
    }
    const carPurchaseInputHandler =(event)=>{
        setCarPurchase(event.target.value)
    }
    //getting input from house form
  const HouseNameInputHandler=(event)=>{
    setHouseName(event.target.value);
  }
    const HouseFloorsInputHandler=(event)=>{
        setHouseFloors(event.target.value);
    }
    const HouseBedroomsInputHandler=(event)=>{
        setHouseBEdrooms(event.target.value);
    }
    const HouseConditionInputHandler=(event)=>{
        setHouseCondition(event.target.value);
    }
    const HouseAddressInputHandler=(event)=>{
        setHouseAddress(event.target.value);
    }
    const HousePlotSizeInputHandler=(event)=>{
        setHousePlotsize(event.target.value);
    }
    const HouseStartingPriceInputHandler=(event)=>{
        setHouseStartingPrice(event.target.value);
    }
    const HouseBidIncreamentInputHandler=(event)=>{
        setHouseBidIncreament(event.target.value);
    }
    const HouseEndingTimeInputHandler=(event)=>{
        setHouseEndingTime(event.target.value);
        
    }
    const HouseStartingTimeInputHandler=(event)=>{
        setHouseStartingTime(event.target.value);
    }
    const HouseFileInputHandler=(event)=>{
        setHouseFile(Array.from(event.target.files));
    }
    const housePurchaseInputHandler=(event)=>{
        setHousePurchase(event.target.value)
    }
    //on submitting car form
    const handleSubmit=(event)=>{
    event.preventDefault();
    setFormTouched(true);
    setNameTouched(true);
    setmodelTouched(true);
    setmadeinTouched(true);
    setstartingpriceTouched(true);
    setconditionTouched(true);
    setcolorTouched(true);
    setfuelTouched(true);
    setmileageTouched(true);
    setdoors(true);
    settransmissionTouched(true);
    setengineTouched(true);
    setstartingtimeTouched(true);
    setendingtimeTouched(true);
    console.log(file);
    const values={
        name:name,
        model:model,
        madeIn:madeIn,
        startingprice:startingprice,
        bidIncreament:bidIncreament,
        startingtime:startingtime,
        endingtime:endingtime,
        fuel:fuel,
        milage:milage,
        doors:doors,
        condition:condition,
        photos:file,
        transmission:transmission,
        engine:engine,
        color:color,
        uid:userid,
        purchase:carPurchase
    }
    const formDataToSend = new FormData();
        Object.keys(values).forEach(key => {
            if (key === 'photos') {
                values.photos.forEach((photo, index) => {
                    formDataToSend.append('photo', photo); // Ensure the key name matches 'photo'
                });
            } else {
                formDataToSend.append(key, values[key]);
            }
        });
    
    const config={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
    if(formisvalid)
    {
    axios.post('http://localhost:3001/uploaditem',formDataToSend,config)
        .then(res=>{
            if(res.data.status=="success")
            {
                console.log('tana');
                setProductAdded(true);
                setName("");
                setNameTouched(false);
                setModel("");
                setmodelTouched(false);
                setMadeIn("");
                setmadeinTouched(false);
                setstartingprice(0);
                setstartingpriceTouched(false);
                
                setbidIncreament(0);
                setbidIncreamentTouched(false);
                setcondition("");
                setconditionTouched(false);
                setcolor("");
                setcolorTouched(false);
                setfuel(0);
                setfuelTouched(false);
                setmilage(0);
                setmileageTouched(false);
                // setFile("");
                setdoors(0);
                setdoors(false);
                settransmission("");
                settransmissionTouched(false);
                setengine(0);
                setengineTouched(false);
                setstartingtime("");
                setstartingtimeTouched(false);
                setendingtime("");
                setendingtimeTouched(false);
                setformisvalid(true);
                setFormTouched(false);
            }
            else{
                console.log("awww");
            }
        }).catch(err=>{
            console.log("error");
        })
  }}
    //on submitting house form
  const handleHouseSubmit=(event)=>{
    event.preventDefault();
    setHouseNameTouched(true);
    setHouseFloorTouched(true);
    setHouseBedroomsTouched(true);
    setHousePlotSizeTouched(true);
    setHouseStartingPriceTouched(true);
    setHouseStartingTimeTouched(true);
    setHouseEndingTimeTouched(true);
    setHouseConditionTouched(true);
    setHouseAddressTouched(true);
    setHouseBidIncreamentTouched(true);
    const values={
        HouseName:HouseName,
        HouseFloors:HouseFloors,
        HouseAddress:HouseAddress,
        HouseBedrooms:HouseBedrooms,
        HouseCondition:HouseCondition,
        HouseStartingPrice:HouseStartingPrice,
        HouseBidIncreament:HouseBidIncreament,
        HouseEndingTime:HouseEndingTime,
        HouseStartingTime:HouseStartingTime,
        photos:HouseFile,
        HousePlotSize:HousePlotSize,
        uid:userid,
        purchase:housePurchase
    }
    const formDataToSend = new FormData();
    Object.keys(values).forEach(key => {
        if (key === 'photos') {
            values.photos.forEach((photo, index) => {
                formDataToSend.append('photo', photo); // Ensure the key name matches 'photo'
            });
        } else {
            formDataToSend.append(key, values[key]);
        }
    });
    const config={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
    if(houseformisvalid)
    {
    axios.post('http://localhost:3001/uploadhouseitem',formDataToSend,config)
    .then(res=>{
        if(res.data.status=="success")
        {
            console.log('tana');
            setProductAdded(true);
            setHouseNameTouched(false);
            setHouseName("");
            setHouseFloorTouched(false);
            setHouseFloors(0);
            setHouseBedroomsTouched(false);
            setHouseBEdrooms(0);
            setHousePlotSizeTouched(false);
            setHousePlotsize(0);
            setHouseStartingPriceTouched(false);
            setHouseStartingPrice(0);
            setHouseStartingTimeTouched(false);
            setHouseStartingTime("");
            setHouseEndingTimeTouched(false);
            setHouseEndingTime("");
            setHouseConditionTouched(false);
            setHouseCondition("");
            setHouseAddressTouched(false);
            setHouseAddress("");
            setHouseBidIncreamentTouched(false);
            setHouseBidIncreament(0);
            setformisvalid(true);
            setFormTouched(false);
            Navigate('/UploadItem' );
        }
        else{
            console.log("awww");
        }
    }).catch(err=>{
        console.log("error");
    })
  }}
  const handleJewelrySubmit=(event)=>{
    event.preventDefault();
    setJeweleryNameTouched(true);
    setJewelerymadeinTouched(true);
    setJewelerydesignerTouched(true);
    setJewelerystartingpriceTouched(true);
    setJewelerystartingtimeTouched(true);
    setJeweleryendingtimeTouched(true);
    setJeweleryTypeTouched(true);
    setJeweleryBidIncreamentTouched(true);
    setJeweleryMaterialTouched(true);
    setJeweleryBrandTouched(true);
    setJewelerySizeTouched(true);
    setJeweleryConditionTouched(true);
    const values={
        ProductName:ProductName,
        JewelryBrand:JewelryBrand,
        JewelryDesigner:JewelryDesigner,
        JewelryMadeIn:JewelryMadeIn,
        JewelryType:JewelryType,
        photos:JewelryFile,
        JewelryCondition:JewelryCondition,
        JewelryStartingPrice:JewelryStartingPrice,
        JewelryStartingTime,JewelryStartingTime,
        JewelryEndingTime:JewelryEndingTime,
        JewelryMaterial:JewelryMaterial,
        JewelrySize:JewelrySize,
        JeweleryBidIncreament:JewelryBidIncreament,
        uid:userid,
        purchase:jewelPurchase
    }
    const formDataToSend = new FormData();
    Object.keys(values).forEach(key => {
        if (key === 'photos') {
            values.photos.forEach((photo, index) => {
                formDataToSend.append('photo', photo); // Ensure the key name matches 'photo'
            });
        } else {
            formDataToSend.append(key, values[key]);
        }
    });
    const config={
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }
    if(jewelryformisvalid)
    {
    axios.post('http://localhost:3001/uploadjewelryitem',formDataToSend ,config)
    .then(res=>{
        if(res.data.status=="success")
        {
            console.log('tana');
            
            setProductName("");
            setJewelryBrand("");
            setJewelryDesigner("");
            setJewelryMadeIn("");
            setJewelryType("");
            setJewelryCondition("");
            setJewelryStartingPrice(0);
            setJewelryStartingTime("");
            setJewelryEndingTime("");
            setJewelryMaterial("");
            setJewelrySize(0);
            setProductAdded(true);
            setJeweleryNameTouched(false);
            setJewelerymadeinTouched(false);
            setJewelerydesignerTouched(false);
            setJewelerystartingpriceTouched(false);
            setJewelerystartingtimeTouched(false);
            setJeweleryendingtimeTouched(false);
            setJeweleryTypeTouched(false);
            setJeweleryBidIncreamentTouched(false);
            setJeweleryMaterialTouched(false);
            setJeweleryBrandTouched(false);
            setJewelerySizeTouched(false);
            setJeweleryConditionTouched(false);
            setformisvalid(true);
            setFormTouched(false);
            Navigate('/UploadItem');
        }
        else{
            console.log("awww");
        }
    }).catch(err=>{
        console.log("error");
    })
  }}
  
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };

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
    
    <button></button>
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
    <div className="container" style={{marginLeft:330}}>
                <ul className="breadcrumb" style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '15px' }}>
                    <li>
                        <div className="text-center">
                            <button onClick={carClick} className="custom-button btn-md" >Cars</button>
                        </div>
                    </li>
                    <li>
                        <div className="text-center">
                            <button onClick={JewClick} className="custom-button">Jewelry</button>
                        </div>
                    </li>
                    <li>
                        <div className="text-center">
                            <button onClick={houseClick} className="custom-button">House</button>
                        </div>
                    </li>
                </ul>
            </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    {car&&
    <section class="account-section padding-bottom">
        <div class="container">
            <div class="account-wrapper mt--100 mt-lg--440">
                <div class="left-side">
                    <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                        <h2 class="title">Cars</h2>
                        <p>We're happy you're here!</p>
                    </div>
                   
                    
                    <form class="login-form" onSubmit={handleSubmit} >
                        <div class="form-group mb-30">
                            <label for="car-name"> <i class="fas fa-car"></i></label>
                            <input type="text" id="car-name" onChange={nameInputHandler} onBlur={NameBlurHandle} value={name} name="name" placeholder="Name"/>
                        </div>
                        {nameIsInValid && <p  className="text-danger text-right">Name Cannot be Empty</p>}
                        <div class="form-group mb-30">
                            <label for="car-model"><i class="fas fa-car"></i></label>
                            <input type="text" id="car-model" onChange={modelInputHandler} onBlur={ModelBlurHandle} value={model} name="model" placeholder="Model"/>
                        </div> 
                        {ModelIsInValid && <p className="text-danger">{enteredModelIsValid}</p>}
                        
                        <div class="form-group mb-30">
                            <label for="car-color"><i class="fas fa-palette"></i></label>
                            <input type="text" id="car-color" onChange={ColorInputHandler} onBlur={ColorBlurHandle} value={color} name="color" placeholder="Car Color"/>
                        </div>
                        
                        {ColorIsInValid && <p className="text-danger">{enteredcolorIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-condition"><i class="fas fa-car"></i></label>
                            <input type="text" id="car-condition" onChange={ConditionInputHandler} onBlur={ConditionBlurHandle} value={condition} name="condition" placeholder="CarCondition"/>
                            
                        </div>
                        {ConditionIsInValid && <p className="text-danger">{enteredConditionIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-madeIn"><i class="fas fa-car"></i></label>
                            <input type="text" id="car-madeIn" onChange={madeInInputHandler} onBlur={MadeInBlurHandle} value={madeIn} name="madeIn" placeholder="Made In"/>
                        </div> 
                        {MadeInIsInValid && <p className="text-danger">{enteredMadeInIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-transmission"><i class="fas fa-car"></i></label>
                            <input type="text" id="car-transmission"  value={transmission} onBlur={TransmissionBlurHandle} onChange={TransmissionInputHandler} name="transmission" placeholder="Transmission"/>
                        </div>
                        {TransmissionIsInValid && <p className="text-danger">{enteredTransmissionIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-doors"><i class="fas fa-door-closed"></i></label>
                            <input type="number" min="0" id="car-doors" value={doors || ''} onBlur={DoorsBlurHandle} onChange={DoorsInputHandler} name="doors" placeholder="Doors"/>
                            
                        </div>
                        {DoorsIsInValid && <p className="text-danger">{enteredDoorsIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-milage"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="car-milage"  value={milage || ''} onBlur={MileageBlurHandle} onChange={MilageInputHandler} name="milage" placeholder="Mileage"/>
                            
                        </div>
                        {MilageIsInValid && <p className="text-danger">{enteredMileageIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-engine"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="car-engine" value={engine || ''} onBlur={EngineBlurHandle} onChange={EngineInputHandler} name="engine" placeholder="Engine"/>
                            
                        </div>
                        {EngineIsInValid && <p className="text-danger">{enteredEngineIsValid}</p>}

                        <div class="form-group mb-30">
                            <label for="car-startingprice"><i class="fas fa-dollar-sign"></i></label>
                            <input type="number" min="0" id="car-startingprice"  value={startingprice || ''} onBlur={StartingPriceBlurHandle}  onChange={StartingpriceInputHandler} name="startingprice" placeholder="Starting Price"/>
                        </div>
                        {StartingPriceIsInValid && <p className="text-danger">{enteredstartingpriceIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-bidIncreament"><i class="fas fa-dollar-sign"></i></label>
                            <input type="number" min="0" id="car-bidIncreament"  value={bidIncreament || ''} onBlur={bidIncreamentBlurHandle}  onChange={bidIncreamentInputHandler} name="bidIncreament" placeholder="Bid Increament"/>
                        </div>
                        {bidIncreamentIsInValid && <p className="text-danger">{enteredbidIncreamentIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-startingtime"><i class="fas fa-calendar-alt"></i></label>
                            <input type="datetime-local" id="car-startingtime"  value={startingtime} onBlur={StartingTimeBlurHandle} onChange={Startingtimehandler} name="startingtime" placeholder="Starting Time"/>
                            
                        </div>
                        {StartingTimeIsInValid && <p className="text-danger">{enteredstartingtimeIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-endingtime"><i class="fas fa-calendar-alt"></i></label>
                            <input type="datetime-local" id="car-endingtime"  value={endingtime} onBlur={EndingTimeBlurHandle} onChange={EndingtimeInputHandler} name="endingtime" placeholder="Ending Time"/>
                            
                        </div>
                        {EndingTimeIsInValid && <p className="text-danger">{enteredendingtimeIsValid}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div class="form-group mb-30">
                            <label for="car-feul"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="car-feul"  value={fuel || ''} onBlur={FuelBlurHandle} onChange={FuelInputHandler} name="startingtime" placeholder="Fuel"/>
                            
                        </div>
                        {FuelIsInValid && <p className="text-danger">{enteredFuelIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="car-purchase"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="car-purchase"  value={carPurchase || ''} onChange={carPurchaseInputHandler} name="carpurchase" placeholder="Direct Purchase Price"/>
                            
                        </div>
                        <div class="form-group mb-30">
                             <label for="car-file-input" class="custom-upload"><i class="fas fa-image"></i></label>
                               
                            
                        <input class="form-control" onChange={FileInputHandler} name ="file" id="formFileLg" type="file" multiple/>
                       </div>

                        <div class="form-group mb-0">
                            
                            <button type="submit"  class="custom-button" >Upload Car</button>
                        </div>
                        <br></br>
                        {ProductAdded && <p style={{textAlign:"center", color:"red"}}>Your Product Added Successfully</p>}
                        {formV && <p style={{textAlign:"center",color:"red"}}>Form is not valid</p>}
                    </form>
                </div>
                <div class="right-side cl-white">
                    <div class="section-header mb-0">
                    <h3 class="title mt-0">To see All the Products?</h3>
                    
                        <NavLink to="/product1" class="custom-button transparent">Cars</NavLink>
                        <br></br>
                        <NavLink to="/product2" class="custom-button transparent">House</NavLink>
                        <br></br>
                        <NavLink to="/product3" class="custom-button transparent">Jewelrey</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
{jewelery&&
               <section class="account-section padding-bottom">
               <div class="container">
                   <div class="account-wrapper mt--100 mt-lg--440">
                       <div class="left-side">
                           <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                               <h2 class="title">Jewelry</h2>
                               <p>We're happy you're here!</p>
                           </div>
                          
                           <form class="login-form" onSubmit={handleJewelrySubmit}>
                               <div class="form-group mb-30">
                                   <label for="jewelry-name"><i class="fas fa-gem"></i></label>
                                   <input type="text" id="jewelry-name"  value={ProductName} onChange={ProductNameInputHandler} onBlur={JewelryNameBlurHandle} name="ProductName" placeholder="Product Name"/>
                               </div>
                               
                        {jewelryNameIsInValid && <p className="text-danger">{enteredJewelryNameIsValid}</p>}
                               <div class="form-group mb-30">
                                    <label for="jewelry-type"><i class="fas fa-gem"></i></label>
                                    <div>
                                    <select id="jewelry-type" value={JewelryType} onBlur={JeweleryTypeBlurHandle} onChange={JewelryTypeInputHandler} name="JewelryType">
                                        <option  value="" disabled selected hidden>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jewelry Type</option>
                                        <option  value="necklace">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Necklace</option>
                                        <option  value="bracelet">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bracelet</option>
                                        <option  value="ring">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ring</option>
                                        <option  value="earrings">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Earrings</option>
                                    </select>
                                    </div>
                                </div>
                                
                        {jewelryTypeIsInValid && <p className="text-danger">{enteredJewelryTypeIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-material"><i class="fas fa-gem"></i></label>
                                   <input type="text"  id="jewelry-material" value={JewelryMaterial} onBlur={JeweleryMaterialBlurHandle} onChange={JewelryMaterialInputHandler} name="JewelryMaterial" placeholder="JewelryMaterial"/>
                                   
                               </div>
                               {jewelryMaterialIsInValid && <p className="text-danger">{enteredJewelryMaterialIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-madeIn"><i class="fas fa-gem"></i></label>
                                   <input type="text"  id="jewelry-madeIn" value={JewelryMadeIn} onBlur={JewelerymadeinBlurHandle} onChange={JewelryMadeInInputHandler} name="JewelryMadeIn" placeholder="Made In"/>
                                   
                               </div>
                               {jewelryMadeInIsInValid && <p className="text-danger">{enteredJewelryMadeInIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-brand"><i class="fas fa-gem"></i></label>
                                   <input type="text"  id="jewelry-brand" value={JewelryBrand} onBlur={JeweleryBrandBlurHandle} onChange={JewelryBrandInputHandler} name="JewelryBrand" placeholder="Jewelry Brand"/>
                                   
                               </div>
                               {jewelryBrandIsInValid && <p className="text-danger">{enteredJewelryBrandIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-designer"><i class="fas fa-id-badge"></i></label>
                                   <input type="text"  id="jewelry-designer" value={JewelryDesigner} onBlur={JewelerydesignerBlurHandle} onChange={JewelryDesignerInputHandler} name="JewelryDesigner" placeholder="Jewelry Designer"/>
                                   
                               </div>
                               {jewelryDesignerIsInValid && <p className="text-danger">{enteredJewelryDesignerIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-condition"><i class="fas fa-gem"></i></label>
                                   <input type="text" id="jewelry-condition" onChange={JewelryConditionInputHandler} onBlur={JeweleryConditionBlurHandle} value={JewelryCondition} name="JewelryCondition" placeholder="Jewelry Condition"/>
                                   
                               </div>
                               {jewelryConditionIsInValid && <p className="text-danger">{enteredJewelryConditionIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-size"><i class="fas fa-gem"></i></label>
                                   <input type="number"min="1" id="jewelry-size" onChange={JewelrySizeInputHandler} onBlur={JewelerySizeBlurHandle} value={JewelrySize ||""} name="JewelrySize" placeholder="Jewelry Size"/>
                                   
                               </div>
                               {jewelrySizeIsInValid && <p className="text-danger">{enteredJewelrySizeIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-startingprice"><i class="fas fa-dollar-sign"></i></label>
                                   <input type="number" min="1" id="jewelry-startingprice" value={JewelryStartingPrice || ''} onBlur={JewelerystartingpriceBlurHandle} onChange={JewelryStartingPriceInputHandler} name="JewelryStartingPrice" placeholder="Starting Price"/>
                                   
                               </div>
                               {jewelryStartingPriceIsInValid && <p className="text-danger">{enteredJewelryStartingPriceIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-BidIncreament"><i class="fas fa-dollar-sign"></i></label>
                                   <input type="number" min="1" id="jewelry-BidIncreament" value={JewelryBidIncreament || ''} onBlur={JeweleryBidIncreamentBlurHandle} onChange={JewelryBidIncreamentInputHandler} name="JewelryBidIncreament" placeholder="Bid Increament"/>
                                   
                               </div>
                               {jewelryBidIncreamentIsInValid && <p className="text-danger">{enteredJewelryBidIncreamentIsValid}</p>}
                               
                               <div class="form-group mb-30">
                                   <label for="jewelry-startingtime"><i class="fas fa-calendar-alt"></i></label>
                                   <input type="datetime-local" id="jewelry-startingtime" value={JewelryStartingTime } onBlur={JewelerystartingtimeBlurHandle} onChange={JewelryStartingTimeInputHandler} name="JewelryStartingTime" placeholder="Starting Time"/>
                               </div>
                               {jewelryStartingTimeIsInValid && <p className="text-danger">{enteredJewelryStartingTimeIsValid}</p>}
                               <div class="form-group mb-30">
                                   <label for="jewelry-endingtime"><i class="fas fa-calendar-alt"></i></label>
                                   <input type="datetime-local" id="jewelry-endingtime" value={JewelryEndingTime } onBlur={JeweleryendingtimeBlurHandle} onChange={JewelryEndingTimeInputHandler} name="JewelryEndingTime" placeholder="Ending Time"/>
                                   
                               </div>
                               {jewelryEndingTimeIsInValid && <p className="text-danger">{enteredJewelryEndingTimeIsValid}</p>}
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div class="form-group mb-30">
                            <label for="jewel-purchase"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="jewel-purchase"  value={jewelPurchase || ''} onChange={jewelPurchaseInputHandler} name="jewelpurchase" placeholder="Direct Purchase Price"/>
                            
                        </div>
                               <div class="form-group mb-30">
                                
                               <label for="jewelry-file-input" class="custom-upload"><i class="fas fa-image"></i></label>
                               <input class="form-control" type="file" onChange={JewelryFileInputHandler} name="jewelryphoto" id="jewelry-file-input" multiple/>
                              </div>
                               <div class="form-group mb-0">
                                   
                                   <button type="submit"  class="custom-button" >Upload Jewelry</button>
                               </div>
                               <br></br>
                        {ProductAdded && <p style={{textAlign:"center", color:"red"}}>Your Product Added Successfully</p>}
                        {formV && <p style={{textAlign:"center",color:"red"}}>Form is not valid</p>}
                           </form>
                       </div>
                       <div class="right-side cl-white">
                           <div class="section-header mb-0">
                            
                           <h3 class="title mt-0">To see All the Products?</h3>
                        <NavLink to="/product1" class="custom-button transparent">Cars</NavLink>
                        <br></br>
                        <NavLink to="/product2" class="custom-button transparent">House</NavLink>
                        <br></br>
                        <NavLink to="/product3" class="custom-button transparent">Jewelrey</NavLink>
                           </div>
                       </div>
                   </div>
               </div>
           </section> 
}
{house&&
    <section class="account-section padding-bottom">
        <div class="container">
            <div class="account-wrapper mt--100 mt-lg--440">
                <div class="left-side">
                    <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                        <h2 class="title">House</h2>
                        <p>We're happy you're here!</p>
                    </div>
                   
                    <form class="login-form" onSubmit={handleHouseSubmit}>
                        <div class="form-group mb-30">
                            <label for="house-name"><i class="fas fa-home"></i></label>
                            <input type="text" id="house-name"  value={HouseName} onChange={HouseNameInputHandler} onBlur={HouseNameBlurHandle} name="HouseName" placeholder="House Name"/>
                        </div>
                        
                        {HouseNameIsInValid && <p className="text-danger">{enteredHouseNameIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-floors"><i class="fas fa-home"></i></label>
                            <input type="number" min="0" id="house-floors" value={HouseFloors || ''} onBlur={HouseFloorBlurHandle} onChange={HouseFloorsInputHandler} name="HouseFloors" placeholder="No Of Floors"/>
                            
                        </div>

                        {HouseFloorsIsInValid && <p className="text-danger">{enteredHouseFloorIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-bedrooms"><i class="fas fa-home"></i></label>
                            <input type="number" min="0" id="house-bedrooms" value={HouseBedrooms || ''} onBlur={HouseBedroomsBlurHandle} onChange={HouseBedroomsInputHandler} name="HouseBedrooms" placeholder="No Of Bedrooms"/>
                            
                        </div>

                        {HouseBedRoomsIsInValid && <p className="text-danger">{enteredHouseBedroomsIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-condition"><i class="fas fa-home"></i></label>
                            <input type="text" id="house-condition" onChange={HouseConditionInputHandler} onBlur={HouseConditionBlurHandle} value={HouseCondition} name="HouseCondition" placeholder="House Condition"/>
                            
                        </div>

                        {HouseConditionIsInValid && <p className="text-danger">{enteredHouseConditionIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-address"><i class="fas fa-map-marker-alt"></i></label>
                            <input type="text" id="house-address" onChange={HouseAddressInputHandler} onBlur={HouseAddressBlurHandle} value={HouseAddress} name="HouseAddress" placeholder="Address"/>
                            
                        </div>

                        {HouseAddressIsInValid && <p className="text-danger">{enteredHouseConditionIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-plot-size"><i class="fas fa-home"></i></label>
                            <input type="number" id="house-plot-size" onChange={HousePlotSizeInputHandler} onBlur={HousePlotSizeBlurHandle} value={HousePlotSize || ""} name="HousePlotSize" placeholder="Plot Size(in Marla)"/>
                            
                        </div>

                        {HousePlotSizeIsInValid && <p className="text-danger">{enteredHousePlotSizeIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-startingprice"><i class="fas fa-dollar-sign"></i></label>
                            <input type="number" id="house-startingprice" value={HouseStartingPrice || ''} onBlur={HouseStartingPriceBlurHandle} onChange={HouseStartingPriceInputHandler} name="HouseStartingPrice" placeholder="Starting Price"/>
                            
                        </div>
                       
                        {HouseStartingPriceIsInValid && <p className="text-danger">{enteredHouseStartingPriceIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-BidIncreament"><i class="fas fa-dollar-sign"></i></label>
                            <input type="number" id="house-BidIncreament" value={HouseBidIncreament || ''} onBlur={HouseBidIncreamentBlurHandle} onChange={HouseBidIncreamentInputHandler} name="HouseBidIncreament" placeholder="Bid Increament"/>
                        </div>
                        {HouseBidIncreamentIsInValid && <p className="text-danger">{enteredHouseBidIncreamentIsValid}</p>}
                        
                        <div class="form-group mb-30">
                            <label for="house-startingtime"><i class="fas fa-calendar-alt"></i></label>
                            <input type="datetime-local" id="house-startingtime" value={HouseStartingTime } onBlur={HouseStartingTimeBlurHandle} onChange={HouseStartingTimeInputHandler} name="HouseStartingTime" placeholder="Starting Time"/>
                            
                        </div>
                        {HouseStartingTimeIsInValid && <p className="text-danger">{enteredHouseStartingTimeIsValid}</p>}
                        <div class="form-group mb-30">
                            <label for="house-endingtime"><i class="fas fa-calendar-alt"></i></label>
                            <input type="datetime-local" id="house-endingtime" value={HouseEndingTime } onBlur={HouseEndingTimeBlurHandle} onChange={HouseEndingTimeInputHandler} name="HouseEndingTime" placeholder="Ending Time"/>
                            
                        </div>
                        
                        {HouseEndingTimeIsInValid && <p className="text-danger">{enteredHouseEndingTimeIsValid}</p>}
                        
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div class="form-group mb-30">
                            <label for="house-purchase"><i class="fas fa-car"></i></label>
                            <input type="number" min="0" id="house-purchase"  value={housePurchase || ''} onChange={housePurchaseInputHandler} name="housepurchase" placeholder="Direct Purchase Price"/>
                            
                        </div>
                        <div class="form-group mb-30">
                            
                               
                        <label for="house-file-input" class="custom-upload"><i class="fas fa-image"></i> </label>
                        <input type="file" onChange={HouseFileInputHandler} name="housephoto" id="house-file-input" multiple/>
                       </div>
                        <div class="form-group mb-0">
                            
                            <button type="submit"  class="custom-button" >Upload House</button>
                        </div>
                        
                        <br></br>
                        {ProductAdded && <p style={{textAlign:"center", color:"red"}}>Your Product Added Successfully</p>}
                        {formV && <p style={{textAlign:"center",color:"red"}}>Form is not valid</p>}
                    </form>
                </div>
                <div class="right-side cl-white">
                    <div class="section-header mb-0">
                        
                    <h3 class="title mt-0">To see All the Products?</h3>
                    
                        <NavLink to="/product1" class="custom-button transparent">Cars</NavLink>
                        <br></br>
                        <NavLink to="/product2" class="custom-button transparent">House</NavLink>
                        <br></br>
                        <NavLink to="/product3" class="custom-button transparent">Jewelrey</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  }
    
</>
)
}
export default UploadItempage;