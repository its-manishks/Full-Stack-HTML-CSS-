import React, { useState } from 'react';

function UserForm() {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`✅ Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>📝 User Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
                <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required /><br />
                <button type="submit">Submit</button>
            </form>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
}

export default UserForm;
