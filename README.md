VisaEase - Visa Navigator Portal

VisaEase is a user-friendly Visa Navigator Portal designed to simplify visa management for users. It enables travelers to check visa requirements, view detailed visa information, apply for visas online, and track their applications effortlessly. Administrators and users can manage visas dynamically, making the platform efficient and feature-rich. The website is fully responsive, providing an optimized experience on desktops, tablets, and smartphones.

Live Link

The client site is live at: VisaEase client

Live Link

The server is live at: VisaEase Server

Features

Home Page

Banner: Displays an attractive image and an introduction to the platform.

Latest Visas: Showcases the six most recently added visas with a "See Details" option. Users must log in to view visa details.

Testimonials: Dynamic feedback section displaying client reviews.

Why Trust Us: Highlights the platform's benefits and reliability.

All Visa Section

Visa Listings: Displays all available visas with details.

Filter Option: Allows users to filter visas by type.

Visa Details: View comprehensive information about each visa. Users can apply directly from this page.

Apply for Visa: On clicking "Apply," a popup form appears where users can fill out their application.

User Features

Add Visa: (Private Route) Enables users to add new visa information via a form.

My Added Visa: (Private Route) Displays visas added by the logged-in user. Users can update or delete visas from this section.

My Applied Visa: (Private Route) Shows a list of all visas applied by the user. Includes:

Search Functionality: Allows users to search by country name.

Cancel Application: Users can cancel any application.

Authentication

Login and Register: Seamless login and registration functionality using Firebase authentication.

Responsiveness

The website is designed to be fully responsive, offering a consistent and user-friendly experience across all screen sizes, including desktops, tablets, and smartphones.

Tech Stack

React: Component-based UI library.

Tailwind CSS & Daisy UI: For responsive and modern styling.

Firebase: Authentication and backend integration.

AOS (Animate on Scroll): For scroll animations.

Lottie-React: For engaging animations.

React-Helmet-Async: For managing page metadata.

React-Icons: For easily integrating icons.

React-Simple-Typewriter: For dynamic typewriter effects.

SweetAlert2: For beautiful alert dialogs.

Swiper: For creating responsive sliders and carousels.

Running the Project Locally

To run this project locally, follow these steps:

1. Clone the Repository

git clone https://github.com/AsifurRahman10/VisaEase-website.git
cd VisaEase-website

2. Install Dependencies

Frontend

Navigate to the frontend folder and install the required dependencies:

cd frontend
npm install

Backend

Navigate to the backend folder and install the required dependencies:

cd backend
npm install

3. Setup Environment Variables

You need to create a .env file for both the frontend and backend with the necessary environment variables.

Frontend

Create a .env file in the frontend folder and add the following variables:

VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
VITE_STRIPE_KEY=your-stripe-api-key
VITE_API_BASE_URL=your-backend-api-url

Backend

Create a .env file in the backend folder and add the following variables:

DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
SECRET_KEY=your-secret-key
PORT=5000

4. Running the Project

After setting up the environment variables, you can start the project by running the following commands:

Frontend

In the frontend folder, run:

npm run dev

Backend

In the backend folder, run:

npm start

The frontend will be available at http://localhost:5173, and the backend will be available at http://localhost:5000 (or the port you set).
