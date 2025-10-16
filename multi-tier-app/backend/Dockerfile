FROM node:18-alpine
WORKDIR /app
COPY app/package.json app/
RUN npm install --production
COPY app/ .
EXPOSE 8080
CMD ["node", "index.js"]
