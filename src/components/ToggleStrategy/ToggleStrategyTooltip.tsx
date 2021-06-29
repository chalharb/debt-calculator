import React from 'react';
import { Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, Theme } from '@material-ui/core/styles';

interface Props {
    title: string;
    content: string;
}

const ToggleStrategy:React.FC<Props> = ({title, content}) => {

    const HtmlTooltip = withStyles((theme: Theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);

    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Box fontWeight="fontWeightBold">
                        <Typography color="inherit">{title}</Typography>
                    </Box>
                    <p>{content}</p>
                </React.Fragment>
            }
        >
            <InfoIcon style={{ fontSize: 14 }} />
        </HtmlTooltip>
    );
};

export default ToggleStrategy;