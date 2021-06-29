import React from 'react';
import MUIDataTable, { MUIDataTableColumnOptions } from "mui-datatables";
import { Debt } from '../../app/Debt/model';
import NumberFormat from 'react-number-format';
import ToggleStrategy from '../ToggleStrategy/ToggleStrategy';

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

    ];

    const options = {
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
        }
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