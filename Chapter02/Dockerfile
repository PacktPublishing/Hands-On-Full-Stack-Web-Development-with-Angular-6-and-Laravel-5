FROM node:8.1.2-alpine

# create a work directory inside the container
RUN mkdir /app
WORKDIR /app

# install utilities. I currently like yarn
RUN npm install -g yarn tsc
# install dependencies
RUN yarn install
