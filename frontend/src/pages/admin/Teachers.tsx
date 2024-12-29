import React, { useState } from "react";
import {
    Button,
    Input,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import axios from "axios";

interface Teacher {
    id?: number;
    qualification: string;
    speciality: string;
    name: string;
    teaching_preferences?: Record<string, string>;
    [key: string]: string | number | Record<string, string> | undefined;
}

export default function Teachers() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newTeacher, setNewTeacher] = useState<Teacher>({
        qualification: "",
        speciality: "",
        name: "",
        teaching_preferences: {},
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewTeacher((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/teachers/addTeacher", newTeacher);

            if (response) {
                onClose();
                setNewTeacher({
                    qualification: "",
                    speciality: "",
                    name: "",
                    teaching_preferences: {},
                });
            }
        } catch (error) {
            console.error("Error adding teacher:", error);
        }
    };

    const inputFields = [
        { label: 'Name', name: 'name', placeholder: 'Enter name' },
        { label: 'Speciality', name: 'speciality', placeholder: 'Enter speciality' },
        { label: 'Qualification', name: 'qualification', placeholder: 'Enter qualification' }
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Teachers Management</h1>
                <Button color="primary" onPress={onOpen}>
                    Add New Teacher
                </Button>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader>Add New Teacher</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col gap-4">
                            {inputFields.map((field) => (
                                <Input
                                    key={field.name}
                                    label={field.label}
                                    name={field.name}
                                    value={String(newTeacher[field.name] || '')}
                                    onChange={handleInputChange}
                                    placeholder={field.placeholder}
                                />
                            ))}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={handleSubmit}>
                            Add Teacher
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}