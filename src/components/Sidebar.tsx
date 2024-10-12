import React from "react";
import { Card, Typography, List as MUIList } from "@mui/material";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
const Sidebar = () => {
  return (
    <div className="parent-container">
      <div className="sidebar">
        <MUIList>
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            <StorefrontIcon fontSize="large" style={{ marginRight: "10px" }} />
            <Typography
              align="center"
              style={{ fontSize: "24px", fontWeight: "bold", color: "black",marginBottom:'20px' }}
            >
              Retail Store
            </Typography>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/add" className="links">
                  Add Product
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/addcategory" className="links">
                  Add Category
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/view" className="links">
                  Product Report
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/viewcategory" className="links">Category Report
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/sellproduct" className="links">
                  Sell Product
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'30px',
                  color: "white",
                }}
              >
                <Link to="/allbills" className="links">
                  Bill Report
                </Link>
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              style={{
                cursor: "pointer",
                margin: "10px",
                backgroundColor: "gray",
                height:'75px'
              }}
            >
              <Typography
                align="center"
                style={{
                  fontSize: "14px",
                  marginTop:'20px',
                  color: "white",
                  
                }}
              >
                <Link to="/logout" className="links">
                  Logout
                </Link>
              </Typography>
            </Card>
          </div>
          
          
        </MUIList>
      </div>
    </div>
  );
};

export default Sidebar;
