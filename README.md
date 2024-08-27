# Notes

Notes is a project that includes a REST API service and a client-side application for managing notes. The project consists of two main components:

- **NotesAPI**: A simple REST API service implemented with ASP.NET Core for managing notes.
- **NotesClient**: A client-side application built with Angular for interacting with the NotesAPI.

## Prerequisites

Before running the application, ensure you have the following tools installed:

- **For the Client Application**:

  - Node.js (version 18.17.1 or higher)
  - Angular CLI (version 16.0.0 or higher)
  - Git

- **For the API**:
  - .NET SDK version 8.0 or higher
  - Visual Studio 2022 or Visual Studio Code
  - Git

## Installation

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/kimrenny/Notes.git
```

Navigate to the project directory:

```bash
cd Notes
```

## Client Application (NotesClient)

### Navigate to the Client Directory

```bash
cd NotesClient
```

### Install Dependencies

```bash
npm install
```

### Running the Client Application

#### Start the Development Server

```bash
npm start
```

By default, the application will be available at ['http://localhost:4200'](http://localhost:4200).

#### Open the Application

Navigate to ['http://localhost:4200'](http://localhost:4200) in your web browser to view the application.

### Running Tests

Run end-to-end tests using Cypress:

```bash
npx cypress run
```

### Additional Configuration

#### API URL

Ensure that the API URL is correctly configured in the environment settings.

By default, it is set to ['http://localhost:5111'](http://localhost:5111) or ['https://localhost:7082'](https://localhost:7082) depending on the server settings. You can update it in the `'src/environments/environment.development.ts'` file if needed.

#### Translation

To switch languages, use the buttons in the application interface. The language settings are managed using `'ngx-translate'`. Ensure the necessary translation files are available in the `'src/assets/i18n'` directory.

## API (NotesAPI)

### Navigate to the API Directory

```bash
cd NotesAPI
```

### Restore Dependencies

```bash
dotnet restore
```

### Build the Project

```bash
dotnet build
```

### Run the API

Run the API with HTTP:

```bash
dotnet run
```

The server will start at ['http://localhost:5111'](http://localhost:5111).

Or run with HTTPS:

```bash
dotnet run --launch-profile https
```

The server will start at ['https://localhost:7082'](https://localhost:7082).

### Using the API

Use the `'NotesAPI.http'` file to send HTTP requests to the API using the REST Client extension for Visual Studio Code.

#### Example Requests

##### Get all notes:

```http
GET http://localhost:5111/notes
```

##### Get a note by ID:

```http
GET http://localhost:5111/notes/2
```

##### Create a new note:

```http
POST http://localhost:5111/notes
Content-Type: application/json

{
  "NoteText": "Test"
}
```

##### Update an existing note:

```http
PUT http://localhost:5111/notes/2
Content-Type: application/json

{
  "Id": 2,
  "NoteText": "Updated Text"
}
```

##### Delete a note:

```http
DELETE http://localhost:5111/notes/2
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
