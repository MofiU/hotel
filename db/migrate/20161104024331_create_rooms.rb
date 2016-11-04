class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.references    :order,               foreign_key: true
      t.string        :number,              null: false
      t.string        :type,                null: false
      t.string        :status,              null: false
      t.string        :describe,            null: false
      t.decimal       :price,               null: false,        precision: 5,   scale:2
      t.timestamps           
    end
  end
end
