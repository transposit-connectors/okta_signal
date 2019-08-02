({ http_event }) => {
  let body = http_event.parsed_body;
  let users = api.run("this.list_users");
  if (body.Body.trim().toLowerCase() == 'code red') {
    for (let i = 0; i < users.length; i++) {
      api.run("this.expire_password", { id: users[i].id });
      if (users[i].profile.mobilePhone != null) {
        api.run('this.send_message', {sid: env.get("sid"),
                                      recipient: users[i].profile.mobilePhone,
                                      phonenum: `+1${env.get("phonenum")}`});
      }
  	} 
  }
  return { status_code: 200 };
}
