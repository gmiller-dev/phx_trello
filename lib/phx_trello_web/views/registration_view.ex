defmodule PhxTrelloWeb.RegistrationView do
  use PhxTrelloWeb, :view

  def render("error.json", %{changeset: changeset}) do
    Enum.map(changeset.errors, fn {field, detail} ->
      %{} |> Map.put(field, render_detail(detail))
    end)
  end

  defp render_detail({message, values}) do
    Enum.reduce(values, message, fn {k,v}, acc -> String.replace(acc, "%{#{k}}", to_string(v)) end)
  end
end