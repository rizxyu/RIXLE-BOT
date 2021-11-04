FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm i -g npm@latest
RUN npm i

COPY . .
EXPOSE 5000

CMD ["node", "index.js"]`
