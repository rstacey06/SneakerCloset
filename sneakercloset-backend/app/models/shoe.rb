class Shoe < ApplicationRecord
  belongs_to :brand, optional: true
end
