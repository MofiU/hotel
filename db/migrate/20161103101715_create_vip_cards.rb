class CreateVipCards < ActiveRecord::Migration[5.0]
  def change
    create_table :vip_cards do |t|
      t.references    :user,                foreign_key: true
      t.string        :number,              null: false
      t.integer       :level,               null: false
      t.timestamps                          null: false
    end
  end
end
