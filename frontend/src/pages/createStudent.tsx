import React, { useState } from 'react';
import { Button, Input, DatePicker, DateValue, Select, SelectItem } from '@nextui-org/react';

const DateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleId: "student",
    selectedDate: null as DateValue | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: DateValue | null) => {
    setFormData({
      ...formData,
      selectedDate: date,
    });
  };


  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      roleId: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dateOfBirth = formData.selectedDate ? formData.selectedDate.toDate('CET') : null;

    const data = {
      email: formData.email,
      first_name: formData.firstname,
      last_name: formData.lastname,
      password: formData.password,
      roleId: formData.roleId,
      dateOfBirth: dateOfBirth,
    };

    console.log(data.roleId);

    try {
      const response = await fetch('http://localhost:5000/api/students/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Student created successfully');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <h3>Formulaire avec sélection de date</h3>

        <div style={{ marginBottom: '20px' }}>
          <Input
            isClearable
            label="Prénom"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Input
            isClearable
            label="Nom"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Input
            isClearable
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Input
            isClearable
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Entrez un mot de passe"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <DatePicker
            value={formData.selectedDate}
            onChange={handleDateChange}
            aria-label="Sélectionner une date"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Select
            aria-label="Choisir un rôle"
            value={formData.roleId}
            onChange={handleRoleChange}
            label="Rôle"
          >
            <SelectItem key={"student"} value="student">Student</SelectItem>
            <SelectItem key={"admin"} value="admin">Admin</SelectItem>
            <SelectItem key={"teacher"} value="teacher">Teacher</SelectItem>
          </Select>
        </div>

        <div>
          <Button type="submit" color="primary">
            Soumettre
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DateForm;
