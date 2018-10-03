class Api::TodosController < ApplicationController
  before_action :find_todo, only: [:update, :show, :destroy]

  def show
    render json: @todo
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    debugger
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo.destroy
    render json: {message: 'Destroyed the Todo'}
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :done, :body)
  end

  def find_todo
    @todo = Todo.find(params[:id])
  end

end
