# cr-rooms

cr-rooms is a web-based room/property booking application built with Angular. It provides features for property management, booking, user roles and permissions, and reporting. This project demonstrates modular Angular architecture, modern UI design, and best practices for scalable web apps.

---

## Features

- **Property Management:** Add, list, and view property details.
- **Booking System:** Book rooms, view booking summaries, and calculate stay duration and price.
- **Role & Permission Management:** Admin tools for managing user roles and permissions.
- **Reporting:** Generate and view reports related to bookings and properties.
- **Responsive UI:** Angular Material and SCSS for a modern, device-friendly interface.
- **Branch & User Management:** Manage branches, branch managers, and user profiles.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Poonguzhali-maker/cr-rooms.git
    cd cr-rooms
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Development Server

Start the application with:
```bash
ng serve
```
Open your browser at [http://localhost:4200/](http://localhost:4200/). The app reloads automatically on code changes.

---

## Building

```bash
ng build
```
Build artifacts are stored in the `dist/` directory.

---

## Testing

- **Unit Tests:**  
  Run with:
  ```bash
  ng test
  ```
- **End-to-End Tests:**  
  Run with:
  ```bash
  ng e2e
  ```
  *(Add a testing framework for e2e if needed.)*

---

## Code Structure

- `src/app/` - Main Angular app modules and components
- `src/server.ts` - Express server for server-side rendering (SSR)
- `src/styles.scss` - Global styles and theming

---

## Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io/)

---

## License

This project is for educational/demo purposes. Customize and extend for your own requirements!
