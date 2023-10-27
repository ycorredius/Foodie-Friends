git_source(:github) { |repo| "https://github.com/#{repo}.git" }
source "https://rubygems.org"

ruby "3.2.2"

gem "bcrypt", "~> 3.1.7"
gem "pg"
gem "annotate", "~> 3.1", ">= 3.1.1"
gem "bootsnap", ">= 1.4.4", require: false
gem "fast_jsonapi", "~> 1.5"
gem "image_processing", "~> 1.2"
gem "jbuilder", "~> 2.7"
gem "puma", "~> 5.0"
gem "rack-cors"
gem "rails", "~> 7.0.8"
gem "sass-rails", ">= 6"
gem "activerecord-session_store"
gem "sprockets-rails"

group :development, :test do
  gem "pry-rails", "~> 0.3.9"
  gem "factory_bot_rails", "~> 6.2"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "web-console", ">= 4.1.0"
  gem "rack-mini-profiler", "~> 2.0"
  gem "listen", "~> 3.3"
  gem "spring"
end

group :test do
  gem "capybara", ">= 3.26"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "rspec-rails", "~> 6.0"
 gem "database_cleaner-active_record"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "devise", "~> 4.9"

gem "faker", "~> 3.2"

gem "jsbundling-rails", "~> 1.2"

gem "tailwindcss-rails", "~> 2.0"

gem "turbo-rails", "~> 1.5"

gem "stimulus-rails", "~> 1.3"

gem "pagy", "~> 6.1"

# Use Redis for Action Cable
gem "redis", "~> 4.0"

gem "foreman", "~> 0.87.2"
