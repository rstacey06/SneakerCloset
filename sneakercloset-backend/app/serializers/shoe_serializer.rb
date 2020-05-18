class ShoeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :style, :colorway, :condition, :size
  belongs_to :brand
end
