const awsconfig = {
    Auth: {
      region: 'YOUR_AWS_REGION',
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID',
    },
    API: {
      endpoints: [
        {
          name: 'myApi',
          endpoint: 'YOUR_API_GATEWAY_ENDPOINT',
        },
      ],
    },
    Storage: {
      AWSS3: {
        bucket: 'YOUR_S3_BUCKET_NAME',
        region: 'YOUR_AWS_REGION',
      },
    },
  };
  
  export default awsconfig;
  