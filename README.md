# driverApi
driverApi is an application for input of drivers. It has CRUD functionalities.

Drivers has following fields:
- name
- email
- score

There are 5 methods implemented in this api:
* List all drivers
* Create a driver
* Read a driver
* Update a driver
* Delete a driver

1. List all drivers method is called via sending a get request to the url "https://localhost:1058/list_drivers".
2. Create driver method is called via sending a post request to the url "https://localhost:1058/create_driver".
3. Read driver method is called via sending a get request to the url "https://localhost:1058/driver_operations/:driverId".
4. Update driver method is called via sending a put request to the url "https://localhost:1058/driver_operations/:driverId".
5. Delete driver method is called via sending a delete request to the url "https://localhost:1058/driver_operations/:driverId".
