# SIGNAL 2019 Okta App

An app that uses [Twilio](https://www.twilio.com/) and [Okta](https://www.okta.com/) together to demo the [Transposit](https://transposit.com) platform by expiring all passwords on a user organization.

By using webhooks, we can have Twilio call a function in Transposit with the text's metadata. Here, we ask the user to text their email address, which will then add that email to a raffle list hosted on [airtable](https://airtable.com), and send that email a html message thanking them for attending the event.

`expire_password`: Expires the Okta password of a given user, forcing them to reset.

`list_users`: Returns all users of an Okta organization.

`send_message`: Sends a text notification to all users with numbers on record that their password was expired.

`webhook`: The function that is called when Twilio receives a text, which passes in the content to the respective places.

[Click here to find more examples using Transposit!](https://www.transposit.com/apps/)
