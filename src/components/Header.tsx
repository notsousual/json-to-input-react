import { Stack, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h4">
          <span role="img" aria-label="peace sign">
            👩🏻‍💻
          </span>
        </Typography>
      </Link>

      <Stack direction="row">
        <MenuItem component={Link} to="/">
          Render result
        </MenuItem>
        <MenuItem component={Link} to="/custom-congig">
          Custom configuration
        </MenuItem>
      </Stack>
    </Stack>
  );
};
