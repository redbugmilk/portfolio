import Typography from "@mui/material/Typography";

function DeviceDetail(props) {
  return (
    <>
      <Typography align="center" variant="h3" component="div" gutterBottom>
        Device detail
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        {`Name: ${props.name}`}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        {`Brand: ${props.brand}`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`Date creation: ${props.createdAt}`}
      </Typography>
    </>
  );
}

export default DeviceDetail;
