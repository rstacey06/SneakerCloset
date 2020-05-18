class ShoesController < ApplicationController

  def index
    shoes = Shoe.all
    render json: ShoeSerializer.new(shoes)
  end

  def show
    shoe = Shoe.find_by(params[:id])
    render json: ShoeSerializer.new(shoe)
  end

  def create
    options = {is_collection: false}

    newShoe = Shoe.create(name: params['name'], style: params['style'],
      colorway: params['colorway'], condition: params['condition'],
      size: params['size'], brand_id: params['brandId'])
      render json: ShoeSerializer.new(newShoe, options)
  end

  # def update
  #   @shoe = Shoe.find_by(id: params[:id])
  #   @shoe.update(name: params['name'], style: params['style'],
  #     colorway: params['colorway'], condition: params['condition'],
  #     size: params['size'], brand_id: params['brandId'])
  #   render json: shoe
  # end

  def destroy
    @shoe = Shoe.find(params[:id])
    @shoe.destroy
  end

  # private
  #
  # def shoe_params
  #   params.require(:shoe).permit(:name, :style, :colorway, :condition, :size, :brand_id)
  # end
end
