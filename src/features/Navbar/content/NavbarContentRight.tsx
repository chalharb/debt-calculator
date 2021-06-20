import React from 'react';

// MUI Components
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const NavbarContentRight = () => {
    return (
        <Link
            color="inherit"
            href="https://github.com/chalharb/debt-calculator"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
    );
};

export default NavbarContentRight;