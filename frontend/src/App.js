import {createBrowserRouter,BrowserRouter ,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Product1Page from './Pages/Product1';
import Product2Page from './Pages/Product2';
import RootLayout from './Root';
import Signinpage from './Pages/Signin';
import Signuppage from './Pages/Signup';
import Aboutuspage from './Pages/Aboutus';
import Contactuspage from './Pages/Contactus';
import ErrorPage from './Pages/Error';
import Dashboardpage from './Pages/Dashboard';
import UserProfile from './Pages/UserProfile';
import ReferralPage from './Pages/Referral';
import FvtBidsPage from './Pages/FvtBids';
import ProductDetailsPage from './Pages/ProDetails';
import UsersBidPage from './Pages/UserBid';
import WinningBidsPage from './Pages/WinningBids';
import NotificationalertsPage from './Pages/Notificationalerts';
import HomePage2 from './Pages/Home2';
import UploadItempage from './Pages/UploadItem';
import Product3Page from './Pages/Product3';
import AllAuction from './Pages/allAuction';
import MyitemsPage from './Pages/myitems';
import EditItem from './Pages/edititems';
import ChatbotPage from './Pages/Chatbot'
import SetBuyer from './Pages/setBuyer';
// const routeDefinitions=createRoutesFromElements(
// <Route>
//   <Route path='/' element={<Product1Page/>}></Route>
//   <Route path='/product2' element={<Product2Page/>}></Route>
// </Route>
// );
// const router=createBrowserRouter(routeDefinitions);
const router=createBrowserRouter([
  {path:'/',
  element:<RootLayout></RootLayout>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[{path:'/',element:<HomePage2></HomePage2>},
  {path:'/product1',element:<Product1Page></Product1Page>},
  {path:'/product2',element:<Product2Page></Product2Page>},
  {path:'/product3',element:<Product3Page></Product3Page>},
  {path:'/signin',element:<Signinpage></Signinpage>},
  {path:'/signup',element:<Signuppage></Signuppage>},
  {path:'/aboutus',element:<Aboutuspage></Aboutuspage>},
  {path:'/contactus',element:<Contactuspage></Contactuspage>},
  {path:'/dashboard',element:<Dashboardpage></Dashboardpage>},
  {path:'/userprofile',element:<UserProfile></UserProfile>},
  {path:'/referal',element:<ReferralPage></ReferralPage>},
  {path:'/fvtbids',element:<FvtBidsPage></FvtBidsPage>},
  {path:'/allauctions',element:<AllAuction></AllAuction>},
  {path:'/productdetails',element:<ProductDetailsPage></ProductDetailsPage>},
  {path:'/productdetails/:id/:type',element:<ProductDetailsPage></ProductDetailsPage>},
  {path:'/setBuyer/:id/:type',element:<SetBuyer></SetBuyer>},
  {path:'/userbid',element:<UsersBidPage></UsersBidPage>},
  {path:'/winningbid',element:<WinningBidsPage></WinningBidsPage>},
  {path:'/uploaditem',element:<UploadItempage></UploadItempage>},
  {path:'/notification',element:<NotificationalertsPage></NotificationalertsPage>},
  {path:'/myitems',element:<MyitemsPage></MyitemsPage>},
  {path:'/edititems',element:<EditItem></EditItem>},
  {path:'/chatbot',element:<ChatbotPage></ChatbotPage>},
  {path:'/edititems/:id/:type',element:<EditItem></EditItem>}
]}
     
 ]);
const App=()=>{
  return <RouterProvider router={router}/>;
}
export default App;