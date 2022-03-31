FROM mariadb:latest

ENV MYSQL_DATABASE tigerdatacodingtool
ENV MYSQL_USER admin
ENV MYSQL_PASSWORD cpsc6720
ENV MYSQL_ROOT_PASSWORD cpsc6720

RUN apt-get update && apt-get -y install vim

EXPOSE 3306

CMD ["mysqld"]