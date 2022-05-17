import Grid from "@mui/material/Grid";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import DeviceList from "./DeviceList";
import DeviceDetail from "./DeviceDetail";

function Devices() {
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState({});

  const [isLoadingDevices, setIsLoadingDevices] = useState(false);
  const [error, setError] = useState(false);
  const fetchDevice = useCallback(async () => {
    try {
      setError(false);
      setIsLoadingDevices(true);
      const response = await axios({
        url: "http://localhost:4000/v1/devices",
      });
      setDevices(response.data);
      setDevice(response.data[0]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoadingDevices(false);
    }
  }, []);

  const onDeleteHandler = async (id) => {
    console.log(id);
  };

  const showDeviceHandler = (id) => {
    const device = devices.find((item) => item.id === id);
    setDevice(device);
  };

  const onAddHandler = () => {
    console.log("Add handler");
  };

  const transformDeviceData = useCallback(() => {
    if (devices.length) {
      return devices.map((item) => ({
        ...item,
        onDeleteHandler: () => onDeleteHandler(item.id),
        showDeviceHandler: () => showDeviceHandler(item.id),
        onAddHandler: () => onAddHandler(),
      }));
    }
    return [];
  }, [devices]);
  useEffect(() => {
    fetchDevice();
  }, [fetchDevice]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {<DeviceDetail {...device} />}
      </Grid>
      <Grid item xs={12} md={4}>
        {isLoadingDevices && <p>Loading Devices</p>}
        {!isLoadingDevices && !error && (
          <DeviceList devices={transformDeviceData()} />
        )}
      </Grid>
    </Grid>
  );
}

export default Devices;
