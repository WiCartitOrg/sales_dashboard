import { Route, Routes ,useLocation} from "react-router-dom";
import RightNav from "./components/RightNav";
import TopNav from "./components/TopNav";
import {useState , useEffect} from 'react'
import Home from "./page/Home";
import Orders from "./page/Orders";
import Products from "./page/Products";
import Messages from "./page/Messages";
import Settings from "./page/Settings";
import Supports from "./page/Support";
import WalletDitails from "./sub-pages/WalletDitails";
import CashOutStep from "./sub-pages/CashOutStep";
import ProductList from "./page/ProductList";
import CreateStore from "./page/CreateStore";

function App() {
  const [Theme, setTheme] = useState(true);
  const pathname = useLocation().pathname;
  const currentTheme=localStorage.getItem('currentTheme')
  
  return (
    <div className={Theme?"body f-w ":"body f-w dark-them"}> 
      <RightNav/>

     <div className="content">
      <TopNav 
      theme={setTheme}
      condition={Theme}
      />
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/supports" element={<Supports/>}/>
        <Route path="/wallet details" element={<WalletDitails/>}/>
        <Route path="/cash/:id" element={<CashOutStep/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
        <Route path="/Create Store" element={<CreateStore/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
