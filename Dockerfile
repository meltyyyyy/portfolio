FROM node:latest

RUN apt update -qq && \
    apt install -y build-essential \
    git \
    curl \
    wget \
    vim \
    supervisor

WORKDIR /root/portfolio
RUN mkdir -p /root/portfolio
COPY . /root/portfolio/
EXPOSE 4000

RUN cd /root/portfolio && \
    rm yarn.lock && \
    yarn

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord"]
