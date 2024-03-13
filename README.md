# CSV Data Visualization Project

## Description
This project aims to visualize data from a CSV file using Node.js, Express.js, and Chart.js. The CSV file contains structured data that is parsed into JSON format using the `csv-parser` npm module. The parsed data is then rendered on a webpage using Express.js and EJS templates. Graphical representation of the data is achieved using Chart.js, allowing for easy visualization and analysis.

## Project Structure
- `csv_data/`: Contains the CSV file(s) used for data visualization.
- `public/`: Includes static assets such as CSS stylesheets and client-side JavaScript files.
- `views/`: Contains EJS templates for rendering dynamic content on the webpage.
- `app.js`: Main entry point of the application, setting up Express.js server and routes.
- `package.json`: Includes project metadata and dependencies.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Data-visualization-using-chartJS.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Usage
1. Place your CSV file(s) inside the `csv_data/` directory.
2. Start the application by running `npm start`.
3. Open your web browser and navigate to `http://localhost:3000` to view the graphical representation of the data.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- csv-parser (npm module for parsing CSV files)
- Chart.js

## Contributors
- [Aman Mishra](https://github.com/AmanMishra2003)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
