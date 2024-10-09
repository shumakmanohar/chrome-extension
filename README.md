# React + TypeScript + Vite Chrom Extension

[![Watch the video]](./video.mp4)

## Implemented Features

- Build UI with ReactJS and styled with Tailwind CSS
- Handles different stages : Loading , Error , Not Found , Correct Data Render
- Used Chrome API for Storage and Alarms
- Background Service that executes ~30s , hits api to check for new notifications , for ease of testing , I chose 30s
- Chrome Extension Badge : Shows the correct number of unread notification,
- High Priority Badge : Conditional rendering of components based on data from API
- Chrome Storage : to persist the read and unread notifications.
