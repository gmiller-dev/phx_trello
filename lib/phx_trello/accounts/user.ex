defmodule PhxTrello.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Poison.Encoder, only: [:id, :first_name, :last_name, :email]}

  schema "users" do
    field :email, :string
    field :encrypted_password, :string
    field :first_name, :string
    field :last_name, :string
    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs\\ %{}) do
    user
    |> cast(attrs, [:email, :password], [:first_name, :last_name, :encrypted_password])
    |> validate_required([:email, :password])
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 8)
    |> validate_confirmation(:password, message: "Password does not match.")
    |> unique_constraint(:email, message: "Email already taken.")
    |> generate_encrypted_password
  end

  defp generate_encrypted_password(%Ecto.Changeset{valid?: true, changes: %{password: password}}=current_changeset), do: put_change(current_changeset, :encrypted_password, Comeonin.Bcrypt.hashpwsalt(password))
  defp generate_encrypted_password(current_changeset), do: current_changeset

end
