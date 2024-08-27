# NotesClient

NotesClient is a client-side application for interacting with the NotesAPI, built with Angular. This project demonstrates a user interface for managing notes, including functionality to create, read, update, and delete notes.

## Prerequisites

Before running the application, ensure you have the following tools installed:

• Node.js (version 18.17.1 or higher)

• Angular CLI (version 16.0.0 or higher)

• Git

## Installation

#### Clone the repository:

```bash
git clone https://github.com/kimrenny/Notes.git
```

#### Navigate to the project directory:

```bash
cd Notes/NotesClient
```

#### Install dependencies:

```bash
npm install
```

## Running the Client Application

#### 1. Start the development server:

Run the following command to start the client application:

```bash
npm start
```

By default, the application will be available at ['http://localhost:4200'](http://localhost:4200).

#### 2. Open the application:

Navigate to ['http://localhost:4200'](http://localhost:4200) in your web browser to view the application.

## Running Tests

#### Run end-to-end tests:

```bash
npx cypress run
```

## Additional Configuration

#### API URL

Ensure that the API URL is correctly configured in the environment settings.

By default, it is set to ['http://localhost:5111'](http://localhost:5111) or ['https://localhost:7082'](https://localhost:7082) by the 'https' in server launch settings. You can update it in the `'src/environments/environment.development.ts'` file if needed.

#### Translation

To switch languages, use the buttons in the application interface. The language settings are managed using `'ngx-translate'`. Ensure the necessary translation files are available in the `'src/assets/i18n'` directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
