import axios from "axios";

const API_URL = 'http://localhost:5000/api/users';


export const userDetails = async (formInput) => {
    console.log(formInput);
    try {
        const { data } = await axios.post(`${API_URL}/details`, formInput);
        return data;
    } catch (error) {
        console.error("Error adding user details:", error);
        throw error; 
    }
};


export const displayUsers = async () => {
    try {
        const { data } = await axios.get(`${API_URL}/display`);
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; 
    }
};


export const deleteUsers = async (userId) => {
    try {
        const { data } = await axios.delete(`${API_URL}/delete/${userId}`);
        return data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error; 
    }
};


export const updateUser = async (id, name, age, email, contact) => {
    console.log(id, name, age, email, contact)
    try {
      const { data } = await axios.put(`${API_URL}/update/${id}`, { name, age, email, contact });
      return data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  
