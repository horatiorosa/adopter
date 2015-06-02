class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :animal_type
      t.string :breed
      t.string :sex
      t.string :size
      t.string :age
      t.text :description
      t.string :location
      t.string :http

      t.timestamps null: false
    end
  end
end
