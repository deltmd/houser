CREATE TABLE Users ( ID serial primary key, username text, password text)

create table Property ( id serial primary key, userId integer, name text, property_information text, loan integer, monthly_mortgage integer, recommended_rent integer, desired_rent integer, address text, city text, state text, zip integer, photo text)

insert into Users( username, password ) 
values ('myUsername', 'myPassword')

select * from Users;





