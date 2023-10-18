import React,{useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../../AppContext"

import profileImg from "../../../../assets/images/users/user-1.jpg";

const UserBox = () => {
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
  return (
    <Card className="text-center">
      <Card.Body>
        <img
          src={profileImg}
          className="rounded-circle avatar-lg img-thumbnail"
          alt=""
        />
        <h4 className="mb-0">{userName}</h4>
        <p className="text-muted"></p>
        <button
          type="button"
          className="btn btn-success btn-xs waves-effect mb-2 waves-light"
        >
          Follow
        </button>{" "}
        <button
          type="button"
          className="btn btn-danger btn-xs waves-effect mb-2 waves-light"
        >
          Message
        </button>
        <div className="text-start mt-3">
          <h4 className="font-13 text-uppercase">About Me :</h4>
          <p className="text-muted font-13 mb-3">
            Hi I'm Johnathn Deo,has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type.
          </p>
          <p className="text-muted mb-2 font-13">
            <strong>Full Name :</strong>
            <span className="ms-2">{userName}</span>
          </p>

          <p className="text-muted mb-2 font-13">
            <strong>Mobile :</strong>
            <span className="ms-2">(123) 123 1234</span>
          </p>

          <p className="text-muted mb-2 font-13">
            <strong>Email :</strong>
            <span className="ms-2 ">user@email.domain</span>
          </p>

          <p className="text-muted mb-1 font-13">
            <strong>Location :</strong>
            <span className="ms-2">USA</span>
          </p>
        </div>
        <ul className="social-list list-inline mt-3 mb-0">
          <li className="list-inline-item">
            <Link
              to="#"
              className="social-list-item border-primary text-primary"
            >
              <i className="mdi mdi-facebook"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-danger text-danger">
              <i className="mdi mdi-google"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-list-item border-info text-info">
              <i className="mdi mdi-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link
              to="#"
              className="social-list-item border-secondary text-secondary"
            >
              <i className="mdi mdi-github"></i>
            </Link>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default UserBox;
