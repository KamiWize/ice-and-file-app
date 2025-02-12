# An Interface of Ice and Fire

## Overview

This project is a take-home code challenge to create an application that helps track which characters from _A Song of Ice and Fire_ are alive or dead. The application utilizes the [An API of Ice and Fire](https://anapioficeandfire.com/) as a data source.

## Challenge

I would like to send along a take home code challenge for him. I asked him to spend 1-2 hours on this: An Interface of Ice and Fire. As an avid fan of the epic series A Song of Ice and Fire, I have a hard time keeping up with all of the characters who lose their heads. As such, I would like to have an application that can help me track which characters from the series are alive or dead. Please provide an application that satisfies the following criteria:

- Uses https://anapioficeandfire.com/ as a data source.
- Is built using your tech stack of choice.
- The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house.
- For each Sworn Member display their full name and whether they are alive or dead.
- If a character is dead, please display the information provided by the API about their death.
- If a house has no Sworn Members, please display the message "This house has no sworn members".
- You are welcome to use tools like ChatGPT if that is a part of your daily workflow but please be prepared to defend your choice to use those tools and provide alternate methods if requested on review Submissions will be accepted in the form of GitHub link, CodeSandbox link or zip file. Please provide instructions for how to run the application.

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
- **State Management**: None
- **Type Checking**: TypeScript
- **Test suite**: Jest and Jest-Axe

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KamiWize/ice-and-file-app.git
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
