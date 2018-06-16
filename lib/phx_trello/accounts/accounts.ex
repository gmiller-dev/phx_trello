defmodule PhxTrello.Accounts do
  @moduledoc """
  The Accounts context.
  """
  import Ecto.Query, warn: false
  alias PhxTrello.Repo
  alias PhxTrello.Accounts.User
  
  @doc """
  Creates a user.

  ## Examples
    iex> create_user(%{field: value})
    {:ok, %User{}}

    iex> create_user(%{field: bad_value})
    {:error, %Ecto.Changeset{}}
  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def get_user!(id) do
    Repo.get!(User, id)    
  end

end