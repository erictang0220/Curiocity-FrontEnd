# Curiocity Frontend

A React Native mobile app built with Expo implementing authentication screens for the Curiocity platform. Includes email/password login and registration flows alongside social login options for Apple, Google, Facebook, and Twitter.

## Screens

- **Login** -- Username/email and password fields with a login button and social login icons
- **Signup** -- Username, email, password, and confirm-password fields with a register button and social login icons

Navigation between screens is handled by React Navigation (stack navigator). Both screens support dark mode through NativeBase theming.

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React Native 0.64 / Expo ~44 |
| UI Components | NativeBase 3 |
| Navigation | React Navigation 6 (stack) |
| Icons | @expo/vector-icons (FontAwesome5, MaterialCommunityIcons) |

## Setup

```bash
git clone https://github.com/erictang0220/curiocity-frontend
cd curiocity-frontend
npm install
expo start
```

Then press `i` to open on iOS Simulator, `a` for Android, or scan the QR code with Expo Go.

## Project Structure

```
├── App.js              # Navigation container and stack definition
├── screens/
│   ├── Login.js        # Login screen component
│   └── Signup.js       # Signup screen component
├── screens/
│   ├── apple.png       # Social login icons
│   ├── facebook.png
│   ├── google.png
│   └── twitter.png
└── package.json
```

