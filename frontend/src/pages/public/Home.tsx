import React from 'react';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  CardFooter,
  Button, 
  Image,
  Spacer
} from "@nextui-org/react";
import { FaGraduationCap, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import Header from '../../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Card className="max-w-[800px] mx-auto">
        <CardHeader className="flex gap-3">
          <Image
            alt="ManageMySchool logo"
            height={40}
            radius="sm"
            src="/logo.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">ManageMySchool</p>
            <p className="text-small text-default-500">Streamline Your Educational Institution</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>ManageMySchool is a comprehensive school management system designed to simplify administrative tasks, enhance communication, and improve overall efficiency in educational institutions.</p>
        </CardBody>
        <CardFooter>
          <Button color="primary">Get Started</Button>
        </CardFooter>
      </Card>

      <Spacer y={8} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex gap-3">
            <FaGraduationCap size={24} />
            <p className="text-md">Student Management</p>
          </CardHeader>
          <CardBody>
            <p>Effortlessly manage student records, attendance, and performance.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3">
            <FaChalkboardTeacher size={24} />
            <p className="text-md">Teacher Portal</p>
          </CardHeader>
          <CardBody>
            <p>Empower teachers with tools for grading, scheduling, and communication.</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3">
            <FaCalendarAlt size={24} />
            <p className="text-md">Scheduling</p>
          </CardHeader>
          <CardBody>
            <p>Optimize class schedules and resource allocation with ease.</p>
          </CardBody>
        </Card>
      </div>

      <Spacer y={8} />

      <Card className="bg-primary-50">
        <CardBody>
          <h3 className="text-xl font-bold mb-2">Ready to transform your school management?</h3>
          <Button color="primary" size="lg">
            Request a Demo
          </Button>
        </CardBody>
      </Card>
    </div>
)};

export default HomePage;
