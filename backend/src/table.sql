//tabla users
create table users (
  id serial primary key,
  username varchar(50) not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_at timestamp not null default now() 
);

//tabla tasks
create table tasks (
  id serial primary key,
  username varchar(50) not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_at timestamp not null default now() 
);

alter table users enable row level security;
alter table tasks enable row level security;