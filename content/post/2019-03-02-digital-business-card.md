+++
title = "Digital Business Card"
description = ""
keywords = [
]
categories = [
]
date = "2019-03-02T10:25:35-08:00"
published = "true"

+++

![shredded paper](/img/shredded.jpg)

Recently I took on a new role. I was asked for information so that business cards could be ordered for me. I reflected a moment and realized I don't really use business cards anymore. I decided that I needed a digital way to share my business (and personal) information and I wanted to be able to control what I share. One of the side benefits of this is I don't have to share my personal mobile phone number either. The number below is purchased through Twilio and is only used to reply with my digital business card.

You can send a SMS to [+1 949 333-0466](tel:+19493330466) to try it out.

<!--more-->

### Tech Stack

- [AWS API Gateway](https://aws.amazon.com/api-gateway/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Serverless](https://serverless.com/)
- [Twilio](https://www.twilio.com)
- [Node.js](https://nodejs.org/en/)

This is a "production ready" stack that took a couple hours to build and test. It could scale to millions of users, but since it's "serverless" the code just sits there until someone actually uses it. It deploys for pennies per month. Each outbound MMS costs \$0.02. Since the code is only ~5mb the storage costs on AWS are nearly zero.

The architecture looks like this:

![architecture](/img/serverless.png)

<small>NOTE: I didn't draw this - it is automatically generated from the CloudFormation script that the Serverless framework creates. Automatic "perfect", evergreen documentation because it is showing exactly what is actually deployed. Cool!</small>

Put simply, an API gateway endpoint handles all the tasks involved processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management. The API gateway talks to a Lambda function.

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. This also results in zero administration. The Lambda function is just a Nodejs function that uses the Twilio javascript library to respond to the API call with my business card information. The code is deployed from an S3 bucket.

In my organization people are concerned about how we will be able to operate our services and applications in the cloud. This puzzles me because if we architect things properly we should be striving to achieve **zero administration**. This is how you get there!

Prerequisites

- An AWS account
- A Twilio account
- Node.js and NPM or Yarn installed on your development machine
- Use NPM or Yarn to install Serverless:
  ```sh
  # Installing the serverless cli
  npm install -g serverless
  ```

### Steps

#### Create a new service

Use serverless to scaffold a lambda function using the Node.js template.

```sh
# Create a new Serverless Service/Project
$ serverless create --template aws-nodejs --path my-service

# Change into the newly created directory
$ cd my-service
```

#### Build, test and deploy your service

- Test the function locally. Note "-f" specifies the function and "-p" passes in data to simulate an API call

  ```sh
  serverless invoke local -f twilio -p data.json
  ```

- Deploy the Service

  ```sh
  serverless deploy
  ```

- Fetch the Function Logs

  ```sh
  serverless logs -f twilio -t
  ```

Full working code is [here](https://github.com/dstroot/twilio-business-card-aws-lambda)