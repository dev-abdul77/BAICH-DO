import {NavLink} from "react-router-dom";
function ErrorPage()
{
    const backgroundImageUrl = 'errorimages/error-bg.png'; // Replace with the actual path to your image
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
    return (
        <>
       
    <div class="error-section padding-top padding-bottom" style={sectionStyle}>
        <div class="container">
            <div class="error-wrapper">
                <div class="error-thumb">
                    <img src="errorimages/error.png" alt="error"/>
                </div>
                <h4 class="title">Return to the <NavLink to="/">homepage</NavLink></h4>
            </div>
        </div>
    </div>
        </>
    )
}
export default ErrorPage;