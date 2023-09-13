FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server \    
    && npm install -g @vue/cli

# make the 'app' folder the current working directory
WORKDIR /app

ADD ./startup.sh /opt/startup.sh

EXPOSE 80

CMD [ "http-server", "dist" ]