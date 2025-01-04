Customer Management Application

Overview

The Customer Management Application is a full-stack web application designed to manage customer profiles efficiently. The application enables users to view, filter, sort, and paginate customer data while storing and retrieving relevant details through a secure and scalable backend.

This project uses Django as the backend and Vue3 with Vite as the frontend, ensuring a seamless user experience and fast performance.

Features

Frontend
Dynamic customer cards: Displays customer data with details and pagination.
Filtering and sorting: Sort customers alphabetically, by recency, or urgency, and filter by search terms.
Dialog for customer details: Expands customer profiles to show detailed information, including a partner profile if applicable.
Responsive design: Built with Vuetify for a modern, mobile-first interface.
Backend
Django REST Framework (DRF): API endpoints for fetching and managing customer data.
AWS Integration: Stores customer files and profile data securely on AWS S3 and RDS (PostgreSQL).
Scalable architecture: Ensures secure data management and scalability.
Technologies Used

Backend
Django
Django REST Framework (DRF)
PostgreSQL (via AWS RDS)
AWS S3 for media storage
Frontend
Vue 3
Vite
TypeScript (Composition API)
Vuetify for UI components
Setup and Installation

Requirements
Python 3.8+
Node.js 14+
npm or yarn
PostgreSQL database (or equivalent)
AWS account for S3 and RDS setup

Backend Setup
Clone the repository:
git clone <repository-url>
cd <repository-folder>
Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate     # For Windows
Install backend dependencies:
pip install -r requirements.txt
Set up your .env file for Django:
SECRET_KEY=<your-django-secret-key>
DATABASE_URL=<your-database-url>
AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
AWS_STORAGE_BUCKET_NAME=<your-s3-bucket-name>

Run migrations and start the server:
python manage.py migrate
python manage.py runserver
Frontend Setup
Navigate to the frontend directory:
cd frontend
Install dependencies:
npm install
Set up your .env file for Vue3:
VITE_BACKEND_HOST=http://127.0.0.1:8000/api/
Start the development server:
npm run dev
Usage

User Features
View customer profiles in a card-based layout.
Search and filter customer data in real time.
Sort customers alphabetically, by recency, or urgency.
Expand customer profiles to view additional details and partner profiles.
Admin Features
Add, update, or delete customer data through Django Admin or API.
Securely upload and manage customer files using AWS S3.

Future Enhancements

Add authentication and role-based access control.
Enable editing of customer and partner profiles from the frontend.
Dashboard analytics for customer insights and trends.
License

This project is licensed under the MIT License. See the LICENSE file for more details.

Let me know if you'd like any adjustments or additional details added! 😊