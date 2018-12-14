FROM registry.cn-qingdao.aliyuncs.com/dayue/node:8.1.4-alpine-2
COPY . /home/app
WORKDIR /home/app
RUN npm install --registry=https://registry.npm.taobao.org --production
EXPOSE 3000
CMD ["npm","run","start"]
