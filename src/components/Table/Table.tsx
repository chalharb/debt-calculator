import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import CustomToolbar from './CustomToolbar'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addDebt,
  updateDebt,
  deleteDebt,
  selectDebts,
} from '../../app/Debt/debtSlice';
import { Debt } from './model'
import CustomToolbarSelect from './CustomToolbarSelect'

import { columns } from './constants';

const debtExample: Debt = {
  id: Math.floor(Math.random() * 1000),
  name: 'American Express',
  rate: 2.24,
  payment: 240.00,
  balance: 5000.00
}

export default function Table() {
  const debts = useAppSelector(selectDebts);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    search: false,
    filter: false,
    viewColumns: false,
    selectableRows: 'single',textLabels: {
      body: {
        noMatch: "Create a new debt to start",
        toolTip: "Sort",
        columnHeaderTooltip: column => `Sort for ${column.label}`
      },
    },
    customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
      return (
        <Box p={2}>
        <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => { dispatch(addDebt(debtExample)) }}
          >
            Create Debt
          </Button>
          </Box>
      )
    },
  };

  return (
    <>
      <MUIDataTable
        title={"All Debts"}
        data={debts}
        columns={columns}
        options={options}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </>

  );
}
