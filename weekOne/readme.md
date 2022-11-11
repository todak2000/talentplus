# WEEK 1 PROJECT:

Simple microservice application was created consisting of a Frontend (React) and a Backend (Flask) having one api endpoint that displays "TALENT PLUS" upon running both servers.

## How it works

### Pre-requisites and Local Development

Developers using this project should already have and have good knowledge of:

- node
- React
- Flask (Python)

Clone the application by following the instructions below

#### Backend

```
$ git clone https://github.com/todak2000/talentplus.git
$ cd weekOne/backend
$ pip3 install -r requirements.txt
$ flask run
```

Doing the above should initiate the backend microservice of this application which contains one endpoint
**GET /home**

General:

- returns the word "TALENT PLUS" or throw an exception if an error occured.

Sample `curl http://127.0.0.1:5000/home `

```
    {
        "success": True,
        "data": data,
    }
```

TAKE NOTE: The application is run on ` http://127.0.0.1:5000/` by default and is a proxy in the frontend configuration.

#### Frontend

```
$ cd weekOne/frontend
$ yarn install
$ yarn start
```

The React application should run and display accordingly.

### Error Handling

Only Server error was defined and would return as shown below:

```
{
    "success": False,
    "error": 500,
    "message": "Opps! something went wrong!"
}
```

## Author

[Daniel Olagunju](https://github.com/todak2000)
