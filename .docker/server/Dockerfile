FROM mhart/alpine-node:10.4

RUN npm install -g nodemon npm@latest

RUN mkdir -p /mercari-markdown-server

COPY package.json /mercari-markdown-server
COPY package-lock.json /mercari-markdown-server

WORKDIR /mercari-markdown-server

RUN npm ci

COPY . /mercari-markdown-server

CMD ["npm", "run", "server"]