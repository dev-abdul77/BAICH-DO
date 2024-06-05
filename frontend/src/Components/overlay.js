import  ReactDOM from "react-dom"
const Overlaycode=()=>{
    return(
        <>
        
        </>
    )
}
const OverLay=()=>{
    return <>
    {ReactDOM.createPortal(<Overlaycode/>,document.getElementById('loader'))};
    </>
}
export default OverLay;