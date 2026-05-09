Full Stack E-Commerce Web App
Kofi’s Pen is a full-stack e-commerce web application where users can browse products, add items to a cart, 
and place orders online. The project demonstrates modern DevOps practices including containerization, CI/CD, and cloud deployment.

Live Demo
🌍 API Base URL:
http://18.232.167.184:5000
🏠 Frontend Pages:
/index.html
/products.html
/cart.html
/checkout.html
/contact.html

Tech Stack
Frontend
HTML5
CSS3
JavaScript (Vanilla)
Backend
Node.js
Express.js
MongoDB (MongoDB Atlas)
DevOps / Infrastructure
Docker
GitHub Actions CI/CD (GitHub)
AWS EC2 (Amazon Web Services)

kofis-pen/
│
├── server.js
├── package.json
├── Dockerfile
├── config/
│   └── db.js
├── models/
│   └── Order.js
├── routes/
│   └── orders.js
│
├── public/
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── checkout.html
│   └── contact.html
│
└── .github/
    └── workflows/
        └── cicd.yml

Docker Setup
Build Image
docker build -t kofispen-app .
docker run -d -p 5000:5000 kofispen-app

CI/CD Pipeline

This project uses GitHub Actions for automated:

Code checkout
Docker image build
Push to Docker Hub
Deploy to AWS EC2

Workflow file:
.github/workflows/cicd.yml

Deployment Architecture
GitHub → GitHub Actions → Docker Hub → AWS EC2 → Running Container → MongoDB Atlas

Environment Variables

Create a .env file or GitHub secret:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/kofispen
PORT=5000

Deployment Notes
Ensure EC2 security group allows port 5000
MongoDB Atlas IP whitelist must include EC2 IP or 0.0.0.0/0
Docker container must expose port 5000
