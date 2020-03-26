class CreateResponseModels < ActiveRecord::Migration[6.0]
  def change
    create_table :response_models do |t|

      t.timestamps
    end
  end
end
