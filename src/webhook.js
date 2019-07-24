({ http_event }) => {
  let body = http_event.parsed_body;
  let users = api.run("this.list_users");
  if (body.Body.trim().toLowerCase() == 'reset') {
    for (let i = 0; i < users.length; i++) {
      api.run("this.expire_password", { id: users[i].id });
  	} 
  }
  return { status_code: 200 };
}
