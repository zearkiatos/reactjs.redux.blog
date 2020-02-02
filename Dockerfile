FROM node:12.14.1
COPY ["package.json","package-lock.json","/home/node/app/"]

WORKDIR /usr/src/app

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs

COPY [".","."]

CMD npm install -g create-react-app && \
    npm install && \
    npm run start --port=3000 && \
    npm install -g nodemon | ng serve --host 0.0.0.0 --port 3000

EXPOSE 3001