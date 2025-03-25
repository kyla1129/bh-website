# House Rental Website

This project is a dynamic web application for renting houses. It allows users to browse available houses, view details, and get in touch for rental inquiries.

## Features

- View a list of houses available for rent
- Detailed view of each house with images and descriptions
- Responsive design for optimal viewing on various devices
- Client-side functionality for enhanced user experience

## Project Structure

```
house-rental-website
├── public
│   ├── css
│   │   └── styles.css        # CSS styles for the website
│   ├── js
│   │   └── scripts.js        # JavaScript for client-side functionality
│   └── index.html            # Main HTML file
├── src
│   ├── controllers
│   │   └── houseController.js # Logic for handling house data
│   ├── models
│   │   └── houseModel.js      # Defines house data structure and database interactions
│   ├── routes
│   │   └── houseRoutes.js      # Sets up routes for house-related endpoints
│   └── views
│       ├── houseList.ejs       # Template for listing houses
│       └── houseDetail.ejs     # Template for house details
├── app.js                      # Main entry point of the application
├── package.json                # npm configuration file
├── .gitignore                  # Files to ignore in Git
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/house-rental-website.git
   ```
2. Navigate to the project directory:
   ```
   cd house-rental-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
node app.js
```
The application will be available at `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.