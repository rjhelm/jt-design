import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import BlogCard from './BlogsCards';
import Particle from '../Particle';

import jclark from '../../../public/img/jclark.jpg';
import jid from '../../../public/img/jid.jpg';
import juju from '../../../public/img/juju.jpg';
import reach from '../../../public/img/reach.jpg';
import she from '../../../public/img/she.jpg';

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Artwork</strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Recent Doodles
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={jclark}
                        isBlog={false}
                        title="Jordan Clarkson, Utah Jazz"
                        description="Drawing done on iPad."
                        link="none"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={jid}
                        isBlog={false}
                        title="JID || Never"
                        description="Drawing done on iPad."
                        link="none"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={juju}
                        isBlog={false}
                        title="Juju || The Avenger"
                        description="Drawing done on iPad."
                        link="none"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={reach}
                        isBlog={false}
                        title="Through the Clouds"
                        description="Drawing done on iPad."
                        link="none"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={she}
                        isBlog={false}
                        title="She BAD Bae"
                        description="Drawing done on iPad."
                        link="none"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;