# Klipo

Klipo is a web application to plan, schedule and publish short videos to your TikTok account.

## Features

- Sign in with TikTok and authorize Klipo to publish on your behalf
- Upload a video, write the caption and schedule it on a calendar
- Edit or delete scheduled posts

## Running with Docker

1. Copy the environment variables you need from `.env.example` into the `environment` section of `docker-compose.yaml` (at minimum `MAIN_URL`, `FRONTEND_URL`, `NEXT_PUBLIC_BACKEND_URL`, `JWT_SECRET` and your TikTok app credentials).
2. Build and start:

```bash
docker compose up -d --build
```

Only TikTok is offered as a channel: every other provider is hidden through the `HIDDEN_PROVIDERS` variable. Set `CONTACT_EMAIL` to show a contact address in the footer of the public pages.

## License and origin

Klipo is a fork of [Postiz](https://github.com/gitroomhq/postiz-app), released under the [AGPL-3.0](./LICENSE). As required by the license, the complete source code of this application, including our changes, is available in this repository.
