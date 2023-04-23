//aca es un componente que se renderiza en el adminLayout
import React,{useState} from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./AdminMenu.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import proveedor_img from "../../../../assets/Negotium Assets/proveedor.png";

export function AdminMenu({ open }) {
  const {
    user: { role },
  } = useAuth(); //obtengo el rol del usuario logueado
  const esAdmin = role === "user"; //si el rol es admin, esAdmin = true
  return (
	<Menu
		className='admin-menu'
		icon
		fluid
		text

		>
		{esAdmin && (
			<>
				<Link to={"/admin/dashboard"} className="items-cont">
				<Icon className="item-icon" name="home" size="large" />
				</Link>
				<Link to={"/admin/clients"} className="items-cont">
				<Icon name="users" size="large" />
				</Link>
				<Link to={"/admin/calendar"} className="items-cont">
					<Icon name="calendar alternate outline" size="large" />
				</Link>
				<Link className="items-cont" to={"/admin/services"}>
				<Icon name="shopping cart" size="large" />
				</Link>
				<Link className="items-cont" to={"/admin/files"}>
				<Icon name="file alternate" size="large" />
				</Link>
				<Link className="items-cont" to={"/admin/recordatorios"}>
				<Icon name="bell" size="large" />
				</Link>
				<Link className="items-cont">
					<img className="items" src={proveedor_img} alt=""/>
				</Link>
				<Link className="items-cont">
				<Icon name="configure" size="large" />
				</Link>

			</>
		)}

	</Menu>
  );

}

/* <Menu.Item
						className="items"
						as={Link}
						to='/admin/newsletter'
						active={compareIsActive("/admin/newsletter")}>
						<Icon size="large" className="icon" name='tasks' />

					</Menu.Item> */
