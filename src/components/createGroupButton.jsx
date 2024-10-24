import React, { useState } from 'react';

function CreateGroupButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [error, setError] = useState(null);
    const BACK_URL = 'http://tu-api.com/api'; // Asegúrate de reemplazarlo con tu URL real

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BACK_URL}/groups`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: groupName,
                    description: groupDescription,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al crear el grupo');
            }

            // Reinicia el formulario
            setGroupName('');
            setGroupDescription('');
            toggleForm();
            alert('Grupo creado exitosamente!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <button className="create-group" onClick={toggleForm}>
                + Create group
            </button>

            {isOpen && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nombre del Grupo:
                            <input
                                type="text"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Crear</button>
                    <button type="button" onClick={toggleForm}>Cancelar</button>
                </form>
            )}
        </div>
    );
}

export default CreateGroupButton;