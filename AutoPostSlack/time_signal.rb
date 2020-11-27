#!/usr/bin/env ruby
require "slack-notify"
require 'clockwork'
require 'active_support/time'
include Clockwork



module Clockwork
  every(3.minutes, 'AlertTheTime.do')do
    client = SlackNotify::Client.new(
      webhook_url: "https://hooks.slack.com/services/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",
      channel: "#ソースコードリーディングシリーズ課題",
      username: "AutoPost",
    )
    client.notify("今は#{Time.now.to_s}")
  end
end
