class Dog < ActiveRecord::Base

	has_attached_file :image1, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.jpg"
    validates_attachment_content_type :image1, :content_type => /\Aimage\/.*\Z/
end
