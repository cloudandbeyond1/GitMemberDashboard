import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import { useAppContext } from "../AppContext";
interface ProfileMenuItem {
  label: string;
  icon: string;
  redirectTo: string;
}

interface ProfileDropdownProps {
  menuItems: Array<ProfileMenuItem>;
  profilePic?: string;
  username: string;
  userTitle?: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
  const profilePic = props["profilePic"] || null;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState("");
  const { sharedValue } = useAppContext();
  useEffect(() => {
    fetchData()
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          // Access the first element here
          const firstItem = result[0];
          // ...
            console.log(result,"result")
        } else {
          console.error('Data is empty or not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const fetchData = async () => {
    try {

      const responseDataEnrollPrg = await fetch(
        "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/users.json"
    );

    const data = await responseDataEnrollPrg.json();
    console.log(data,"apidata");
    const filteredItems:any = Object.values(data).filter((items:any) => items.email === sharedValue);
    console.log(filteredItems,filteredItems[0].displayName,"152")
    setUserName(filteredItems[0].displayName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  /*
   * toggle profile-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-profile"
        as="a"
        onClick={toggleDropdown}
        className={classNames(
          "nav-link nav-user me-0 waves-effect waves-light",
          { show: dropdownOpen }
        )}
      >
        <img src={profilePic!} className="rounded-circle" alt="" />
        <span className="pro-user-name ms-1">
          {/* {props["username"]}  */}
          {userName}<i className="mdi mdi-chevron-down"></i>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu dropdown-menu-end profile-dropdown">
        <div onClick={toggleDropdown}>
          <div className="dropdown-header noti-title">
            {/* <h6 className="text-overflow m-0">Welcome !</h6>*/}
          </div>
          {(props.menuItems || []).map((item, i) => {
            return (
              <React.Fragment key={i}>
                {i === props["menuItems"].length - 1 && (
                  <div className="dropdown-divider"></div>
                )}
                <Link
                  to={item.redirectTo}
                  className="dropdown-item notify-item"
                  key={i + "-profile-menu"}
                >
                  <i className={`${item.icon} me-1`}></i>
                  <span>{item.label}</span>
                </Link>
                {item.label==="Profile" ?
                <div className="dropdown-divider"></div>:""
                }
              </React.Fragment>
            );
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
