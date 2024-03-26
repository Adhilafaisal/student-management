import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                    <i className="fa-solid fa-building-columns fa-beat fa-xl me-3" style={{ color: '#332745' }}></i>
                        {' '}
                        XYZ International School
                        
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header