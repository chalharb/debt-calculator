import { MUIDataTableColumn } from "mui-datatables";
import { numberFormat, percentFormat } from '../../helpers/numberFormatter';

export const columns: MUIDataTableColumn[] = [
    {
        name: 'name',
        label: 'Name',
        options: {
            draggable: true,
            sortThirdClickReset: true,
        },
    },
    {
        label: "Rate",
        name: "rate",
        options: {
            filter: true,
            customBodyRender: (value: number) => {
                return percentFormat.format(value);
            }
        }
    },
    {
        label: "Payment",
        name: "payment",
        options: {
            filter: true,
            customBodyRender: (value: number) => {
                return numberFormat.format(value);
            }
        }
    },
    {
        label: "Balance",
        name: "balance",
        options: {
            filter: true,
            customBodyRender: (value: number) => {
                return numberFormat.format(value);
            }
        }
    },
];