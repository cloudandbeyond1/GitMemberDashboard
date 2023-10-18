import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button,Badge ,Tab, Nav} from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";

// dummy data
import { programs as data, ProgramItemTypes } from "./data";

// main component
const Programs = () => {
  const [products, setProducts] = useState<Array<ProgramItemTypes>>(data);

  /*
   * search product by name
   */
  const searchProduct = (value: string) => {
    if (value === "") setProducts(data);
    else {
      var modifiedProducts = data;
      modifiedProducts = modifiedProducts.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setProducts(modifiedProducts);
    }
  };
  const eventkey =(category:any)=>
  {
    if (category === "All") setProducts(data);
    else {
        
      var modifiedProducts = data;
      modifiedProducts = modifiedProducts.filter((item) =>
        item.category.includes(category)
      );
      setProducts(modifiedProducts);
    }
  }

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
        //  { label: "Ecommerce", path: "/apps/ecommerce/products" },
          { label: "Programs", path: "/apps/ecommerce", active: true },
        ]}
        title={"Programs"}
      />

      <Row>
      <Card>
            <Card.Body className="mxprogram-5">
      <Tab.Container defaultActiveKey="Profile">
                <Nav as="ul" variant="pills" justify className="navtab-bg gap-1 mx-5" onSelect={(selectedkey)=> eventkey(selectedkey) } >                 
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="All" style={{backgroundColor:'#703ca2',color:'#fff'}}
                        >
                        <i className="fa fa-tasks justify-content-center d-flex" aria-hidden="true"></i>                                
                        All
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Physical" style={{backgroundColor:'#172a53',color:'#fff'}}
                        >
                            <i className="fa fa-universal-access justify-content-center d-flex" aria-hidden="true"></i>
                          Physical
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Social" style={{backgroundColor:'#527991',color:'#fff'}}
                        >
                            <i className="fa fa-users justify-content-center d-flex"  aria-hidden="true"></i>
                          Social
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Financial" style={{backgroundColor:'#00abcd',color:'#fff'}}
                        >
                        <i className="fas fa-money-bill justify-content-center d-flex" aria-hidden="true"></i>                                
                        Financial
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Intellectual" style={{backgroundColor:'#fdd500',color:'#fff'}}
                        >
                            <i className="fa fa-book justify-content-center d-flex"  aria-hidden="true"></i>
                          Intellectual
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Occupational" style={{backgroundColor:'#f6911e',color:'#fff'}}
                        >
                            <i className="fas fa-user-tie justify-content-center d-flex"  aria-hidden="true"></i>
                          Occupational
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Environmental" style={{backgroundColor:'#63bb46',color:'#fff'}}
                        >
                        <i className="fa fa-leaf justify-content-center d-flex"  aria-hidden="true"></i>                             
                        Environmental
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Spiritual" style={{backgroundColor:'#5d256b',color:'#fff'}}
                        >
                            <i className="fa fa-heart justify-content-center d-flex"  aria-hidden="true"></i>
                          Spiritual
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="cursor-pointer"
                          href="#"
                          eventKey="Emotional" style={{backgroundColor:'#d11388',color:'#fff'}}
                        >
                            <i className="fa fa-smile justify-content-center d-flex"  aria-hidden="true"></i>
                          Emotional
                        </Nav.Link>
                      </Nav.Item>
                </Nav>

               
              </Tab.Container>  </Card.Body>
          </Card>
        <Col>
         
              <Row className="justify-content-end d-flex">
                <Col className="col-auto">
                  <form className="d-flex flex-wrap align-items-center">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                      Search
                    </label>
                    <div className="">
                      <input
                        type="search"
                        className="form-control my-1 my-lg-0"
                        id="inputPassword2"
                        placeholder="Search..."
                        onChange={(e: any) => searchProduct(e.target.value)}
                      />
                    </div>
                    {/* <label htmlFor="status-select" className="me-2">
                      Sort By
                    </label> */}
                    {/* <div className="me-sm-3">
                      <select
                        className="form-select my-1 my-lg-0"
                        id="status-select"
                      >
                        <option defaultValue="all">All</option>
                        <option value="popular">Popular</option>
                        <option value="pricelow">Price Low</option>
                        <option value="pricehigh">Price High</option>
                        <option value="soldout">Sold Out</option>
                      </select>
                    </div> */}
                  </form>
                </Col>
                {/* <Col className="col-auto">
                  <div className="text-lg-end my-1 my-lg-0">
                    <Button className="btn btn-success waves-effect waves-light me-1">
                      <i className="mdi mdi-cog"></i>
                    </Button>

                    <Link
                      to="#"
                      className="btn btn-danger waves-effect waves-light"
                    >
                      <i className="mdi mdi-plus-circle me-1"></i> Add New
                    </Link>
                  </div>
                </Col> */}
              </Row>
          
        </Col>
      </Row>

      <Row>
        {(products || []).map((product, index) => {
          return (
            <Col className="mt-3" key={index} md={6} xl={3}>
              <Card className="product-box">
                <Card.Body>
                  {/* <div className="product-action">
                    <Link
                      to="#"
                      className="btn btn-success btn-xs waves-effect waves-light me-1"
                    >
                      <i className="mdi mdi-pencil"></i>
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-danger btn-xs waves-effect waves-light"
                    >
                      <i className="mdi mdi-close"></i>
                    </Link>
                  </div> */}

                  <div className="bg-light">
                  {/* <Link
                      to="/programdetails"
                      className="" 
                    > */}
                    <Link to="/programdetails" state={product.id}>
                    <img src={product.image} alt="" className="img-fluid" /></Link>
                  </div>

                  <div className="product-info">
                    <div className="row align-items-center">
                      <div className="col">
                        <h5 className="font-16 mt-0 sp-line-1">
                          <Link
                            to="/apps/ecommerce/product-details"
                            className="text-dark"
                          >
                            {product.name}
                          </Link>
                        </h5>
                        {/* <div className="text-warning mb-2 font-13">
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star me-1"></i>
                          <i className="fa fa-star"></i>
                        </div> */}
                        <h5 className="m-0">
                          {/* {" "}
                          <span className="text-muted">
                            {" "}
                            Stocks : {product.quantity} pcs
                          </span> */}
                          <Badge
              pill
              bg=""
              className={classNames("me-1", "badge-soft-dark")}
             
            >{product.category}
            </Badge>
            <Badge
              pill
              bg=""
              className={classNames("me-1", "badge-soft-dark")}
             
            >{product.week} Week
            </Badge>
            <Badge
              pill
              bg=""
              className={classNames("me-1", "badge-soft-dark")}
             
            >{product.level} Level
            </Badge>
            <Badge
              pill
              bg=""
              className={classNames("me-1", "badge-soft-dark")}
             
            >{product.practitioners} Practitioners
            </Badge>
                        </h5>
                      </div>
                      {/* <div className="col-auto">
                        <div className="product-price-tag">
                          ${product.price}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col>
          <ul className="pagination pagination-rounded justify-content-end mb-3">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="visually-hidden">Previous</span>
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="visually-hidden">Next</span>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      
    </React.Fragment>
  );
};

export default Programs;


