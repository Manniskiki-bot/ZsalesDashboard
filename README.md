Dashboard Application Documentation
Overview
This documentation provides an overview of the Dashboard application, describing its features, implementation details, and challenges faced during development. The Dashboard is designed to display various analytics and financial data in a user-friendly and responsive manner.

Features
Welcome Section

Displays a welcome message for the user.
Shows today's sales and performance metrics.
Product and School Sign-Ups

Displays monthly updates for product and school sign-ups using pie and bar charts.
Allows the user to filter data based on the selected month.
Financial Summary

Displays total collections, bounced cheques, total revenue, and total sign-ups.
Invoices

Shows a list of invoices with data entry and submission capabilities.
Implementation Details
Technology Stack
Frontend: React.js
Icons: React Icons (MdArrowOutward, MdOutlineArrowUpward)
Styling: Tailwind CSS
Responsive Design
The dashboard is designed to be responsive and adapt to various screen sizes. Flexbox and grid systems are utilized to ensure the layout adjusts appropriately.

Main Components
Dashboard Component

Renders the main dashboard sections.
Uses PieChartComponent and BarChartComponent to display charts.
Navbar Component

Provides navigation for the application (not detailed in the initial implementation).
Invoice Component

Displays and manages invoice data.
CSS and Styling
Tailwind CSS is used extensively for styling, ensuring a consistent and responsive design. Key classes used include:

flex: for flexible box layouts.
gap: for spacing between elements.
w-full, w-2/3, w-1/3: for width adjustments.
overflow-x-auto: to enable horizontal scrolling.
Data Handling
Sample data is used for charts and invoices, with the intention to replace these with dynamic data in the future. The data structures are defined as JavaScript objects and arrays.

Challenges Faced
Responsiveness
One of the significant challenges faced during development was ensuring the dashboard's responsiveness across various screen sizes. The limited time frame made it difficult to thoroughly test and refine the responsiveness, although the initial implementation provides a solid foundation.

Feature Addition Constraints
Chat Feature: Initially planned to add a chat feature to enhance user interaction but had to be postponed due to time constraints.
Kanban Board: A Kanban board was also planned to help manage tasks but couldn't be implemented within the given time frame.
Invoice Form Submission
While the invoice form allows users to enter data, handling the new data to be dynamically displayed in the table requires more time. The current implementation does not fully support the dynamic update and display of new invoice data.

Future Enhancements
Improve Responsiveness

Further refine the responsive design to ensure seamless user experience on all devices.
Add Chat Feature

Implement a real-time chat feature to facilitate communication among users.
Implement Kanban Board

Integrate a Kanban board for task