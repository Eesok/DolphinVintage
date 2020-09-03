# DolphinVintage

## Project Idea:

This app will be an online store for used vintage high end furniture. Why pay top dollar for new high end furniture when you can get the same thing for a fraction of the price slightly used. Here all transactions are secure and verified using Paypal’s built in services. Surprise your wife with a stylish 1950s set of chairs. Gift a friend a really cool side table. This can all be done on DolphinVintage.com.

## Technologies

- Front-End
  - React.js
- Back-End
  - Python/Django

## Wireframes

![img](https://i.imgur.com/n7oW2SE.jpg)

### MVP User Stories

- As a user, I would like to view a list of furniture.
- As a user, I would like to see the details of a piece of furniture by clicking on it.
- As a user, I would like to purchase a piece of furniture safely and securely.
- As a user, I would like to have a cart to shop with and checkout when ready.
- As a user, I would like for the user experience to be friendly.
- As a user, I would like to contact the company.
- As an admin, I would like to login securely to create, delete, and update the inventory on my site.

### Stretch Goals

- As a user, I would like to filter the furniture by category.
- As a user, I would like to sort the furniture by a few different options ascending/descending.
- As a user, I would like to search for specific types of furniture.
- As a user, I would like to checkout using PayPal

### Models & Properties

| Model     |              Properties              |
| --------- | :----------------------------------: |
| Furniture |     Category, Style, Description     |
| Details   | Dimensions, Brand, Materials, Styles |

### Component Hierarchy

![img](https://i.imgur.com/J1xNKaT.jpg)

#### Component Details

| Component       | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| App             | This will make the initial data request and include React Router                                       |
| FurnitureList   | This will render all of the furniture                                                                  |
| Furniture       | This will render an individual piece of furniture                                                      |
| FurnitureCreate | This will perform a POST method in the API call                                                        |
| FurnitureDetail | This will render an individual piece of furniture and its details                                      |
| FurnitureEdit   | This will perform a PUT method in the API call                                                         |
| FurnitureDelete | This will perform a DELETE method in the API call                                                      |
| Admin-Auth      | This will be responsible for the secure login of the owner of the website to update the site as needed |
| Search          | This will have the functionality to search for furniture in a list                                     |
| Filter/Sort     | This will have the functionality to perform a filter or sort on the list                               |
