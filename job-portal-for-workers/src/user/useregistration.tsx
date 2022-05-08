import React, { FunctionComponent, useState } from 'react';
import { Container, Toast } from 'react-bootstrap';


const Userregistration: FunctionComponent = () => {
    const [show, toggleShow] = useState(true);


    return (<div>
        <Container className="p-3">

            <h1 className="header">Welcome To React-Bootstrap</h1>
            <Toast show={show} onClose={() => toggleShow(false)}>
                <Toast.Header>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Toast.Header>
                <Toast.Body><div>wpw</div> </Toast.Body>
            </Toast>
        </Container>
    </div >)
};

export default Userregistration;


