FROM node:10.13.0
MAINTAINER chendaole '1174250185@qq.com'

#拷贝工程
COPY . /data/node
RUN rm -rf node_modules 
#设置工作目录
WORKDIR /data/node
#安装依赖
RUN npm install 
#nodejs 运行于前台
CMD [ "node", "app.js" ]
#暴露端口
EXPOSE 8081