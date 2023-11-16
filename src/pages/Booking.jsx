import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { services } from "../data/services";
import { useState } from "react";

function Booking() {
  const [service, setService] = useState("");
  const handleChange = (e) => {
    setService(e.target.value);
  };

  
  return (
    <section className="booking-img flex flex-col items-center place-content-center px-4 py-24 ">
      <div className="flex flex-col items-start">
        <p className="text-gray-50">Contact Us</p>
        <h2 className="text-gray-50 text-4xl font-semibold mb-8 tracking-wide">
          Make an Appointment
        </h2>
      </div>
      <form className="flex flex-col place-content-start items-center bg-white p-6 rounded-lg ">
        <div className="flex flex-col tablet:flex-row gap-3 mb-3">
          <FormControl sx={{ maxWidth: 300, width: 300 }}>
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter your name"
              variant="outlined"
            />
          </FormControl>
          <FormControl sx={{ maxWidth: 300, width: 300 }}>
            <TextField
              type="email"
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="flex flex-col tablet:flex-row gap-3 mb-3">
          <FormControl sx={{ maxWidth: 300, width: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Service type
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={service}
              label="Service type"
              onChange={handleChange}
            >
              {services.map((data) => (
                <MenuItem value={data.title}>{data.title}</MenuItem>
              ))}
              <MenuItem value="Others">
                <em>Others</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ maxWidth: 300, width: 300 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DateTimePicker defaultValue={dayjs()} />
              </DemoItem>
            </LocalizationProvider>
          </FormControl>
        </div>
        <div className="flex w-full">
          <TextField
            fullWidth
            id="message"
            label="Enter your message"
            multiline
            rows={6}
          />
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold tracking-wider mt-5 w-52 rounded-md py-2 px-10" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Booking;
