import React from 'react'
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { StyledCustomToolbarSelect } from './styled'

interface Props {
    onClick?: () => void;
}

const CustomToolbarSelect: React.FC<Props> = ({ onClick }) => {
    return (
        <StyledCustomToolbarSelect>
            <Tooltip title={"Edit Selected"}>
                <IconButton onClick={onClick}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Delete Selected"}>
                <IconButton >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </StyledCustomToolbarSelect>
    )
}

export default CustomToolbarSelect