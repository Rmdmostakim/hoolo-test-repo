import React from 'react'
import {Button,Container} from 'react-bootstrap';

function Reload({retry}) {
    return (
        <Container>
            <div className='bg-secondary rounded text-center p-5'>
                <p className='text-dark font-weight-bold'>Server error !</p>
                <Button onClick={retry}> Retry</Button>
            </div>
        </Container>
    );
}

export default Reload
