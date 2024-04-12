FROM mysql

EXPOSE 3306

COPY init/* /docker-entrypoint-initdb.d/

CMD ["mysqld"]