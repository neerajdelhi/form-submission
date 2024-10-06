## Installation Guide

To install this project in your local environment, follow these steps:

1. Clone the repository from GitHub using the following command:
    ```bash
    git clone https://github.com/neerajdelhi/form-submission.git
    ```

2. Navigate to the project directory:
    ```bash
    cd <form-submission>
    ```

3. Install the project dependencies using Composer:
    ```bash
    composer install
    ```

4. Install the Node.js dependencies:
    ```bash
    npm install
    ```

5. Compile the assets:
    ```bash
    npm run dev
    ```

6. Copy the `.env.example` file to `.env`:
    ```bash
    cp .env.example .env
    ```

7. Generate the application key:
    ```bash
    php artisan key:generate
    ```

8. Set up the database configuration in the `.env` file:
    ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
    ```

9. Run the database migrations and seed the database:
    ```bash
    php artisan migrate --seed
    ```

10. Start the local development server:
    ```bash
    php artisan serve
    ```

11. Test the application by visiting `http://localhost:8000` in your web browser.


