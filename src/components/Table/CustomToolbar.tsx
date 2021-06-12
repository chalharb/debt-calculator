import React from 'react'
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import AddIcon from "@material-ui/icons/Add"

interface Props {
    onClick?: () => void;
}

const CustomToolbar: React.FC<Props> = ({ onClick }) => {
    return (
        <Tooltip title={"Add Debt"}>
            <IconButton onClick={onClick}>
                <AddIcon />
            </IconButton>
        </Tooltip>
    )
}

export default CustomToolbar