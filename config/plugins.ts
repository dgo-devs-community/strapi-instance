export default ({ env }) => ({
    email: {
      config: {
        provider: 'mailgun',
        providerOptions: {
          key: env('MAILGUN_API_KEY'),
          domain: env('MAILGUN_DOMAIN'),
          url: 'https://api.mailgun.net/',
        },
        settings: {
          defaultFrom: env('MAILGUN_DEFAULT_FROM'),
          defaultReplyTo: env('MAILGUN_DEFAULT_REPLY_TO'),
        },
      },
    },
  });