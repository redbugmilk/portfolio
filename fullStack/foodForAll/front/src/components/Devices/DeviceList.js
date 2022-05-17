import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";

function DeviceList(props) {
  if (!props.devices.length) {
    <p>There are no devices!</p>;
  }
  return (
    <List>
      {props.devices.map((item, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={item.onDeleteHandler}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton onClick={item.showDeviceHandler}>
            <ListItemAvatar>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={item.onAddHandler}
              >
                <Avatar>
                  <AddIcon />
                </Avatar>
              </IconButton>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.brand} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default DeviceList;
