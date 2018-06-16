defmodule PhxTrello.Accounts.Guardian do
 use Guardian, otp_app: :phx_trello 
 alias PhxTrello.Accounts
 alias PhxTrello.Accounts.User

 def subject_for_token(%User{}=user, _claims), do: {:ok, to_string(user.id)}
 def subject_for_token(_, _), do: {:error, :invalid_resource}

 def resource_from_claims(claims) do
   id = claims["sub"]
    case Accounts.get_user!(id) do
      nil -> 
        {:error, :invalid_resource}
      user ->
        {:ok, user}
    end
 end
end