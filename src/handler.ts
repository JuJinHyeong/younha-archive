export const healthCheck = async (event: any = {}): Promise<any> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, Serverless!" }),
  };
};
