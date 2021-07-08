import React from 'react';
import MUIDataTable, { MUIDataTableColumnOptions, MUIDataTableOptions } from "mui-datatables";
import { Debt } from '../../app/Debt/model';
import NumberFormat from 'react-number-format';
import ToggleStrategy from '../ToggleStrategy/ToggleStrategy';
import DebtFooter from './DebtFooter';
import DebtMenu from './DebtMenu';
interface Props {
    title?: string;
    data: Array<Debt>;
}

const DebtTable: React.FC<Props> = ({ title, data }) => {

    const columns = [
        {
            name: "name",
            label: "Name",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "rate",
            label: "Interest Rate",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <NumberFormat
                            value={value}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'%'}
                            decimalScale={2}
                            fixedDecimalScale
                        />
                    )
                }
            }
        },
        {
            name: "payment",
            label: "Minimum Payment",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <NumberFormat
                            value={value}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale
                        />
                    )
                }
            }
        },
        {
            name: "balance",
            label: "Balance",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value: any) => {
                    return (
                        <NumberFormat
                            value={value}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale
                        />
                    )
                }
            }
        },
        {
            name: "",
            label: "",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    console.log(tableMeta)
                    return (
                        <DebtMenu debtId={tableMeta.rowData} />
                    );
                }
            }
        },

    ];

    const options: MUIDataTableOptions = {
        responsive: 'simple',
        fixedHeader: false,
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        filter: false,
        viewColumns: false,
        print: false,
        download: false,
        search: false,
        customToolbar: () => {
            return (
                <ToggleStrategy />
            )
        },
        customFooter: (
            count: any,
            page: any,
            rowsPerPage: any,
            changeRowsPerPage: any,
            changePage: any,
            textLabels: any
        ) => {
            return (
                <DebtFooter
                    count={count}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    changeRowsPerPage={changeRowsPerPage}
                    changePage={changePage}
                    textLabels={textLabels}
                />
            );
        },
    } as MUIDataTableColumnOptions;

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={options}
        />
    );
};

export default DebtTable;