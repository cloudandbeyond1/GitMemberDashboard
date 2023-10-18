import React, { useState,useRef,useEffect } from "react";
import { Link,useLocation,useNavigate  } from "react-router-dom";
import { Row, Col, Card, Button,Badge ,Tab, Nav} from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import HyperDatepicker from "../../components/Datepicker";

// dummy data
import { programdetails as data } from "./data";
import Bread from "../../assets/images/breads.webp";

import Eggs from "../../assets/images/eggs.webp";
import Fruits from "../../assets/images/fruits.webp";
import Vegetables from "../../assets/images/vegetables.webp";
import Nuts from "../../assets/images/nuts.webp";
import Chappathi from "../../assets/images/chappathi.webp";
import Dairy from "../../assets/images/dairy.webp";
import Drinks from "../../assets/images/drinks.webp";

import Water from "../../assets/images/water.webp";
import Bottle from "../../assets/images/bottle.webp";
import Can from "../../assets/images/can.webp";
import Jug from "../../assets/images/jug.webp";

import Sad1 from "../../assets/images/sad1.webp";
import Sad2 from "../../assets/images/sad2.webp";
import Sad3 from "../../assets/images/sad3.webp";
import Happy1 from "../../assets/images/happy1.webp";
import Happy2 from "../../assets/images/happy2.webp";

// main component
const ProgramDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const[fil,setFil]=useState([]);
//   const [products, setProducts] = useState(data);
//   const fil = products.filter(person => person.id === state)
//   console.log("state",state,products)
// console.log(fil,"fg")

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

  const responseDataPrg = await fetch(
    "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/programs.json"
);
const prg = await responseDataPrg.json();  
const fildata = prg.filter(person => person.id === state)
setFil(fildata);
console.log(fil,"fg")
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};





  /*
   * search product by name
   */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  

//MoodModerator 

  const moodmoderator = [
    { value: "sad1", label: "Sad1",image:Sad1 },
    { value: "sad2", label: "Sad2",image:Sad2 },
    { value: "sad3", label: "Sad3",image:Sad3 },
    { value: "happy1", label: "Happy1",image:Happy1 },
    { value: "happy2", label: "Happy2",image:Happy2 },
  ];

  const [lang, setLang] = useState([]);
 
  const handlemoodChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setLang(prev => prev.filter(x => x !== value));
    }
  }

// Symtoms Tracker and Sleep Survey
  const [ToggleState, setToggleState] = useState(1);
  const [ToggleState1, setToggleState1] = useState(1);
  const [ToggleState2, setToggleState2] = useState(1);
  const [ToggleState3, setToggleState3] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    const toggleTab1 = (index) => {
      setToggleState1(index);
    };
    const toggleTab2 = (index) => {
      setToggleState2(index);
    };
    const toggleTab3 = (index) => {
      setToggleState3(index);
    };
    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
      const getActiveClass1 = (index, className) =>
      ToggleState1 === index ? className : "";
      const getActiveClass2 = (index, className) =>
      ToggleState2 === index ? className : "";
      const getActiveClass3 = (index, className) =>
      ToggleState3 === index ? className : "";
  
   //Daily Consumption and Water Consumption
let [valuefruits,setValuefruits] = useState();
let [valueveg,setValueveg] = useState();
let [valuedairy,setValuedairy] = useState();
let [valuedrinks,setValuedrinks] = useState();

    let [num, setNum]= useState(0);
    let [num2, setNum2]= useState(0);
    let [num3, setNum3]= useState(0);
    let [num4, setNum4]= useState(0);
    let [num5, setNum5]= useState(0);
    let [num6, setNum6]= useState(0);
    let [num7, setNum7]= useState(0);
    let [num8, setNum8]= useState(0);
    let incNum =()=>{      
      setNum(Number(num)+1);
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
    let handleChange = (e)=>{
      setNum(e.target.value);
     }
    //number 2
    let incNum2=()=>{      
      setNum2(Number(num2)+1);
    };
    let decNum2 = () => {
       if(num2>0)
       {
        setNum2(num2 - 1);
       }
    }  
   let handleChange2 = (e)=>{
      setNum2(e.target.value);
     }
   //number 3
   let incNum3=()=>{      
    setNum3(Number(num3)+1);
  };
  let decNum3 = () => {
     if(num3>0)
     {
      setNum3(num3 - 1);
     }
  }  
 let handleChange3 = (e)=>{
    setNum3(e.target.value);
   }
     //number 4
     let incNum4=()=>{      
      setNum4(Number(num4)+1);
    };
    let decNum4 = () => {
       if(num4>0)
       {
        setNum4(num4 - 1);
       }
    }  
   let handleChange4 = (e)=>{
      setNum4(e.target.value);
     }
      //number 5
      let incNum5=()=>{      
        setNum5(Number(num5)+1);
      };
      let decNum5 = () => {
         if(num5>0)
         {
          setNum5(num5 - 1);
         }
      }  
     let handleChange5 = (e)=>{
        setNum5(e.target.value);
       }
        //number 6
      let incNum6=()=>{      
        setNum6(Number(num6)+1);
      };
      let decNum6 = () => {
         if(num6>0)
         {
          setNum6(num6 - 1);
         }
      }  
     let handleChange6 = (e)=>{
        setNum6(e.target.value);
       }
        //number 7
      let incNum7=()=>{      
        setNum7(Number(num7)+1);
      };
      let decNum7 = () => {
         if(num7>0)
         {
          setNum7(num7 - 1);
         }
      }  
     let handleChange7 = (e)=>{
        setNum7(e.target.value);
       }
       //number 8
      let incNum8=()=>{      
        setNum8(Number(num8)+1);
      };
      let decNum8 = () => {
         if(num8>0)
         {
          setNum8(num8 - 1);
         }
      }  
     let handleChange8 = (e)=>{
        setNum8(e.target.value);
       }
       const handlefruitsChange = (e) => {
        setValuefruits(e.target.value);
      };
      const handlevegChange = (e) => {
        setValueveg(e.target.value);
      };
      const handledairyChange = (e) => {
        setValuedairy(e.target.value);
      };
      const handledrinksChange = (e) => {
        setValuedrinks(e.target.value);
      };
       
 const handleclicksubmit =()=>
 {
  var Bloating="";
  var Gas="";
  var Movements="";
  var Restful="";
 if(ToggleState===1)
 {
  Bloating="None"; 
 }
 else if(ToggleState===2){
  Bloating="Some";
 }
 else if(ToggleState===3)
 {
  Bloating="Lots";
 }

 if(ToggleState1===1)
 {
  Gas="None"; 
 }
 else if(ToggleState1===2){
  Gas="Some";
 }
 else if(ToggleState1===3)
 {
  Gas="Lots";
 }

 if(ToggleState2===1)
 {
  Movements="None"; 
 }
 else if(ToggleState2===2){
  Movements="Some";
 }
 else if(ToggleState2===3)
 {
  Movements="Lots";
 }

 if(ToggleState3===1)
 {
  Restful="Not very"; 
 }
 else if(ToggleState3===2){
  Restful="Moderate";
 }
 else if(ToggleState3===3)
 {
  Restful="Very";
 }








  var keysArray = ["breads","eggs","nuts","roti","glass","bottle","watercane","waterjug","Bloating","Gas","Movement","Restful","mood","fruits","veg","dairy","drinks"];
  var valuesArray = [num, num2, num3, num4, num5, num6, num7, num8, Bloating, Gas, Movements, Restful,lang,valuefruits,valueveg,valuedairy,valuedrinks];
  var arrayvaluesch=[];
  for (var i = 0; i < keysArray.length; i++) {
    arrayvaluesch[keysArray[i]] = valuesArray[i];
  }
  console.log(arrayvaluesch,"schdarray")
  navigate('/result', { state: { arrayvaluesch } });
 }


  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
        //  { label: "Ecommerce", path: "/apps/ecommerce/products" },
          { label: "Program Details", path: "/programdetails", active: true },
        ]}
      
      />
          {(fil || []).map((filprd, index) => {
            return(
            <Row>
            <div>  <h1 className="prg-header-title mt-2">{filprd.name}</h1></div>
            <div className="mt-2">
            <Badge
              pill
              bg=""
              className={classNames("w-auto me-1", "badge-soft-blue")}
             
            >{filprd.category}
            </Badge>
            <Badge
              pill
              bg=""
              className={classNames("w-auto me-1", "badge-soft-success")}
             
            >{filprd.week} Week
            </Badge>
            <Badge
              pill
              bg=""
              className={classNames("w-auto", "badge-soft-danger")}
             
            >{filprd.level} Level
            </Badge>
            
            </div>
            <Row>
                <p className="mt-2">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
            </Row>
            <Row>
            <div class="justify-content-start d-flex" >
                            <button className="prev-day" style={{border:"none"}}><i className="fa fa-angle-left" aria-hidden='true'></i></button>
                            <button className="prev-day" style={{border:"none"}} disabled><i className="fa fa-angle-right" aria-hidden='true'></i></button>      
                            <div className="input-group-sm cp">
                  {/* <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                        onDateChange(date);
                      }}
                  /> */}
                   <HyperDatepicker 
                hideAddon={false} inputClass="border" 
                minDate={new Date(new Date().setDate(new Date().getDate() - 5))}
                maxDate={new Date()}
                value={selectedDate}
                onChange={(date) => {
                  onDateChange(date);
                }}
              />
                </div>
                           
                        </div>
                  </Row>
                  <Row className="mt-3">
                  <Tab.Container defaultActiveKey="Daily">
                <Nav as="ul" variant="pills1" justify className="navtab-bg">
                
                      <Nav.Item as="li" >
                        <Nav.Link
                          className="cursor-pointer justify-content-center d-flex"
                          eventKey="Daily"
                        >
                             <i class="fas fa-utensils pe-1 pt-1"></i>
                        <span className="d-lg-block d-none cp">Daily Consumption</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" >
                        <Nav.Link
                          className="cursor-pointer justify-content-center d-flex"
                          eventKey="Water"
                        >
                             <i class="fas fa-water pe-1 pt-1"></i>
                             <span className="d-lg-block d-none cp">Water Consumption</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" >
                        <Nav.Link
                          className="cursor-pointer justify-content-center d-flex"
                          eventKey="Symptoms"
                        >
                             <i class="fas fa-thermometer-half pe-1 pt-1"></i>
                             <span className="d-lg-block d-none cp">Symptoms Tracker</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" >
                        <Nav.Link
                          className="cursor-pointer justify-content-center d-flex"
                          eventKey="Mood"
                        >
                             <i class="fas fa-smile pe-1 pt-1"></i>
                             <span className="d-lg-block d-none cp">Mood Moderator</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" >
                        <Nav.Link
                          className="cursor-pointer justify-content-center d-flex"
                          eventKey="Sleep"
                        >
                             <i class="fas fa-bed pe-1 pt-1"></i>
                             <span className="d-lg-block d-none cp"> Sleep Survey</span>
                        </Nav.Link>
                      </Nav.Item>
                </Nav>

                <Tab.Content>
                 
                      <Tab.Pane
                        eventKey="Daily"
                        id="0"
                      >
                       <div className="form-card py-3">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="fs-title mx-5">WHAT DID YOU CONSUME TODAY?
                                                                        </h2>
                                                                </div>                                                                
                                                            </div> 
                                                    <div className="row mt-5 justify-content-center d-flex">
                                                                            
                                                            <div className ="cardMeasure my-5 ml-3">
                                                                <div className = "image">
                                                                  <img src={Bread} alt="" className="img-fluid" />
                                                                </div>
                                                                <p className="cardtxt">Bread</p>
                                                                <div className = "contenttab">
                                                                  <div className="row mtcontent">

                                                                  <button className="value-button" id="decrease" onClick={decNum}>-</button>
                                                                
                                                                <input type="number" id="number" value={num} onChange={handleChange}/>
                                                              
                                                                  <button className="value-button" id="increase" onClick={incNum}>+</button>
 
                                                                      </div>
                                                              </div>    
                                                        </div>
                                                        
        
                                                        
                                                            <div className ="cardMeasure my-5 ml-3">
                                                                <div className = "image">
                                                                <img src={Eggs} alt="" className="img-fluid" />
                                                                </div>
                                                                <p className="cardtxt">Eggs</p>
                                                                <div className = "contenttab">
                                                                <div className="row mtcontent">

                                                <button className="value-button" id="decrease1" onClick={decNum2}>-</button>

                                                <input type="number" id="number1" value={num2} onChange={handleChange2}/>

                                                <button className="value-button" id="increase1" onClick={incNum2}>+</button>

                                                                  </div>
                                                              </div>    
                                                        </div>
                                                        <div className ="cardMeasure my-5 ml-3">
                                                                <div className = "image">
                                                                <img src={Fruits} alt="" className="img-fluid" />
                                                                </div>
                                                                <p className="cardtxt">Fruits</p>
                                                                <div className = "contenttab">
                                                                  <div className="row mtcontent">
                                                                  <input type="number" class="inputTxt" value={valuefruits} onChange={handlefruitsChange} name="fruits" placeholder="eg.23"/><span class="inputLabel w-4">Varieties</span>
                                                                               </div>
                                                              </div>    
                                                        </div>
                                                        <div className ="cardMeasure my-5 ml-3">
                                                                <div className = "image">
                                                                <img src={Vegetables} alt="" className="img-fluid" />
                                                                </div>
                                                                <p className="cardtxt">Vegetables</p>
                                                                <div className = "contenttab">
                                                                  <div className="row mtcontent">
                                                                  <input type="number" class="inputTxt" value={valueveg} onChange={handlevegChange} name="vegetables" placeholder="eg.23"/><span class="inputLabel w-4">Varieties</span>
                                                                               </div>
                                                              </div>    
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="row mt-5 justify-content-center d-flex">
                                                                            
                                                                            <div className ="cardMeasure my-5 ml-3">
                                                                                <div className = "image">
                                                                                  <img src={Nuts} alt="" className="img-fluid" />
                                                                                </div>
                                                                                <p className="cardtxt">Nuts</p>
                                                                                <div className = "contenttab">
                                                                                <div className="row mtcontent">

<button className="value-button" id="decrease1" onClick={decNum3}>-</button>

<input type="number" id="number1" value={num3} onChange={handleChange3}/>

<button className="value-button" id="increase1" onClick={incNum3}>+</button>

                                                                  </div>
                                                                              </div>    
                                                                        </div>
                                                                        
                        
                                                                        
                                                                            <div className ="cardMeasure my-5 ml-3">
                                                                                <div className = "image">
                                                                                <img src={Chappathi} alt="" className="img-fluid" />
                                                                                </div>
                                                                                <p className="cardtxt">Roti</p>
                                                                                <div className = "contenttab">
                                                                                <div className="row mtcontent">

<button className="value-button" id="decrease1" onClick={decNum4}>-</button>

<input type="number" id="number1" value={num4} onChange={handleChange4}/>

<button className="value-button" id="increase1" onClick={incNum4}>+</button>

                                                                  </div>
                                                                              </div>    
                                                                        </div>
                                                                        <div className ="cardMeasure my-5 ml-3">
                                                                                <div className = "image">
                                                                                <img src={Dairy} alt="" className="img-fluid" />
                                                                                </div>
                                                                                <p className="cardtxt">Dairy</p>
                                                                                <div className = "contenttab">
                                                                                  <div className="row mtcontent">
                                                                                  <input type="number" class="inputTxt" value={valuedairy} onChange={handledairyChange} name="dairy" placeholder="eg.20"/><span class="inputLabel w-4">ml</span>
                                                                                               </div>
                                                                              </div>    
                                                                        </div>
                                                                        <div className ="cardMeasure my-5 ml-3">
                                                                                <div className = "image">
                                                                                <img src={Drinks} alt="" className="img-fluid" />
                                                                                </div>
                                                                                <p className="cardtxt">Drinks</p>
                                                                                <div className = "contenttab">
                                                                                  <div className="row mtcontent">
                                                                                  <input type="number" class="inputTxt" value={valuedrinks} onChange={handledrinksChange} name="drinks" placeholder="eg.30"/><span class="inputLabel w-4">ml</span>
                                                                                               </div>
                                                                              </div>    
                                                                        </div>
                                                                        
                                                                    </div>
                                                   
                                                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="Water"
                        id="1"
                      >
                        <div className="form-card py-3">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="fs-title mx-5">HOW MANY VESSELS FULL OF WATER HAVE YOU HAD TODAY?
                                                                        </h2>
                                                                </div>                                                             
                                                            </div> 
                                                            <div className="row mt-5 justify-content-center d-flex">
                                                                            
                                                                <div className ="cardMeasure my-5 ml-3">
                                                                    <div className = "image">
                                                                    <img src={Water} alt="" className="img-fluid" />
                                                                      
                                                                    </div>
                                                                    <p className="cardtxt">Glass</p>
                                                                    <div className = "contenttab">
                                                                    <div className="row mtcontent">

<button className="value-button" id="decrease5" onClick={decNum5}>-</button>

<input type="number" id="number1" value={num5} onChange={handleChange5}/>

<button className="value-button" id="increase5" onClick={incNum5}>+</button>

                                                                  </div>
                                                                  </div>    
                                                            </div>
                                                            
        
                                                            
                                                                <div className ="cardMeasure my-5 ml-3">
                                                                    <div className = "image">
                                                                    <img src={Bottle} alt="" className="img-fluid" />
                                                                    </div>
                                                                    <p className="cardtxt">Bottle</p>
                                                                    <div className = "contenttab">
                                                                    <div className="row mtcontent">

<button className="value-button" id="decrease6" onClick={decNum6}>-</button>

<input type="number" id="number1" value={num6} onChange={handleChange6}/>

<button className="value-button" id="increase6" onClick={incNum6}>+</button>

                                                                  </div>
                                                                  </div>    
                                                            </div>
                                                            
        
                                                            
                                                                <div className ="cardMeasure my-5 ml-3">
                                                                    <div className = "image">
                                                                    <img src={Can} alt="" className="img-fluid" />
                                                                    </div>
                                                                    <p className="cardtxt">Water Cane</p>
                                                                    <div className = "contenttab">
                                                                    <div className="row mtcontent">

                                                                        <button className="value-button" id="decrease7" onClick={decNum7}>-</button>

                                                                        <input type="number" id="number1" value={num7} onChange={handleChange7}/>

                                                                        <button className="value-button" id="increase7" onClick={incNum7}>+</button>

                                                                  </div>
                                                                  </div>    
                                                            </div>
                                                            
        
                                                            
                                                                <div className ="cardMeasure my-5 ml-3">
                                                                    <div className = "image">
                                                                    <img src={Jug} alt="" className="img-fluid" />
                                                                    </div>
                                                                    <p className="cardtxt">Water Jug</p>
                                                                    <div className = "contenttab">
                                                                    <div className="row mtcontent">

<button className="value-button" id="decrease8" onClick={decNum8}>-</button>

<input type="number" id="number1" value={num8} onChange={handleChange8}/>

<button className="value-button" id="increase8" onClick={incNum8}>+</button>

                                                                  </div>
                                                                  </div>    
                                                            </div>
                                                            
                                                            
                                                        </div>
                                                           </div> 
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="Symptoms"
                        id="2"
                      >
                      <div className="form-card py-3 mb-3">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="fs-title mx-5">HOW ARE YOU FEELING TODAY?</h2>
                                                                </div>
                                                            </div> 
                                                            <div className="row mt-3 justify-content-center d-flex">
                                                                <h3 className="justify-content-center d-flex">Bloating</h3>
                                                                <div className="container-switch mt-3">
                                                                  <ul className="tab-list">
                                                                    <li
                                                                      className={`tabs ${getActiveClass(1, "active-tabs")}`}
                                                                      onClick={() => toggleTab(1)}
                                                                    >
                                                                      None
                                                                    </li>
                                                                    <li
                                                                      className={`tabs ${getActiveClass(2, "active-tabs")}`}
                                                                      onClick={() => toggleTab(2)}
                                                                    >
                                                                      Some
                                                                    </li>
                                                                    <li
                                                                      className={`tabs ${getActiveClass(3, "active-tabs")}`}
                                                                      onClick={() => toggleTab(3)}
                                                                    >
                                                                    Lots
                                                                    </li>
                                                                  </ul>
                                                                
                                                                </div>                                                     
        
                                                        </div>
                                                        <div className="row mt-5 justify-content-center d-flex">
                                                        <h3 className="justify-content-center d-flex">Gas</h3>
                                                        <div className="container-switch mt-3">
                                                              <ul className="tab-list">
                                                                <li
                                                                  className={`tabs ${getActiveClass1(1, "active-tabs")}`}
                                                                  onClick={() => toggleTab1(1)}
                                                                >
                                                                  None
                                                                </li>
                                                                <li
                                                                  className={`tabs ${getActiveClass1(2, "active-tabs")}`}
                                                                  onClick={() => toggleTab1(2)}
                                                                >
                                                                  Some
                                                                </li>
                                                                <li
                                                                  className={`tabs ${getActiveClass1(3, "active-tabs")}`}
                                                                  onClick={() => toggleTab1(3)}
                                                                >
                                                                Lots
                                                                </li>
                                                              </ul>
                                                            
                                                            </div>                                                     
        
                                                    </div>
                                                    <div className="row mt-5 justify-content-center d-flex">
                                                    <h3 className="justify-content-center d-flex">Movements</h3>
                                                    <div className="container-switch mt-3">
                                                      <ul className="tab-list">
                                                        <li
                                                          className={`tabs ${getActiveClass2(1, "active-tabs")}`}
                                                          onClick={() => toggleTab2(1)}
                                                        >
                                                          None
                                                        </li>
                                                        <li
                                                          className={`tabs ${getActiveClass2(2, "active-tabs")}`}
                                                          onClick={() => toggleTab2(2)}
                                                        >
                                                          Some
                                                        </li>
                                                        <li
                                                          className={`tabs ${getActiveClass2(3, "active-tabs")}`}
                                                          onClick={() => toggleTab2(3)}
                                                        >
                                                        Lots
                                                        </li>
                                                      </ul>
                                                    
                                                    </div>                                                      
        
                                                </div>
                                                                    </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="Mood"
                        id="3"
                      >
                        <div className="form-card py-3 mb-5">
                                                            <div className="row">
                                                                <div className="col-7">
                                                                    <h2 className="fs-title mx-5">HOW ARE YOU FEELING TODAY?
                                                                    </h2>
                                                                </div>
                                                             
                                                            </div> 
                                                            <div className="row justify-content-center py-5 px-5">
                                                            {moodmoderator.map((x, i) =>       
                                                                <div className="d-block col-md-2" key={i}>
                                                                <img src={x.image} alt="" className="img-fluid" />
                                                                    <div className="form-check mb-2 ml-4">
                                                                        <input className="form-check-input" style={{marginTop: "6px"}} type="checkbox" value={x.label} id="defaultCheck1" onChange={handlemoodChange} />
                                                                        <label className="form-check-label font-weight-bold" style={{fontSize:"1.10em"}} for="defaultCheck1">
                                                                        {x.label}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                               
                                                               )}
                                                            </div>
                                                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="Sleep"
                        id="4"
                      >
                          <div className="form-card py-3 mb-5">
                                                            <div className="row pb-4">
                                                                <div className="col-7 pb-2">
                                                                    <h2 className="fs-title mx-5">HOW WAS YOU SLEEP LAST NIGHT?
                                                                    </h2>
                                                                </div>
                                                               
                                                            </div>
                                                            <div className="row mb-5 mt-2 justify-content-center d-flex">
                                                            <h3 className="justify-content-center d-flex">Restful</h3>
                                                            <div className="container-switch mt-3">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass3(1, "active-tabs")}`}
          onClick={() => toggleTab3(1)}
        >
          Not Very
        </li>
        <li
          className={`tabs ${getActiveClass3(2, "active-tabs")}`}
          onClick={() => toggleTab3(2)}
        >
          Moderate
        </li>
        <li
          className={`tabs ${getActiveClass3(3, "active-tabs")}`}
          onClick={() => toggleTab3(3)}
        >
         Very
        </li>
      </ul>
      {/* <Link to="/result" className="btn btn-primary"></Link> */}

    </div>         
   
    {/* <Link to="/result"  className="justify-content-center d-flex"> */}
    <button type="button" onClick={()=>handleclicksubmit()} className="waves-effect waves-light btn btn-rezingo rounded-0 py-1 mt-5 w-auto px-4" style={{backgroundColor:"#703ca2 !important"}}>Submit</button>
    {/* </Link>                                               */}
                                                        </div>
                                                        
                                                        </div>

                                                        
                      </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
</Row>
</Row>
            )

          })}

      

    
    </React.Fragment>
  );
};

export default ProgramDetails;
