export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k4weq6k217.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NmFEzVnfz",
    APP_CLIENT_ID: "5v964s22gndl8rri2meis9ao8o",
    IDENTITY_POOL_ID: "us-east-1:f15f92bb-b2c1-41d4-b830-6379bba8314b"
  }
};
