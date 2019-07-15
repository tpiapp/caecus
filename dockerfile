FROM ruby:2.6.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /caecus
WORKDIR /caecus
COPY . /caecus
COPY Gemfile /caecus/Gemfile
COPY Gemfile.lock /caecus/Gemfile.lock
RUN   bundle install
COPY . /caecus
CMD ["rails", "s"]
EXPOSE 3000