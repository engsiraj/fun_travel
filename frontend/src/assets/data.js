import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/';

export const fetchItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/`);
        return response.data
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error; // Re-throw error for handling in components
    }
};


export const createItem = async (values, closePopup) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/`, { values });
        closePopup(true);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};


export const updateItem = async (id, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/${id}/`,updatedData);
        console.log('updated data');
        return response.data;
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};


export const deleteItem = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/api/${id}`);
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};


export const handleLogin = async (username, password, navigate) => {
    try {
        const response = await fetch(`${BASE_URL}/api/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (response.ok) {
            navigate('dashboard')
        } else {
            console.error("Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};



