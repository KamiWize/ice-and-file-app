# An Interface of Ice and Fire

## Overview

This project is a take-home code challenge to create an application that helps track which characters from _A Song of Ice and Fire_ are alive or dead. The application utilizes the [An API of Ice and Fire](https://anapioficeandfire.com/) as a data source.

## Features

- Fetches data from the API's [Houses](https://anapioficeandfire.com/api/houses) resource.
- Displays a paginated list of 10 houses.
- Lists all sworn members of each house.
- Shows full name and status (alive or dead) of each sworn member.
- Displays death information if a character is deceased.
- Shows "This house has no sworn members" if applicable.

## Tech Stack

- **Framework**: Next.js v15
- **Styling**: Mui v6
- **Data Fetching**: React Query and fetch API
- **State Management**: None
- **Type Checking**: TypeScript
- **Test suite**: Jest and Jest-Axe

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## API Integration

- The application fetches house data from `https://anapioficeandfire.com/api/houses` and `https://anapioficeandfire.com/api/houses/[id]`.
