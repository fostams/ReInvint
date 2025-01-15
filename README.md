# Project Title

ReInvint

## Overview

ReInvint is a web application designed to encourage sustainability in fashion by helping users manage their wardrobes, swap or buy secondhand clothes, and creatively reuse old items. It aims to reduce waste and foster awareness about the environmental impact of fashion.

### Problem

Fashion contributes significantly to environmental degradation, with massive amounts of clothing waste ending up in landfills. Many individuals are unaware of the environmental cost of their clothing choices or lack tools to manage their wardrobe sustainability. There is yet to be an app with features that promote the three R's - reduce excess, reuse your's and other's clothing and recycle/upcycle in a creative way.

### User Profile

- Sustainability Enthusiasts:
  - Looking to minimize clothing waste
  - Interested in learning how to creatively reuse and upcycle old clothes
- Thrifty Shoppers:
  - Looking to swap or buy preloved clothes affordably
  - Looking to access a community of like-minded individuals
- Wardrobe Managers:
  - Wanting tools to organize and optimize their existing clothing inventory
  - Desire outfit suggestions based on their current wardrobe

### Features

- As a user, I want to upload and tag items in my wardrobe to create a digital inventory
- As a user, I want to list items for swapping or selling within a controlled marketplace
- As a user, I want to explore creative tutorials for upcycling and reusing preloved clothes
- As a user, I want to manage my personal wardrobe (add, view, edit, delete items)
- As a user, I want to browse and list items in a marketplace
- As a user, I want to display static upcycling content, providing tips or tutorials for reusing clothing

## Implementation

### Tech Stack

- React
- JavaScript
- Client libraries:
  - react
  - react-router
  - axios
- Server librarires:
  - Node.js with Express.js
  - MySQL with Knex

### APIs

- No external APIs will be used for the first sprint. All data will be stored and retrieved from the MySQL database.

### Sitemap

- Home Page: Brief overview of the app and navigation to other sections
- Wardrobe Inventory: List, add, and delete wardrobe items
- Swap/Buy Marketplace: Browse items and add listings
- Static Upcycling Page: Display tips and tutorials for reusing old clothing

### Mockups

#### Home Page

- Intro to ReInvint and its purpose
- Call-to-action buttons: "Get Started", "Learn More"

#### Wardrobe Inventory

- Grid layout showing uploaded items with filters by type, colour, material, size and condition

#### Swap/Buy Marketplace

- Search bar with filters for size, and condition
- Item cards with details

#### Static Upcycling Page

- Static page with hardcoded tutorials and images

### Data

Wardrobe:

- id (primary key)
- name (string)
- type (string)
- colour (string)
- description (string)
- user_id

Marketplace:

- id (primary key)
- name (string)
- type (string)
- condition (string)
- price (decimal)
- user_id

### Endpoints

Wardrobe

- GET /wardrobe: Fetch all wardrobe items
- POST /wardrobe: Add a new item to the wardrobe
- PUT /wardrobe/:id: Update a wardrobe item
- DELETE /wardrobe/:id: Delete a wardrobe item

Marketplace

- GET /marketplace: Fetch all marketplace items
- POST /marketplace: Add an item to the marketplace

### Auth

Authentication (ie. login and profile creation) will not be included in the first sprint to save time. A fake user ID (user_id: 1) will be used for all API requests.

## Roadmap

- Client setup
  - set up React app and Express server
- Server setup

  - create MySQL scheme for wardrobe and marketplace tables using Knex
  - Seed sample data for testing

- CRUD operations

  - build backend APIs for wardrobe and marketplace

- Create frontend components for wardrobe management

  - list, add, edit, delete

- Add marketplace page to display and list items

- Styling

  - style the app with CSS and Sass

- Add a static upcycling page with hardcoded tips and links

- Test features and deploy app

- Bug fixes

## Nice-to-haves

- Authentication: Enable user registration and login with secure password storage and JWT-based authorization
- Similar Clothes component: When users browse the marketplace, display similar clothes from their own wardrobe to prevent duplicate purchases
- "Clothes Friends" component: A special section where users can add close "clothes friends" to manage borrowed items, track where their clothes are and know which friend is borrowing them
- Outfit suggestion feature to encourage creative use of existing clothing inventory
- Material transparency and sustainability scores to align with ReInvint's educational goals
- Gamification: Badges for reducing clothing waste and upcycling projects to motivate user engagement
- Expanded social features: Comments and likes on tutorials to foster community interaction
- Integration with resale platforms for seamless user experience, enhancing the core swapping and buying functionality
