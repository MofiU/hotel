class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references    :user,                foreign_key: true
      t.string        :status,              null: false
      t.datetime      :scheduled_in,        null: false
      t.datetime      :scheduled_out,       null: false
      t.datetime      :check_in_time,       null: false
      t.datetime      :leave_time,          null: false
      t.decimal       :total_cost,          null: false,        precision: 5,   scale:2
      t.decimal       :actual_cost,         null: false,        precision: 5,   scale:2
      t.timestamps                          null: false
    end      
  end
end
