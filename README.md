# 🧾 Receipt Extractor App

A full-stack web application for uploading receipt images, extracting structured data using AI (Tesseract OCR), and displaying it on the frontend.

## 📚 Overview

This app allows users to upload images of receipts and automatically extract the following details using an AI model:

- 🏪 Vendor Name  
- 🗓️ Date  
- 💵 Currency (3-letter code)  
- 📦 Items (Name & Cost)  
- 🧾 GST/Tax  
- 💰 Total Amount  

The project consists of:
- **Backend**: Spring Boot + Tesseract (Tess4J)
- **Frontend**: React.js

---

## 🛠️ Tech Stack

| Layer    | Technology                |
|----------|---------------------------|
| Backend  | Java 17, Spring Boot, Tess4J (Tesseract) |
| Frontend | React.js, Axios, HTML/CSS |
| AI OCR   | Tesseract OCR via Tess4J  |
| Build    | Maven (Backend), npm (Frontend) |
| Storage  | Local file system (for demo)  |

---

## 📁 Directory Structure

receipt-extractor/
├── backend/ # Spring Boot backend
│ ├── src/
│ └── pom.xml
├── frontend/ # React frontend
│ ├── src/
│ └── package.json
├── sample-receipts/ # Sample images for testing
└── README.md # You're here

## ⚙️ How to Run

### ✅ Prerequisites

- Java 17+
- Node.js and npm
- Tesseract installed locally
- Maven installed

### 🚀 Backend (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
Runs on: http://localhost:8080
Ensure Tesseract is installed and accessible via system path

🚀 Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Runs on: http://localhost:3000

📸 How it Works
User uploads .jpg, .jpeg, or .png receipt image

Image is sent to /api/extract-receipt-details API

Backend uses Tesseract OCR to extract key details

Extracted data + image are stored and returned to frontend

Frontend displays the extracted receipt details

🔍 Example Receipt Output
Vendor: Krishna Veg Restaurant

Date: 2024-06-22
Currency: INR
Items:
Paneer Tikka - ₹250
Butter Naan - ₹60
GST: ₹31
Total: ₹341

✅ Unit Testing (Backend)
JUnit tests implemented for:
Valid image input and successful extraction
Invalid file type (.pdf, .doc, etc.)
AI failure (empty/invalid response)
500 Internal Server error

cd backend
mvn test
🎥 Demo Video
A short video demonstrating upload, extraction, and display is included in my Google Form submission.

📂 Sample Images
Test using provided files under sample-receipts/. You can also upload your own receipt images to try out the extraction accuracy.

📌 Note on Stack Choice
Although the original assignment specified NestJS, I completed the backend using Spring Boot — a robust, production-grade framework I am proficient in. I also used Tesseract OCR (via Tess4J) as the AI model for extracting receipt content.
Note: While I implemented logic to process the extracted text, Tesseract's results were not consistently accurate across all sample receipts. I genuinely did my best to extract structured data reliably, but due to limitations with OCR precision, some fields may not display correctly.
I sincerely apologize for this shortcoming and fully accept whatever outcome is decided based on this effort.

📬 Submission Info
Repo link both frontend & backend : https://github.com/prathyusha1003/Receipt-Extractor

Form Submitted: ✅

🙋 Contact
Prathyusha R
📧 [prathyumanju@gmail.com]
📎 [LinkedIn - https://www.linkedin.com/in/prathyusha1003/]

Screenshots of Receipt-Extractor App

![Frontend-1](https://github.com/user-attachments/assets/8c433f6f-12c5-4099-8e9c-9b5b2a12aff2)

![Frontend-2](https://github.com/user-attachments/assets/d00f5b75-a650-4ac6-acc3-7ed52648952f)

![Frontend-3](https://github.com/user-attachments/assets/c15deb32-fd78-4c40-9fd9-c21614030a89)

![Frontend-4](https://github.com/user-attachments/assets/b1b5d093-8542-4721-9881-e7a5c61f8b83)

