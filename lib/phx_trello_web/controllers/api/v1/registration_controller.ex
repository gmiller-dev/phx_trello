defmodule PhxTrello.RegistrationController do
  use PhxTrelloWeb, :controller
  alias PhxTrello.{Accounts, Accounts.Guardian}

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => user_params}) do
    case Accounts.create_user(user_params) do
      {:ok, user} -> 
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user, :token)
        conn
        |> put_status(:created)
        |> render(PhxTrello.SessionView, "show.json", jwt: jwt, user: user)
      {:error, changeset} -> 
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhxTrello.RegistrationView, "error.json", changeset: changeset)
    end
  end

end