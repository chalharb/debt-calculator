import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MuiTablePagination from "@material-ui/core/TablePagination";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
const defaultFooterStyles = {};

interface Props {
    count: any,
    classes: any,
    textLabels: any,
    rowsPerPage: any,
    page: any
    changeRowsPerPage: any,
    changePage: any

}

class DebtFooter extends React.Component<Props> {

  handleRowChange = (event: { target: { value: any; }; }) => {
    this.props.changeRowsPerPage(event.target.value);
  };

  handlePageChange = (_: any, page: any) => {
    this.props.changePage(page);
  };

  render() {
    const { count, classes, textLabels, rowsPerPage, page } = this.props;

    const footerStyle = {
      display:'flex',
      padding: '12px'
    };

    const footerRightStyle = {
        flex: '1 1 auto'
    }

    return (
      <TableFooter>
        <TableRow>
          <TableCell style={footerStyle}>
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add Debt
      </Button>
          
            <MuiTablePagination style={footerRightStyle}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={textLabels.rowsPerPage}
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${textLabels.displayRows} ${count}`}
              backIconButtonProps={{
                'aria-label': textLabels.previous,
              }}
              nextIconButtonProps={{
                'aria-label': textLabels.next,
              }}
              rowsPerPageOptions={[10,50,100]}
              onChangePage={this.handlePageChange}
              onChangeRowsPerPage={this.handleRowChange}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    );
  }

}

export default withStyles(defaultFooterStyles, { name: "DebtFooter" })(DebtFooter);