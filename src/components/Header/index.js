import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";  
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";



const Header = () => {
    return (
        <>
          <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">
                    🛍️ Premium Products, Unmatched Service – Order Now & Elevate Your Experience! 🚀
                    </p>
                </div>
            </div>

             <div className="header">
              <div className="container">
                <div className="row">
                  <div className="logoWrapper d-flex align-items-center col-sm-2">
                    <Link to={'/'}><img src={Logo} alt="logo" /></Link>                
                  </div>

                  <div className="col-sm-10 d-flex align-items-center part2">
                  <CountryDropdown/>
                  <SearchBox/>


                  <div className="part3 d-flex align-items-center ml-auto">
                    <Button className="circle ml-3"><FiUser/></Button>
                    <div className="ml-2 cartTab d-flex align-items-center">
                      <span className="Price"> $0.00 </span>
                      <div className="position-relative ml-2">
                          <Button className="circle"><IoBagHandleOutline/>
                          </Button>
                          <span className="count d-flex align-items-center justify-content-center">1</span>
                      </div>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
             </div>
             
             <Navigation/>

          </div>
        </>
    );
};

export default Header;