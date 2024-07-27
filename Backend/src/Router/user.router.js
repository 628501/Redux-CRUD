import { Router } from "express";
import handler from "express-async-handler";
import { connection } from "../server.js";


const router = Router();

router.post(
  "/details",
  handler(async (req, res) => {
    const { name, age, email, contact } = req.body;

    try {
      const query =
        "INSERT INTO users (name,age,email,contact) VALUES (?, ?, ?, ?)";
      const values = [name, age, email, contact];
      connection.query(query, values, (err, results) => {
        if (err) {
          console.error("Error creating users: ", err);
          return res.status(500).json({ error: "server error" });
        }
        res.status(201).json(results);
       
      });
    } catch (error) {
      console.error("Error creating users: ", err);
      return res.status(500).json({ error: "server error" });
    }
  })
);

router.get(
  "/display",
  handler(async (req, res) => {
    try {
      const query = "SELECT * FROM users";
      connection.query(query, (err, results) => {
        if (err) {
          console.error("Error displaying users:", err);
          return res.status(500).json({ error: "server error" });
        }
        res.json(results);
      });
    } catch (error) {
      console.error("Error displaying users:", error);
      res.status(500).json({ error: "Server error" });
    }
  })
);

router.delete(
  "/delete/:userId",
  handler(async (req, res) => {
    const { userId } = req.params;
    try {
      const query = "DELETE FROM users WHERE id = ?";
      connection.query(query, [userId], (err, results) => {
        if (err) {
          console.error("Error deleting users:", err);
          return res.status(500).json({ error: "server error" });
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ error: "User not found" });
        }
        res.status(201).json(results);
      });
    } catch (error) {
      console.error("Error deleting users:", error);
      res.status(500).json({ error: "Server error" });
    }
  })
);

router.put(
    "/update/:id",
    handler(async (req, res) => {
      const { id } = req.params;
      const { name, age, email, contact } = req.body;
  
      try {
        const query =
          "UPDATE users SET name = ?, age = ?, email = ?, contact = ? where id = ?";
        const values = [name, age, email, contact, id];
        connection.query(query, values, (err, results) => {
          if (err) {
            console.error("Error updating user: ", err);
            return res.status(500).json({ error: "server error" });
          }
          res.status(201).json(results);
        });
      } catch (error) {
        console.error("Error updating user: ", error);
        return res.status(500).json({ error: "server error" });
      }
    })
  );

export default router;