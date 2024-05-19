import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, WORKER_ROUTE } from '../utils/consts';
import {Button} from 'react-bootstrap';
import {observer} from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';
import './navbar.css'
const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar className='navbar'>
            <Container>
                <div className='logo'></div>
                <NavLink className='ms-3 text-white text-decoration-none' to={SHOP_ROUTE}>Автобусные перевозки</NavLink>
                {user.isAuth ?
                <Nav className="ms-auto" style={{color: 'white'}}>
                {user.user.role === 'ADMIN' && <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>}
                {user.user.role === 'WORKER' && <Button variant={"outline-light"} onClick={() => navigate(WORKER_ROUTE)}>Выбрать себе маршрут</Button>}
                    <Button variant={"outline-light"} onClick={() => logOut()} className='ms-2'>Выйти</Button>
                </Nav>
                :
                <Nav className="ms-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={()=>  navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;