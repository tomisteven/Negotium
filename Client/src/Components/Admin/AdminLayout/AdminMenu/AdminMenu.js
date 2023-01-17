//aca es un componente que se renderiza en el adminLayout
import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./AdminMenu.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";

export function AdminMenu(props) {
	//console.log(useAuth());
	const { pathname } = useLocation();

	const {
		user: { role },
	} = useAuth(); //obtengo el rol del usuario logueado
	const esAdmin = role === "admin"; //si el rol es admin, esAdmin = true

	const compareIsActive = (path) => {
		if (pathname === path) {
			return true;
		}
		return false;
	};

	return (
		<Menu
			className='admin-menu'
			vertical
			icon
			fluid
			text>
			{esAdmin && (
				<>
					<Menu.Item
						as={Link}
						to='/admin/menu'
						active={compareIsActive("/admin/menu")}>
						<Icon name='bars' />
						Menu
					</Menu.Item>
					<Menu.Item
						as={Link}
						to='/admin/users'
						active={compareIsActive("/admin/users")}>
						<Icon name='users' />
						Users
					</Menu.Item>
					<Menu.Item
						as={Link}
						to='/admin/newsletter'
						active={compareIsActive("/admin/newsletter")}>
						<Icon name='mail' />
						Newsletter
					</Menu.Item>
				</>
			)}
			<Menu.Item
				as={Link}
				to='/admin/blog'
				active={compareIsActive("/admin/blog")}>
				<Icon name='comment' />
				Blog
			</Menu.Item>
			<Menu.Item
				as={Link}
				to='/admin/courses'
				active={compareIsActive("/admin/courses")}>
				<Icon name='video' />
				Cursos
			</Menu.Item>
		</Menu>
	);
}
