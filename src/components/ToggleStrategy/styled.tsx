import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

import { 
    Switch,
} from '@material-ui/core';

export const StyledSwitch = styled(Switch)`
${({ theme }) => `
    width: 28;
    height: 16;
    padding: 0;
    display: 'flex;
`}`;