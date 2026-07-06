import "dotenv/config"
import express from 'express'
import cors from 'express'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get("/", (req, res)=>{
    res.send("Welcome")    
})

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      address: "123 Main Street, New York, NY 10001",
    },
    {
      id: 2,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      address: "456 Oak Avenue, Los Angeles, CA 90001",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      address: "789 Pine Road, Chicago, IL 60601",
    },
    {
      id: 4,
      name: "Sophia Williams",
      email: "sophia.williams@example.com",
      address: "321 Cedar Lane, Houston, TX 77001",
    },
    {
      id: 5,
      name: "Daniel Miller",
      email: "daniel.miller@example.com",
      address: "654 Maple Drive, Phoenix, AZ 85001",
    },
    {
      id: 6,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      address: "987 Birch Street, Seattle, WA 98101",
    },
    {
      id: 7,
      name: "James Wilson",
      email: "james.wilson@example.com",
      address: "159 Elm Street, Austin, TX 73301",
    },
    {
      id: 8,
      name: "Emma Taylor",
      email: "emma.taylor@example.com",
      address: "753 Walnut Avenue, Miami, FL 33101",
    },
    {
      id: 9,
      name: "William Anderson",
      email: "william.anderson@example.com",
      address: "852 Cherry Road, Denver, CO 80201",
    },
    {
      id: 10,
      name: "Ava Thomas",
      email: "ava.thomas@example.com",
      address: "951 Sunset Boulevard, San Francisco, CA 94101",
    },
  ];
  res.json(users);
});

app.listen(PORT, ()=>{
    console.log("Server listening", {PORT})
})