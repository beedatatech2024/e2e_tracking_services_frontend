const ENV = {
    development: {
      baseUrl: "http://localhost/api",
    },
    production: {
      baseUrl: "http://localhost/api",
    },
  };
  
  const currentEnv = process.env.REACT_APP_ENV || "development";
  
  export const baseUrl = ENV[currentEnv].baseUrl;

  export const baseUrlImg = `http://localhost/api`;
  