class AddAttachmentImageToDogs < ActiveRecord::Migration
  def self.up
    change_table :dogs do |t|
      t.attachment :image1
      t.attachment :image2
      t.attachment :image3
    end
  end

  def self.down
    remove_attachment :dogs, :image1
    remove_attachment :dogs, :image2
    remove_attachment :dogs, :image3
  end
end
