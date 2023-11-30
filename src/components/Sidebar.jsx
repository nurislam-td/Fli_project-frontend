import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing="20px" p="20px">
      <ListItem>
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/create">Create</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
}

export { Sidebar };
