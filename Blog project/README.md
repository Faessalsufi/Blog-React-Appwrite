# React Blog App with Appwrite Backend

Welcome to our React blog project! This blog application allows users to register, login, and logout, create blog posts with images and content using a rich text editor, and also provides the functionality for authenticated users to edit or delete their posts. Only logged-in users can view all posts.

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Hook Form**: Library for managing form state in React.
- **TinyMCE**: WYSIWYG editor for creating rich text content.
- **Appwrite**: Open-source backend server for managing authentication and data storage.

## Features

- **User Authentication**: Users can register, login, and logout securely.
- **Create Blog Posts**: Authenticated users can create blog posts with images and content.
- **Edit and Delete Posts**: Authenticated users have the ability to edit or delete their own posts.
- **View Posts**: All users who is logged-in can view blog posts on the homepage.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Faessalsufi/Blog-React-Appwrite.git
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install the required dependencies:

   ```bash
   cd react-blog-app
   npm i
   ```

3. **Set up Appwrite Backend**:

   - Sign up for an Appwrite account and create a new project.
   - Set up authentication and database services in Appwrite.
   - Note down your Appwrite API keys and endpoint.

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   VITE_APPWRITE_URL = ""
   VITE_APPWRITE_PROJECT_ID = ""
   VITE_APPWRITE_DATABASE_ID = ""
   VITE_APPWRITE_COLLECTION_ID = ""
   VITE_APPWRITE_BUCKET_ID = ""
   ```

5. **Start the Development Server**:
   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:5173` to access the application.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

---

Feel free to reach out if you have any questions or need further assistance. Happy Coding! 🚀
