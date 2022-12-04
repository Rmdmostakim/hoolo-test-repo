import React from 'react'
import { Container } from 'react-bootstrap';
import ContentWrapper from '../Atomics/ContentWrapper/ContentWrapper';
import Categories from './Categories/Categories';

const Discovers = (props)=> {
    return (
        <>
            <ContentWrapper>
                <Container fluid>
                 <Categories category={props.category}/>
                </Container>
            </ContentWrapper>
        </>
    )
}

export default Discovers;