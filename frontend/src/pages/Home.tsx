import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Card, 
  Input, 
  Select, 
  SelectItem, 
  Button, 
  Spacer 
} from "@nextui-org/react";

const CreateClassForm = (e: any) => {

    useEffect(() => {
        fetchTeachers();
    }, []);
    
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    speciality: '',
    academic_year: '',
    max_students: '',
    teacherId: ''
  });
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get('/api/teachers');
      setTeachers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
        const res = await axios.post('/api/classes/addClass', formData);
        console.log(res.data);
        return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Class</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Class Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter class name"
          fullWidth
        />
        <Spacer y={2} />
        <Select
          label="Level"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
          placeholder="Select level"
        >
          <SelectItem key="elementary" value="elementary">Elementary</SelectItem>
          <SelectItem key="middle" value="middle">Middle School</SelectItem>
          <SelectItem key="high" value="high">High School</SelectItem>
        </Select>
        <Spacer y={2} />
        <Input
          label="Speciality"
          name="speciality"
          value={formData.speciality}
          onChange={handleInputChange}
          placeholder="Enter speciality"
          fullWidth
        />
        <Spacer y={2} />
        <Input
          label="Academic Year"
          name="academic_year"
          value={formData.academic_year}
          onChange={handleInputChange}
          placeholder="Enter academic year"
          fullWidth
        />
        <Spacer y={2} />
        <Input
          label="Max Students"
          name="max_students"
          type="number"
          value={formData.max_students}
          onChange={handleInputChange}
          placeholder="Enter maximum number of students"
          fullWidth
        />
        <Spacer y={2} />
        <Select
          label="Teacher"
          name="teacherId"
          value={formData.teacherId}
          onChange={handleInputChange}
          placeholder="Select teacher"
        >
          {/* Populate with actual teacher data */}
            {teachers.map((teacher: any) => (
                <SelectItem key={teacher.id} value={teacher.id}>
                    {teacher.name}
                </SelectItem>
            ))}
        </Select>
        <Spacer y={4} />
        <Button type="submit" color="primary" fullWidth>
          Create Class
        </Button>
      </form>
    </Card>
  );
};

export default CreateClassForm;
