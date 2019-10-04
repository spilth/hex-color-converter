FROM node:10.16.0-alpine
WORKDIR /color-converter
COPY package.json yarn.lock ./
RUN npx yarn@1.19.0 install
COPY . .
RUN npm run build
EXPOSE 5000
ENV NODE_ENV=production
CMD npx --no-install serve -s
