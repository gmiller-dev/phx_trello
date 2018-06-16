defmodule PhxTrelloWeb.SessionView do
  use PhxTrelloWeb, :view

  def render("show.json", %{jwt: jwt, user: user}) do
    %{
      jwt: jwt,
      user: user
    }
  end
  
end