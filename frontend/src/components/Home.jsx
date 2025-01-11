import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";
import { Card } from "@mui/material";

const gender = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function FormPropsTextFields() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
      <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              required
              id="outlined-required"
              label="Enter First Name"
              defaultValue=""
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              required
              id="outlined-required"
              label="Enter Last Name"
              defaultValue=""
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              required
              id="outlined-required"
              label="Enter Email"
              defaultValue=""
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              id="outlined-select-gender"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your Gender"
            >
              {gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid xs={12} sm={6} item>
          <Button variant="contained" onClick={handleOpen}>
            Submit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Register Success!
              </Typography>
            </Box>
          </Modal>
          </Grid>
        </Grid>
      </form>
      </Card>
      </Box>
    </div>
  );
}
