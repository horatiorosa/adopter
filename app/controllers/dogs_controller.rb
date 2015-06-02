class DogsController < ApplicationController

  def index
    @dog = Dog.all
  end

  def new
  	@dog = Dog.new
  end

  def show
  end

  def edit
  end

  def create
  	@dog = Dog.new(dog_params)
  	if @dog.save
  		flash[:notice] = 'New dog created'
  		redirect_to user_path(@dog)
  	else
  		flash[:alert] = 'There was a problem'
  		render :new
  	end
  end

  private

  def dog_params
  	params.require(:dog).permit(:animal_type, :breed, :sex, :size, :age, :description, :location, :http, :image1, :image2, :image3)
  end

end
