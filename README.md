# EnvPrompter

EnvPrompter is a powerful CLI tool designed to automate the creation of `.env` files for your projects. By detecting missing `.env` files and prompting you to input required values based on a project-specific configuration, EnvPrompter streamlines development setups and ensures secure and consistent configurations across environments.

## Features

- **Automatic Detection**: Quickly identifies missing `.env` files in your project.
- **Customizable Prompts**: Guides you through entering environment variable values using custom prompts.
- **Secure Configuration**: Facilitates a secure way to handle sensitive information by avoiding hardcoded values.
- **Easy Integration**: Seamlessly integrates with existing projects with minimal setup.

## Installation

To install EnvPrompter, run the following command in your terminal:

```sh
npm install -g envprompter
```

Or if you prefer using yarn:

```sh
yarn global add envprompter
```

## Usage
1. Create a Configuration File: Create a file named envprompter.config.json in the root of your project directory. Here is an example configuration:
```json
{
    "variables": [
        {
            "name": "example",
            "prompt": "Please enter the example value",
            "required": true
        },
        {
            "name": "not required field",
            "prompt": "Please enter a value for the not required field",
            "required": false
        }
    ]
}
```

2. Run EnvPrompter: Simply execute EnvPrompter in your terminal by running:
``` sh
envprompter
```
EnvPrompter will then detect if your .env file is missing and prompt you for the required values as specified in your configuration file.

## Configuration
The `envprompter.config.json` file is where you define the environment variables needed for your project. Each variable requires a name, a prompt message to display, and a boolean required field to indicate whether the variable is essential.

## Contributing
We welcome contributions to EnvPrompter! If you're interested in helping improve this tool, please take a look at our contributing guidelines. To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## License
EnvPrompter is open source software licensed as MIT. Feel free to use, modify, and distribute it as per the license.