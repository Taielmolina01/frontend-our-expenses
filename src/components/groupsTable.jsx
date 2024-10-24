import React, { useEffect, useState } from 'react';

function GroupsTable({ currentUser }) {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                setLoading(true);
                res = await fetch(`${BACK_URL}/users/${encodeURIComponent(currentUser.email)}/groups`, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });                
                if (!response.ok) {
                    throw new Error('Error al cargar los grupos');
                }
                const data = await response.json();
                setGroups(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre del Grupo</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((group) => (
                    <tr>
                        <td>{group.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GroupsTable;