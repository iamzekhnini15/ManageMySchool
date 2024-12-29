import { Spacer, Card, CardBody } from "@nextui-org/react";
import Header from "../../components/Header";

const About = () => {
    return (
        <div className="md">
            <Spacer y={8} />
            <h1 className="text-center text-4xl">
                About Us
            </h1>
            <Spacer y={8} />
            <Card>
                <CardBody>
                    <p style= {{ textAlign: 'center' }}>
                        Welcome to our school management system. We are dedicated to providing
                        efficient and effective solutions for educational institutions.
                    </p>
                </CardBody>
            </Card>
            <Spacer y={4} />
            <Card>
                <CardBody>
                    <h3 className="text-xl font-bold">Our Mission </h3>
                    <p>
                        To streamline educational administration and enhance the learning
                        experience through innovative technology solutions.
                    </p>
                </CardBody>
            </Card>
            <Spacer y={8} />
        </div>
    );
};

export default About;