import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import {firebase} from '../../../firebase';
import { firebaseLooper } from "../../ui/misc";

const AdminNav = () => {
  const links = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Add match",
      linkTo: "/admin_matches/edit_match",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
    {
      title: "Add player",
      linkTo: "/admin_players/add_players",
    },
  ];
  const style = {
    color: "#ffffff",
    fonrWeight: "300",
    borderBottom: "1 solid #353535",
  };

  const renderItems = () =>
    links.map((link) => (
      <Link to={link.linkTo} key={link.title}>
        <ListItem button style={style}>
          {link.title}
        </ListItem>
      </Link>
    ));

const logoutHandler = () => {
 firebase.auth().signOut().then(()=> {
     console.log('Log out succesfull');
     
 },(error)=> {
         console.log('Error logging out');
         

 })
}

  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Logout
      </ListItem>
    </div>
  );
};

export default AdminNav;