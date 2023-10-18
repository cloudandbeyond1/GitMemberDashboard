import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../AppContext';
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

// dummy data
import { OrdersItemTypes } from "./data";
import { AnyAaaaRecord } from 'dns';

/* order column render */
const OrderColumn = ({ row }: { row: any }) => {
  return (
    <>
      <Link to="/" className="text-body fw-bold">
        #Prd{row.original.id}
      </Link>
    </>
  );
};

/* product column render */
const ProductsColumn = ({ row }: { row: any }) => {
  return (
    <>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + row.original.image[0]} alt="" height="50" />
          </Link>
     
    </>
  );
};

/* orderdate column render */
const OrdernameColumn = ({ row }: { row: any }) => {
  console.log(row,"df")
  return (
    <>
      {row.original.name}{" "}
      {/* <small className="text-muted">{row.original.name}</small> */}
    </>
  );
};

/* payment column render */
const PaymentStatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
      
       <span
          className={classNames("badge", 
            "bg-soft-success text-success")}> Paid</span>
      </h5>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        
        <span
          className={classNames("badge","bg-warning")}>Processing</span>
      </h5>
    </>
  );
};
const OrderDateColumn = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.date}{" "}
      {/* <small className="text-muted">{row.original.order_time}</small> */}
    </>
  );
};
/* action column render */
const ActionColumn = () => {
  return (
    <>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </>
  );
};

// get all columns
const columns = [
  {
    Header: "Product ID",
    accessor: "id",
    Cell: OrderColumn,
  },
  {
    Header: "Product Image",
    accessor: "image",
    Cell: ProductsColumn,
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: OrdernameColumn,
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: OrderDateColumn,
  },
  {
    Header: "Payment Status",
    accessor: "payment_status",
    Cell: PaymentStatusColumn,
  },
  // {
  //   Header: "Total",
  //   accessor: "total",
  // },
  // {
  //   Header: "Payment Method",
  //   accessor: "payment_method",
  // },
  {
    Header: "Order Status",
    accessor: "order_status",
    Cell: StatusColumn,
  },
  // {
  //   Header: "Action",
  //   accessor: "action",
  //   Cell: ActionColumn,
  // },
];

// get pagelist to display
const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "20",
    value: 20,
  },
  {
    text: "50",
    value: 50,
  },
];


// main component
const Orders = () => {
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
            "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/orderedproducts.json"
        );

        const data = await responseDataEnrollPrg.json();
        console.log(data,"apidata");
        const filteredItems:any = Object.values(data).filter((items:any) => items.user === sharedValue);
        console.log(filteredItems,"filteredItemsapi")


      //   const responseDataPrg = await fetch(
      //     "https://react-firebase-auth-c4b95-default-rtdb.firebaseio.com/products.json"
      // );
      // const prg = await responseDataPrg.json();  
      // const resData:any = prg.filter((item1:any) => filteredItems.some((item2:any) => item1.id === item2.id));
      setTask(filteredItems);
      console.log(filteredItems,"resDataprd")
     setOrderList(filteredItems);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  const orders: OrdersItemTypes[] =task;
  const [orderList, setOrderList] = useState<OrdersItemTypes[]>(orders);

console.log(orderList,"oui")
  

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          // { label: "Ecommerce", path: "/apps/ecommerce/orders" },
          { label: "Orders", path: "/pages/orders/orders", active: true },
        ]}
        title={"Orders"}
      />
                                  
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="align-items-center mb-2">
               
              </Row>

              <Table
                columns={columns}
                data={orderList}
                isSearchable={true}
                pageSize={10}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
                theadClass="table-light"
                searchBoxClass="mb-2"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Orders;
