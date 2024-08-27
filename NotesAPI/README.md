# NotesAPI

NotesAPI is a simple REST API service for managing notes, implemented with ASP.NET Core. This project demonstrates basic CRUD operations (Create, Read, Update, Delete) using a simple list of notes.

## Prerequisites

Before running the application, ensure you have the following tools installed:

• .NET SDK version 8.0 or higher

• Visual Studio 2022 or Visual Studio Code

• Git

## Installation

#### Clone the repository:

```bash
git clone https://github.com/kimrenny/Notes.git
```

#### Navigate to the project directory:

```bash
cd Notes/NotesAPI
```

## Running the API

### 1. Restore dependencies:

#### Run the following command in the project's root directory:

```bash
dotnet restore
```

### 2. Build the project:

#### Run the command:

```bash
dotnet build
```

### 3. Run the API

#### Run the command:

```bash
dotnet run
```

By default, the server will start at ['http://localhost:5111'](http://localhost:5111).

```bash
dotnet run --launch-profile https
```

The server will start at ['https://localhost:7082'](https://localhost:7082).

## Using the API

 You can use the NotesAPI.http file to send HTTP requests to the API using the REST Client extension for Visual Studio Code.

### Example Requests

#### Get all notes:

```http
GET http://localhost:5111/notes
```

#### Get a note by ID:

```http
GET http://localhost:5111/notes/2
```

#### Create a new note:

```http
POST http://localhost:5111/notes
Content-Type: application/json

{
  "NoteText": "Test"
}
```

#### Update an existing note:

```http
PUT http://localhost:5111/notes/2
Content-Type: application/json

{
  "Id": 2,
  "NoteText": "Updated Text"
}
```

#### Delete a note:

```http
DELETE http://localhost:5111/notes/2
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)