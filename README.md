# YouTube Backend Project

This project is a backend system for a YouTube-like platform, built using Node.js, Mongoose, and other essential tools. It provides a range of features from user authentication to video management, allowing for a scalable and functional backend for media applications.

## Features

1. **Authentication**: Users can register and log in securely with hashed passwords using bcrypt.
2. **Video Management**: Users can upload videos and images with Cloudinary, view all uploaded videos, and delete videos.
3. **Subscription System**: The system tracks subscribers and subscriptions, enabling users to view their subscriber and subscribing lists.
4. **Watch History**: Keeps track of user watch history, allowing users to revisit previously watched content.
5. **Social Interactions**:
   - **Tweet, Like, and Comment**: Users can tweet, like, and comment on various posts.
   - **Video Interactions**: Users can like and comment on videos, with the ability to see their total liked videos and received likes/comments.

## Technologies

- **Node.js**: Core runtime for server logic.
- **Express**: Fast, unopinionated framework for handling HTTP requests.
- **Mongoose**: MongoDB ODM for schema-based modeling.
- **Nodemon**: Auto-reloading for development.
- **bcrypt**: Password hashing for secure authentication.
- **Cloudinary**: For seamless image and video storage.

## Models and UML

The models and relationships in the project are outlined in a UML diagram. Refer to the detailed UML here for an overview of the structure and flow of data in the system: [UML Diagram](https://app.eraser.io/workspace/xiX5ImgAYYaRPFxqcEdD?origin=share).

This backend is designed for a flexible and scalable setup, ensuring that additional features can be incorporated with minimal changes.
