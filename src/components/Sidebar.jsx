import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <List
      color="white"
      fontSize="1.2em"
      spacing="20px"
      p="20px"
      marginTop="100px"
    >
      <ListItem display="flex">
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem display="flex">
        <ListIcon as={EditIcon} />
        <NavLink to="/airport">Airport</NavLink>
      </ListItem>
      <ListItem display="flex">
        <ListIcon as={AtSignIcon} />
        <NavLink to="/aircraft">Aircraft</NavLink>
      </ListItem>
    </List>
  );
}

export { Sidebar };
