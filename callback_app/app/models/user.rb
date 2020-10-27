class User < ApplicationRecord
  before_create CreateAgeAtCallback.new
end
