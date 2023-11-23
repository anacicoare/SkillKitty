import { Button, Switch } from "@mantine/core";
import Notify from "../Notify/Notify";
import { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import { ProfileContext } from "@/contexts/ProfileContext";
import { IconMenu2, IconUsers } from "@tabler/icons-react";
import UserInfors from "./UserInfors";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const { authorized, profile, logout, violationData } = useContext(ProfileContext);
  const [apiMode, setApiMode] = useState('Database');

  useEffect(() => {
    //Get api mode from localStorage
    const apiMode = localStorage.getItem('apiMode');
    if (!!apiMode) {
      setApiMode(apiMode);
    }
  }, []);

  //Handle on change api mode
  const handleOnChangeApiMode = (e: any) => {
    hanldeSuccess(e?.target?.checked ? 'Jira' : 'Database');
  }

  const hanldeSuccess = (mode: string) => {
    setApiMode(mode);
    localStorage.setItem('apiMode', mode);
    Notify.success("Change api mode successfully! The system will reload in a few seconds");
    setTimeout(function () {
      location.reload();
    }, 1500)
  }

  const handleSidebar = (e: any) => {
    e?.preventDefault();
    let body: any = document.querySelector("body");
    //If collapse -> expand
    if (body.classList.contains("sidebar-collapse") && !body.classList.contains("sidebar-closed")) {
      body.classList.remove("sidebar-collapse");
    } else {
      body.classList.add("sidebar-collapse");
    }
    //If close -> Open
    if (body.classList.contains("sidebar-closed") && body.classList.contains("sidebar-collapse")) {
      body.classList.add("sidebar-open");
      body.classList.remove("sidebar-closed");
      body.classList.remove("sidebar-collapse");
    }
  };

  /**
   * Reload the page with the latest data
   */
  const reloadPage = () => {
    location.reload();
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light sticky top-0">
      <ul className="navbar-nav flex items-center">
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            role="button"
            onClick={(e) => handleSidebar(e)}
          >
            <IconMenu2 />
          </a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item show flex gap-2 items-center">
          {authorized
            ?
            <>
              <UserInfors infor={profile} />
              {/* <Button onClick={() => logout()} variant={"light"}>Logout</Button> */}
            </>
            :
            <Link href={`/login`}>
              <Button variant={"light"}>Login</Button>
            </Link>}
        </li>
      </ul>
    </nav>
  );
}

export default Header
