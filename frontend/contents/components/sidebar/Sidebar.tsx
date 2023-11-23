import { ProfileContext } from "@/contexts/ProfileContext";
import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendar, IconCalendarPlus, IconCaretLeft, IconDashboard, IconReportSearch, IconSettings, IconFileAnalytics,  } from "@tabler/icons-react";
import { IconCalendarCheck, IconCalendarEvent, IconCalendarSearch, IconChartBar, IconClock, IconListCheck, IconUserExclamation } from "@tabler/icons-react";
import { IconFileSpreadsheet, IconAffiliate, IconAd2, IconGridDots, IconChartTreemap, 
  IconCreativeCommonsBy, IconFileAlert, IconFileDelta, IconFiles } from "@tabler/icons-react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styles from "./SideBar.module.scss";
import axios from "axios";


//const skills = ['Java', 'Python', 'Rust'];


const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH

function Sidebar(props: any) {

  const router = useRouter();

  const [opened, { toggle }] = useDisclosure(true);

  const checkActiveLink = (link: any) => {
    return router?.pathname.includes(link) ? 'active' : ''
  }

  //Remove another active and active the current link
  const activeLink = (e: any) => {
    const navLinks = document?.querySelector('a.nav-link.active:not(.nav-calendar)')
    if (navLinks !== null) {
      navLinks?.classList?.remove('active')
    }
    e?.currentTarget?.classList?.add('active')
  }

  function checkIfOnPage(link: string) {
    const currentLink = router.pathname;
    
    return currentLink.includes(link);
  }

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // request all user skills
    const currentSkills = axios.get('http://localhost:8080/api/assigned-objectives/get/' + localStorage["email"]).then(
      (response: any) => { 
        //setSkills(response);
        console.log(response);
        setSkills(["Java", "Python"] as any);
      }
    ).catch((err: any) => {
      console.log(err);
      //setSkills(["Java", "Python"] as any);

      console.log(skills);
    })
  }, []);

  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary bg-gray-800 elevation-4">
        {/* Brand Logo */}
        <Image className="flex justify-center mx-auto -mb-12"
                src='/../public/CATGOOD01.png'
                width={150}
                height={150}
                alt="Picture of the author"
                />
        <Link href={`/start/dashboard`} className="brand-link ml-2.5">
          <span
            className="brand-text font-weight-bold ml-16"
            style={{ color: "white" }}
          >
            SkillKitty
          </span>
        </Link>
        {/* Sidebar */}
        
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              
              {/* Joined skills */}

              {
                skills?.map((skill: string) => {
                  return <li className="nav-item menu-is-opening menu-open" key={skill}>
                    <a
                      onClick={toggle}
                      href="#"
                      className={`nav-link nav-calendar`}>
                      <IconCalendar size={20} />
                      <p className="!animate-none" style={{ width: 'calc(100% - 20px)' }}>
                        <span className="flex justify-between items-center">
                          {skill}
                          <IconCaretLeft className={`${styles.icon_caret} ${opened ? styles.icon_caret_active : ''} `} size={20} />
                        </span>
                      </p>
                    </a>

                      
                    <Collapse in={opened}>
                      <ul className="nav nav-treeview" style={{ display: opened ? 'block' : 'none' }}>
                        <li className="nav-item calendar-plan">
                          <Link
                            href={`/start/${skill.toLowerCase()}/community`}
                            className={`nav-link ${checkActiveLink(skill.toLowerCase() + '/community')}`}
                            onClick={(e) => activeLink(e)}
                          >
                            <IconCalendarCheck size={20} />
                            <p className="!animate-none">Community</p>
                          </Link>
                        </li>
                        <li className="nav-item calendar-report">
                          <Link
                            href={`/start/${skill.toLowerCase()}/improvement`}
                            className={`nav-link ${checkActiveLink('/start/' + skill.toLowerCase() + '/improvement')}`}
                            onClick={(e) => activeLink(e)}
                          >
                            <IconCalendarSearch size={20} />
                            <p className="!animate-none">Improvement Roadmap</p>
                          </Link>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                })
              }
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}

export default Sidebar;
