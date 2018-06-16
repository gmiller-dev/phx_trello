# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :phx_trello,
  ecto_repos: [PhxTrello.Repo]

# Configures the endpoint
config :phx_trello, PhxTrelloWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ROnPLVnJkOYHS6qg7RSTp83rNlub+m+PYlBjdqDspmQIqBsxZ7tgXJLUK3aBx8/q",
  render_errors: [view: PhxTrelloWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhxTrello.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :guardian, Guardian,
  issuer: "PhxTrello",
  ttl: {3, :days},
  verify_issuer: true,
  secret_key: "anfj4WwsLNJcAZPOb0/mptHS3NYKDnfKqHj1/43UPBF8WZMCRe+aLll66tH+CMY7"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
