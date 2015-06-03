class DogsController < ApplicationController

  def index
    @dog = Dog.all
  end

  def new
<<<<<<< HEAD
  	@dog = Dog.new
=======
  	
>>>>>>> bbd7639205ab08882ffb771295e7b86e8e28d1d9
  end

  def show
    @dog = Dog.find(params[:id])
  end

  def edit
  end

  def create
  	@dog = Dog.new(dog_params)
  	if @dog.save
  		flash[:notice] = 'New dog created'
  		redirect_to dogs_path(@dog)
  	else
  		flash[:alert] = 'There was a problem'
  		render :new
  	end
  end

  private

  def dog_params
  	params.require(:dog).permit(:animal_type, :name, :breed, :sex, :size, :age, :description, :location, :http, :image1, :image2, :image3)
  end

end
