module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("dy9arv1g9"),
          api_key: env("347432479663715"),
          api_secret: env("V8PtzKWQdz5Vpw5gZHn94IAld-Q"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  