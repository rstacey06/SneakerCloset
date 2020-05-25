class AddBrandIdToShoes < ActiveRecord::Migration[6.0]
  def change
    add_column :shoes, :brand_id, :string
  end
  
end
