# WEEK 2 PROJECT:

1. Create a helm chart
2. Your helm chart should deploy you two application containers: frontend app and it’s backend into your Kubernetes cluster
3. configure nginx Ingress to access your applications

## How it works

### Pre-requisites and Local Development

Developers using this project should already have and have good knowledge of and install:

- helm
- Docker
- kubectl
- Kind

Start Docker and create a cluster

```
$ kind create cluster

```

Clone the application by following the instructions below

```
$ git clone https://github.com/todak2000/talentplus.git
$ cd weekTwo

```

The deployment has several files and two folders

- app-be.yaml - backend configuration data for deployment
- app.fe.yaml - frontend configuration data for deployment
- my-ingress.yaml
- app file - created with the helm command to manage the frontend and backend deployment on kubernetes
- ingress file - created with helm command to manage the deployment of ingress
  Doing the above should initiate the backend microservice of this application which contains one endpoint

**Backend Deployment**

```
$ helm install -f app-be.yaml app-be ./app
$ helm list
$ kubectl get deployments

```

**Frontend Deployment**

```
$ helm install -f app-fe.yaml app-fe ./app
$ helm list
$ kubectl get deployments

```

**Ingress Deployment**

Run the command below to update the dependencies as `ngin-ingress` has been added to the ingress folder (as created by helm) before installing the new configuration

```
$ helm dependency update ./ingress/
$ helm install -f my-ingress.yaml ingress ./ingress
$ helm list
$ kubectl get services


```

You should have all services running as the image below

<img width="854" alt="Screen Shot 2022-11-23 at 12 46 47 AM" src="https://user-images.githubusercontent.com/26861798/203443610-16792996-c6fb-4256-88a7-0e799be4769f.png">

## Author

[Daniel Olagunju](https://github.com/todak2000)
