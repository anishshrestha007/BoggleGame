class CreateReponses < ActiveRecord::Migration[6.0]
  def change
    create_table :reponses do |t|

      t.timestamps
    end
  end
end
