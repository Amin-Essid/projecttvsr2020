import React, {useState} from 'react';
import menuIcon from '../images/icons/menuIcon.png';
import {Link} from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            
                <span className='nav-item'>
                  <Link to={() => `/2020${Math.floor(Math.random()*1000)}`} className='nav-item__link'>
                    رمضان 2020
                  </Link>
                </span>
                <span className='nav-item'>
                  <Link to={() => `/كل-الأصناف${Math.floor(Math.random()*1000)}`} className='nav-item__link'>كل المسلسلات </Link>
                </span>
                <span className='nav-item'>
                  <Link to='#' className='nav-item__link'> اتصل بنا</Link>
                </span>
                <DropdownNavItem content={<img src={menuIcon} alt="menu"/>}>
                    <DropdownMenu></DropdownMenu>
                </DropdownNavItem>
                
            
        </nav>
    )


    function DropdownNavItem(props){
        return (
            <span className='menu-icon'>
              <Link to="#" className="nav-item__link" onClick={() => setOpen(!open)}>
                {props.content}
              </Link>
        
              {open && props.children}
            </span>
          );
    }

    function DropdownMenu(){

        function DropdownItem(props) {
            return (
              <li className="dropdown-item" onClick={() => setOpen(!open)}>
                {props.children}
              </li>
            );
          }

        return (
            <div className='dropdown'>
                <DropdownItem><Link to={() => `/2020${Math.floor(Math.random()*1000)}`}>رمضان 2020</Link></DropdownItem>
                <DropdownItem><Link to={() => `/كل-الأصناف${Math.floor(Math.random()*1000)}`}>
                كل المسلسلات</Link></DropdownItem>
                <DropdownItem><Link to="#">اتصل بنا</Link></DropdownItem>
            </div>
        )
    }
}

export default Navbar
