# Slappybot
Slappybot - Discord Bot that can show in-game stats for Slappyball, created with discord.js on the Node,js framework.

## Dependencies
  - [Node.js v12+](https://nodejs.org/)
  - [npm (Node Package Manager)](https://npmjs.com/)
  - Packages (Installed via `npm i`)
  - Env File (See [example-env.txt](https://github.com/F1sxher/Slappybot/blob/master/example-env.txt) file for instructions)

## Configuration
  ### Configuration files
  Edit the [example-env.txt](https://github.com/F1sxher/Slappybot/blob/master/example-env.txt) and rename to `.env`. Make sure to have everything correctly entered...
  This uses dynamodb with AWS, later branches may support other data services.

## Quick Setup
```sh
$ git clone https://github.com/F1sxher/Slappybot
$ cd Slappybot
# Edit example-env.txt
$ npm i
# Ready to start the bot!
$ npm run start
```

## Disclaimer
We do not provide support for self-hosting! This package has been made open-source to aid with contributions, not so you can run your own Slappybot for private use. If something breaks or there's a vulnerability in a version you use, then you're on your own.

For this reason, we recommend using the official hosted bot at https://slappyball.com which is given regular updates.

Also, keep in mind that we use the AGPL-3.0 License, which means you're required to keep your local version open-source and state all changes that you have made to it.

**Some commands MAY NOT WORK - Verification does not work with the open-source version...refer to the official hosted bot.**