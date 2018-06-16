defmodule PhxTrelloWeb.PageController do
  use PhxTrelloWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
