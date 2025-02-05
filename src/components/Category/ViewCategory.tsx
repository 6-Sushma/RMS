import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import Sidebar from "../Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { tableCellClasses } from "@mui/material/TableCell";
import { Button, TablePagination } from "@mui/material";
import { Category } from '../Interfaces/Category';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "gray",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "6px 16px",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));


  
export const ViewCategory = () => {
    const [categories, setCategories] = useState<Category[] | null>();
  const [page, setPage] = useState(0);
  const [searchCodeTerm, setSearchCodeTerm] = useState("");
  const [searchTypeTerm, setSearchTypeTerm] = useState("");
  const [searchNameTerm, setSearchNameTerm] = useState("");
  const [searchCostTerm, setSearchCostTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(
    null
  );
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
        <div>
      <Sidebar />
      <div style={{ marginLeft: "400px", marginTop: "45px" }}>
        <TableContainer>
          <Table sx={{ maxWidth: 1050 }} align="center">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">
                  TYPE
                  <br />
                  <input
                    style={{
                      backgroundColor: "balck",
                      color: "black",
                      border: "white",
                      maxWidth: "80px",
                    }}
                    type="text"
                    value={searchTypeTerm}
                    onChange={(e) => setSearchTypeTerm(e.target.value)}
                    placeholder="Search Type"
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  Description
                  <br />
                  <input
                    style={{
                      backgroundColor: "balck",
                      color: "black",
                      border: "white",
                      maxWidth: "80px",
                    }}
                    type="text"
                    value={searchCodeTerm}
                    onChange={(e) => setSearchCodeTerm(e.target.value)}
                    placeholder="Search Code"
                  />
                </StyledTableCell>
                <StyledTableCell align="center">ACTION</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {categories
                ? categories
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((p) => (
                      <StyledTableRow key={p.id}>
                        <StyledTableCell align="center">
                          {p.productType}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {p.description}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button>
                          <Link to={`/editcategory/${p.id}`}>
                            <EditIcon/>
                          </Link>
                          </Button>
                          <Button>
                            <Link to="#">
                              <DeleteIcon style={{ color: "red" }} />
                            </Link>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                : null}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[
              5,
              10,
              25,
              { label: "All", value: categories?.length || 0 },
            ]}
            component="div"
            style={{ marginRight: "450px" }}
            count={categories ? categories.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
    
    </div>
  )
}
