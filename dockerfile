FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install --production
EXPOSE 3006
CMD ["npm", "start"]