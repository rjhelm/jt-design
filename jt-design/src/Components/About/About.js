import React from 'react';

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7}
                    style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px", }}>
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>JT Design <strong className="purple"></strong></h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;