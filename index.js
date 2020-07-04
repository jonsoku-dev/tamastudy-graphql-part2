const clear = require('clear');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const shell = require('shelljs');
const figlet = require('figlet');
const { emoticons, getRandomInt } = require('./lib/helpers');

clear();

let SELECT = {};
let CURRENT_BRANCH;

const logo = () => {
  figlet('Tamastudy GraphQL Part 2', function (err, string) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(string);
  });
};

const run = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: '간단명령어모음입니다. 프로젝트 처음 시작 시에는 2번 Install을 먼저 해주세요. ',
        choices: Object.values(SELECT),
      },
    ])
    .then((answers) => {
      switch (answers.type) {
        case SELECT.PROJECT_START:
          console.log(SELECT.PROJECT_START);
          shell.exec('cd server && yarn dev', { async : true });
          shell.exec('cd client && yarn start', { async : true });
          break;
        case SELECT.PROJECT_INSTALL:
          console.log(SELECT.PROJECT_INSTALL);
          shell.exec('cd server && yarn && yarn dev', { async : true });
          shell.exec('cd client && yarn && yarn start', { async : true });
          break;
        case SELECT.PROJECT_REFRESH:
          console.log(SELECT.PROJECT_REFRESH);
          shell.exec('cd server && rm -rf node_modules && yarn && yarn dev', { async : true });
          shell.exec('cd client && rm -rf node_modules && yarn && yarn start', { async : true });
          break;
        case SELECT.GIT_PUSH_TO_CURRENT_BRANCH:
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'msg',
                message: '커밋메시지를 작성해주세요. ',
              },
            ])
            .then((answers) => {
              const randomNumber = getRandomInt(0, emoticons.length);
              shell.exec(`git add .`);
              shell.exec(`git commit -m "[${CURRENT_BRANCH}] ${emoticons[randomNumber]} ${answers.msg}"`)
              shell.exec(`git push origin ${CURRENT_BRANCH}`)
            });
          break;
        case SELECT.GIT_FORCE_PUSH_TO_CURRENT_BRANCH:
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'msg',
                message: '커밋메시지를 작성해주세요. ',
              },
            ])
            .then((answers) => {
              const randomNumber = getRandomInt(0, emoticons.length);
              shell.exec(`git add .`);
              shell.exec(`git commit -m "[${CURRENT_BRANCH}] ${emoticons[randomNumber]} ${answers.msg}"`)
              shell.exec(`git push origin ${CURRENT_BRANCH} --force`)
            });
          break;
        default:
          console.log('error');
          break;
      }
    });
};

const init = () => {
  logo();
  setTimeout(() => {
    run();
  }, 100);
  clear();
};

fs.readFile(path.resolve(__dirname, '.git', 'HEAD'), 'utf8', function (err, data) {
  if (err) {
    console.log('git이 등록되어있지 않습니다. git init 명령어가 실행됩니다. ');
    shell.exec('git init -y');
    process.exit(1);
  }
  CURRENT_BRANCH = data.trim().replace('ref: refs/heads/', '');
  SELECT = {
    PROJECT_START: '1. Project Start',
    PROJECT_INSTALL: '2. Project Install',
    PROJECT_REFRESH: '3. Project Refresh',
    GIT_PUSH_TO_CURRENT_BRANCH: `4. 현재 branch(${CURRENT_BRANCH})에 push`,
    GIT_FORCE_PUSH_TO_CURRENT_BRANCH: `5. 현재 branch(${CURRENT_BRANCH})에 force push`,
  };
  init();
});
