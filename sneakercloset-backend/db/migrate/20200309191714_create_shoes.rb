class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.string :style
      t.string :colorway
      t.string :condition
      t.integer :size

      t.timestamps
    end
  end
end
