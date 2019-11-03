# Pmkj2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.
### In this artical you will find how a Angular universal project can be created and deployed in AWS lambda.

## One time Setup of AWS accout

First create a account in AWS
Then in your node js-

```
npm install -g serverless
serverless config credentials --provider aws --key <your-AWS-key> --secret <your-secret-key>

```
## create a new Angular Universal project using ng-toolkit
```
npm install -g @ng-toolkit/init
npm install @angular/cli
ng new myApp
cd myApp
ng add @ng-toolkit/universal

```

when we execute the command ng add @ng-toolkit/universal, in package.json check the new dependency of @ng-toolkit/universal, If it is of lower version like 1.1.2 version (at least for me). Then search in official page of ng-toolkit-universal and have to update with the latest version (when cfreating this document, the latest version is 7.1.2). So I deleted the node_modules folder, then I've changed the version in package.json to 7.1.2, I executed the command npm install, then 
### ng add @ng-toolkit/universal@7.1.2

```
"@ng-toolkit/universal": "~7.1.2",

```
## Add aws severless module
```

ng add @ng-toolkit/serverless -- provider aws

```
### If you face any webpack-cli issue, update webpack-cli to 3.1.1
### npm install --save-dev webpack-cli@3.1.1

### go to serverless.yml and check if the node version is greater than 8. If not then make it – runtime:nodejs8.10

### Go to serverless.yml and make sure the region is nort verginia - region: us-east-1

Finally deploy the application
```
npm run build:serverless:deploy

```

You will get a url link like -

https://77y86zb7zj.execute-api.eu-central-1.amazonaws.com/production

Your solution is deployed sucessfully in the AWS.

### You can directly download this angular universal project as well

what you have to do is -
If you didn't add your AWS account in node then-
First create a account in AWS
Then in your node js-

```
npm install -g serverless
serverless config credentials --provider aws --key <your-AWS-key> --secret <your-secret-key>

```
After that deploy the solution using below commands -
```
npm install
npm run build:serverless:deploy

```




