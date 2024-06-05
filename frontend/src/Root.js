import { Outlet } from "react-router-dom";
import FooterComponent from "./Components/Footer";
function RootLayout()
{
return<>
<Outlet></Outlet>
<FooterComponent></FooterComponent>
</>
}
export default RootLayout;