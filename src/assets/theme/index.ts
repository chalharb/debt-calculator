import { createMuiTheme } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette: {
      primary: blueGrey,
      secondary: blueGrey
  }
});

export default theme;