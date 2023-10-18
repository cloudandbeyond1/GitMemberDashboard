import React, {useRef, useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import { withSwal } from "react-sweetalert2";
import "../../../assets/css/radiobtn.css";
import classNames from "classnames";
// components

import { useAppContext } from '../../../AppContext';
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import SalesAnalyticsChart from "./SalesAnalyticsChart";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
import { Link } from "react-router-dom";

import  {database}  from "../../../firebase";
import { set, ref, push, get } from "firebase/database";
import { AnyIfEmpty } from 'react-redux';
import yoga from "../../../assets/images/program/5.jpg";
import weight from "../../../assets/images/program/weightstrength.jpg";
import leg from "../../../assets/images/program/leg.jpg";
import spinal from "../../../assets/images/program/Spinel.jpg";

const Dashboard1 = withSwal((props: any) => {
  const[currentdate,setCurrentdate]=useState(Date.now());
  const[task,setTask]=useState([]);
  const { sharedValue } = useAppContext();
  console.log(sharedValue,"sharedValueDas");
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
          "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/enrolledprograms.json"
      );

      const data = await responseDataEnrollPrg.json();
      console.log(data,"apidata");
      const filteredItems:any = Object.values(data).filter((items:any) => items.user === sharedValue);
      console.log(filteredItems,"filteredItemsapi")

    setTask(filteredItems);
let todayDate:any =  new Date().toLocaleDateString('en-GB');
setCurrentdate(todayDate);
// console.log(currentDate,filteredItems[0].startdate,filteredItems[0].enddate,"Date")
// if((currentDate>filteredItems[0].startdate) && (currentDate<filteredItems[0].enddate))
// {
//   console.log("true")
// }
// else
// {
//   console.log("false")
// }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
      let weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      const d = new Date();
      let weekday = weekdays[d.getDay()];
      console.log('day',weekday);
      const myDiv = document.getElementById('myDiv');
      const myDiv1 = document.getElementById('myDiv1');
      const myDiv2 = document.getElementById('myDiv2');
      const myDiv3 = document.getElementById('myDiv3');
      const myDiv4 = document.getElementById('myDiv4');
      const myDiv5 = document.getElementById('myDiv5');
      const myDiv6 = document.getElementById('myDiv6');
if(weekday === "Monday")
{
  if (myDiv) {
      myDiv.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Tuesday")
{
  if (myDiv1) {
      myDiv1.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Wednesday")
{
  if (myDiv2) {
      myDiv2.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Thursday")
{
  if (myDiv3) {
      myDiv3.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Friday")
{
  if (myDiv4) {
      myDiv4.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Saturday")
{
  if (myDiv5) {
      myDiv5.className="sc-lnIvbd iNVSgV";
    }
}
if(weekday === "Sunday")
{
  if (myDiv6) {
      myDiv6.className="sc-lnIvbd iNVSgV";
    }
}

  }, []);
  function formatDate(inputDate:any) {
    const dateParts = inputDate.split('/');
    if (dateParts.length === 3) {
      const day = dateParts[0];
      const month = dateParts[1];
      const year = dateParts[2];
      // Construct the date in yyyy-mm-dd format
      return `${year}-${month}-${day}`;
    } else {
      return 'Invalid Date Format';
    }
  }
  function calculateDays(enddate:any, currentdate:any) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const endDateObj:any = new Date(enddate);
    const currentDateObj:any = new Date(currentdate);
  
    const timeDifference = endDateObj - currentDateObj;
    console.log("tim",timeDifference)
    const daysDifference = Math.floor(timeDifference / oneDay);
  
    return daysDifference;
  }
const { swal } = props;
console.log('Data from stateOptions12:',task);
  return (
    <>
    
                                    <div className="card mt-4">
                                        <div className="card-body py-2">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="text-bold">Welcome to Rezingo</h3>
                                                    <h6 className="text-muted">Let's get this week going!</h6>
                                                    
                                                   
                                                </div>

                                                <div className="col-5 ml-auto d-none d-lg-block">
                                                    
                                                    <div>
                                                       
                                                    <div data-test-id="weeklyStreak" aria-label="Weekly Streak" className="sc-fZfSlU kvsuZZ justify-content-end">

<div className="sc-fickUT flZQCy"><div data-test-id="currentDayNoWorkoutStreak" id="myDiv" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" aria-label="Monday did not work out" id="pbold" className="sc-ityVrI dprcku">M</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv1" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold1" className="sc-ityVrI dprcku">T</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv2" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold2" className="sc-ityVrI dprcku">W</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv3" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold3" className="sc-ityVrI dprcku">T</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv4" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold4" className="sc-ityVrI dprcku">F</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv5" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold5" className="sc-ityVrI dprcku">S</p></div>

<div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" id="myDiv6" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" id="pbold6" className="sc-ityVrI dprcku">S</p></div></div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <section>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card programVideo">
                                                <div className="card-body">
                                                    <div className="media align-items-center d-flex justify-content-between">
                                                        
                                                        <div>
                                                            <h5>Total Programs</h5>
                                                            <p className="numsize">134
                                                            </p>
                                                            
                                                           <a href="#"><span className="fs-12">2 mins ago
                                                            </span></a> 
                                                        </div>
                                                        <div dir="ltr">
                                                            {/* <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto,w_48/https://browse-categories-images-prod.s3.amazonaws.com/66e394fb42fd6fcec0c446ca45b740ad.png" alt=""/> */}
                                                            <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                                            <i className="fas fa-list d-flex fa-2x faicon avatar-title"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-3">
                                            <div className="card programVideo">
                                                <div className="card-body">
                                                    <div className="media align-items-center d-flex justify-content-between">
                                                        
                                                        <div>
                                                            <h5>Ordered Products
                                                            </h5>
                                                            <p className="numsize">13
                                                            </p>
                                                            <a href="#"><span className="fs-12">6 Hours ago
                                                            </span></a> 
                                                        </div>
                                                        <div dir="ltr">
                                                            
                                                            <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                                            <i className="fas fa-warehouse d-flex fa-2x faicon avatar-title"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card programVideo">
                                                <div className="card-body">
                                                    <div className="media align-items-center d-flex justify-content-between">
                                                        
                                                        <div>
                                                            <h5>Latest Programs
                                                            </h5>
                                                            <p className="numsize">31
                                                            </p>
                                                            <a href="#"><span className="fs-12">10 mins ago
                                                            </span></a> 
                                                        </div>
                                                        <div dir="ltr" className="ml-2">
                                                            

                                                            <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                                            <i className="fas fa-th-list d-flex fa-2x faicon avatar-title"></i></div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card programVideo">
                                                <div className="card-body">
                                                    <div className="media align-items-center d-flex justify-content-between">
                                                        
                                                        <div>
                                                            <h5>Practitioners
                                                            </h5>
                                                            <p className="numsize">3
                                                            </p>
                                                            <a href="#"><span className="fs-12">8 Hours ago
                                                            </span></a> 
                                                        </div>
                                                        <div dir="ltr" className="ml-2">
                                                            
                                                            <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                                            <i className="fas fa-medal d-flex fa-2x faicon avatar-title"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>
                                    </section>
                                    <h3 className="page-title">Enrolled Programs</h3>

                                    <div className="row mt-3">
                                  
                                    {task.map((obj:any,index) => {
                                        const startDate =formatDate(obj.startdate);
                                        const endDate = formatDate(obj.enddate);
                                        const todaydate=formatDate(currentdate);
                                        console.log(startDate,currentdate,endDate,todaydate >= startDate,todaydate <= endDate,"kl");
                                      const isActive = (todaydate >= startDate) && (todaydate <= endDate);
                                    const status = isActive ? 'Active' : 'Closed';
                                    const subdata = calculateDays(endDate, todaydate);
                                    const remaindatestring =  "Remaining Days:"+subdata;
                                    const remainday = isActive ? remaindatestring  : 'Days Elapsed';
                           
                                    console.log(`Date Range ${index + 1}: ${status} : ${isActive} : ${subdata}`);
                            
                            return (

                                <div className="col-xl-3 p-2">


                                    <div className="product-wrap peletonWrap ribbon-box">

                                    {isActive ?(
                                      <div className={classNames("ribbon-two", "ribbon-two-success")}>
          <span>{status}</span>
        </div>
                                    ):(
<div className={classNames("ribbon-two", "ribbon-two-danger")}>
          <span>{status}</span>
        </div>
                                    )}
                                    
                                        <div className="row mx-auto mt-3 mb-1">                                            

                                    <h5 className='justify-content-center d-flex'>{obj.name}</h5>
<div className='justify-content-center d-flex'>
<span className="me-1 badge bg-primary badge bg-blue">{obj.category} Wellness</span>

<span className="me-1 badge bg-success badge bg-pink">{obj.weeks} Weeks</span>  
</div>
         
                                    </div>

                                        <div className="product-img"><a href="#">



                                            <img className="imgprg"  src={process.env.PUBLIC_URL + obj.image[0]} alt=""/>



                                        </a></div><div className="product-content py-2"><h6>

                                                                                             
                                        <span className='text-primary' style={{lineHeight:"1.5rem"}}>{remainday}</span>
                                        {isActive ?(
                                            <Link to="/programdetails" className="viewprg pt-1" state={obj.id}>Start Now</Link>
                                            ):(<></>
                                              // <Link to="/programdetails" className="viewprg pt-1" state={obj.id}></Link>
                                            )}



                                            </h6></div>



                                        </div>



                                    </div>

)})}
                                                

                                    </div>

                                    <h3 className="page-title">Enrolled Program Videos</h3>
                                    <p>A selection of our best classes, available free for a limited time</p>

                                    <div className="row">
                                                 <div className="col-md-3 ">
                                                    <div className="card programVideo">
                                                       
                                                       <img className="card-img-top" src={yoga} alt="Card image cap"/>
                                                       <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                          <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min yoga program</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card programVideo">
                                                        <img className="card-img-top" src={weight} alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min Body Weight Strength</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card programVideo">
                                                        <img className="card-img-top" src={leg} alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min glutes and legs strength</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card programVideo">
                                                        <img className="card-img-top" src={spinal} alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min Spinal mobility</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                              </div>

    </>
  );
});

export default Dashboard1;


