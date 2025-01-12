import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Card, styled } from "@mui/material";

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

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function FormPropsTextFields() {
  const [open, setOpen] = React.useState(false);
  const [genderType, setGenderType] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGenderChange = (event) => {
    setGenderType(event.target.value);
  };

  return (
    <div>
      <CustomBox>
        <Card
          sx={{
            maxWidth: 300,
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter First Name"
                    className="text-field"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter Last Name"
                    className="text-field"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter Email"
                    className="text-field"
                    defaultValue=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small-label">Gender</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={genderType}
                    label="Gender"
                    onChange={handleGenderChange}
                    fullWidth
                  >
                    {gender?.map((item) => (
                      <MenuItem value={item.value}>{item.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

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
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Register Success!
                  </Typography>
                </Box>
              </Modal>
            </Grid>
          </form>
        </Card>
      </CustomBox>
    </div>
  );
}
