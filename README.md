# Node.js App with Docker Compose Watch

This is a simple Express Node.js application with Docker Compose watch, which allows you to easily develop and monitor code changes. 

Please note that if a syntax error occurs and you use sync+restart, the container will not start again automatically. In such cases, you will need to manually stop and then start the container.

Currently, the rebuild command is used for any changes made in the /app directory.

## Starting the Application

To start the application, use the following command:

```docker-compose watch```

or

```docker compose watch```
