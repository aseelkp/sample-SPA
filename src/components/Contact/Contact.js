import * as React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./style.css"; 

const Contact = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="contact">
      <div className="title">
        <h1>Contact Us</h1>
      </div>
      <div className="Container formContainer" id="contact">
          <div className="box">
            <TextField

              id="outlined-multiline-flexible"
              label="Name"
              maxRows={4}
              value={value}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Email id"
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          <Button variant="contained" fullWidth>Send Message</Button>
          </div>
      </div>
    </div>
  );
};

export default Contact;
