# **Backend**


# Endpoint Documentation

## Authentication Endpoints 



| POST | https://be-soup.herokuapp.com/register 

username(unique), password, name, lastName, type  

Returns -> user
___


| POST | https://be-soup.herokuapp.com/login 

username, password

 Returns -> username, userId, token 
___

## Kitchen Endpoints


| POST | https://be-soup.herokuapp.com/kitchen  

kitchen_name, location, description, km_id 
___
| GET | https://be-soup.herokuapp.com/kitchen  
___
| GET | https://be-soup.herokuapp.com/kitchen/:id
___
| PUT | https://be-soup.herokuapp.com/kitchen/:id 
___
| DELETE | https://be-soup.herokuapp.com/kitchen/:id 
___

## Item Endpoints

| POST | https://be-soup.herokuapp.com/kitchen/:id/item  

item_name, quantity, measurement_unit, category, kitchen_id 
___
| GET | https://be-soup.herokuapp.com/kitchen/:id/item   
___
| GET | https://be-soup.herokuapp.com/kitchen/:id/item/:id
___
| PUT | https://be-soup.herokuapp.com/kitchen/:id/item/:id 
___
| DELETE | https://be-soup.herokuapp.com/kitchen/:id/item/:id 
___