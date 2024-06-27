import React from "react";
import { IoIosCreate } from "react-icons/io";
import {
  NavbarDiv,
  CreateDiv,
  Logo,
  CreateButton,
  LINK,
} from "./styledComponents";

const Navbar = () => (
  <NavbarDiv>
    <LINK to='/'>
      <Logo>
        <h1>MYBLOGS</h1>
      </Logo>
    </LINK>
    <CreateDiv>
      <LINK to='/create-blog'>
        <CreateButton>
          <IoIosCreate />
          <div>Write</div>
        </CreateButton>
      </LINK>
    </CreateDiv>
  </NavbarDiv>
);

export default Navbar;
