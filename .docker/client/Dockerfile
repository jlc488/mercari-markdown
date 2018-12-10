FROM mhart/alpine-node:10.4

RUN npm install -g npm@latest

RUN mkdir -p /mercari-markdown-client

COPY package.json /mercari-markdown-client
COPY package-lock.json /mercari-markdown-client

WORKDIR /mercari-markdown-client

RUN npm ci

COPY . /mercari-markdown-client

CMD ["npm", "run", "client"]