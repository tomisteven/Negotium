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
				<div className="items-cont">
						<img className="items" src={panel_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={client_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={box_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={folder_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={recordatorios_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={proveedor_img} alt=""/>
					</div>
					<div className="items-cont">
						<img className="items" src={configuracion_img} alt=""/>
					</div>

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