# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
<<<<<<< HEAD
# dog = Dog.create(animal_type: 'Dog', name: 'Bruno', breed: 'Shiba Inu',
# 	sex: 'Male', size: 'Medium', age: 'Adult', description: 'Full of energy',
# 	location: 'New York', http: 'https://www.petfinder.com/petdetail/32255451/',
# 		image1: "~/app/assets/images/bruno1.jpeg" )

=======
dogs = Dog.create({animal_type: 'Dog'}, {name: 'Bruno'}, {breed: 'Shiba Inu'},
	{sex: 'Male'}, {size: 'Medium'}, {age: 'Adult'}, {description: 'Full of energy'},
	{location: 'New York'}, {http: 'https://www.petfinder.com/petdetail/32255451/'},
	{
		image1: File.open(Rails.root + "app/assets/images/bruno1.jpeg")}, {image2: File.open(Rails.root + "app/assets/images/bruno2.jpeg")}, {image3: File.open(Rails.root + "app/assets/images/bruno3.jpeg")})

dog1 = Dog.create

Image.create(dog_id: dog1.id, url: "scraps.jpg")
Image.create(dog_id: dog1.id, url: "scraps2.jpg")
Image.create(dog_id: dog1.id, url: "scraps3.jpg")
>>>>>>> d32df34dbc5e7b99e5b5cf1e5cce408592b8fbb1
