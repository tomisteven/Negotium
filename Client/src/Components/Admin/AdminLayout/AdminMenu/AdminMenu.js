//aca es un componente que se renderiza en el adminLayout
import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./AdminMenu.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";


import client_img from "../../../../assets/Negotium Assets/client.png"
import panel_img from "../../../../assets/Negotium Assets/homa.png"
import box_img from "../../../../assets/Negotium Assets/box.png"
import folder_img from "../../../../assets/Negotium Assets/folder.png"
import recordatorios_img from "../../../../assets/Negotium Assets/recordatorios2.png"
import proveedor_img from "../../../../assets/Negotium Assets/proveedor.png"
import configuracion_img from "../../../../assets/Negotium Assets/logout.png"



export function AdminMenu(props) {
	//console.log(useAuth());
	const { pathname } = useLocation();

	const {user: { role } } = useAuth(); //obtengo el rol del usuario logueado
	const esAdmin = role === "user"; //si el rol es admin, esAdmin = true

	const compareIsActive = (path) => {
		if (pathname === path) {
			return true;
		}
		return false;
	};

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
					<Icon name="home" size="large" />
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