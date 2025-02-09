# FaceAuthApp

FaceAuthApp is a React Native application that uses biometric authentication (Face ID) for user verification. This project integrates with Supabase for backend services and is built using Expo.

## Important Remarks:
- These instructions have NOT been tested fully, I did this project with no prior experience code base
- I am also still learning the ins and outs of Github so there might be small mistakes in my Repo, if so, please feel free to contact me

## Features

- **Biometric Authentication**: Utilizes Face ID for secure user authentication.
- **Supabase Integration**: Manages user data and authentication.
- **React Navigation**: Handles navigation between screens.
- **Expo**: Simplifies development and deployment.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MaxMeyberg/UserAuth_Project.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npx expo start
   ```

## Project Structure

- **components**: Contains all the UI components like `FaceVerification.js`, `SignupScreen.js`, `LoginScreen.js`, etc.
- **utils**: Includes utility files like `supabaseClient.js` for Supabase configuration.
- **app.json**: Configuration file for the Expo app.

## Key Components

- **FaceVerification.js**: Handles biometric authentication using Face ID.
- **SignupScreen.js**: Manages user signup and navigation to face verification.
- **LoginScreen.js**: Provides user login functionality.
- **Navigation.js**: Sets up navigation between different screens.

## Configuration

- **`app.json`**:
  - Ensure permissions and identifiers are set correctly for both iOS and Android.
  - Example:
    ```json
    {
      "expo": {
        "name": "FaceAuthApp",
        "slug": "FaceAuthApp",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
          "image": "./assets/splash.png",
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        },
        "updates": {
          "fallbackToCacheTimeout": 0
        },
        "assetBundlePatterns": [
          "**/*"
        ],
        "ios": {
          "supportsTablet": true,
          "bundleIdentifier": "com.maxmeyberg.FaceAuthApp",
          "infoPlist": {
            "NSCameraUsageDescription": "This app uses the camera to scan faces.",
            "NSFaceIDUsageDescription": "This app uses Face ID for authentication.",
            "ITSAppUsesNonExemptEncryption": false
          }
        },
        "android": {
          "permissions": ["CAMERA"],
          "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#ffffff"
          },
          "package": "com.maxmeyberg.FaceAuthApp"
        },
        "web": {
          "favicon": "./assets/favicon.png"
        },
        "extra": {
          "eas": {
            "projectId": "b4b820f0-daf0-4eec-91ed-d8adad7e9d01"
          }
        }
      }
    }
    ```

## Challenges and Solutions

- **Biometric Authentication**: Ensured Face ID was prioritized and handled fallback scenarios.
- **Expo CLI**: Transitioned to using the local Expo CLI due to deprecation of the global package.
- **Node Compatibility**: Managed Node version compatibility issues by using `nvm`.
- **Supabase Integration**: Configured Supabase for user management and authentication.

## Future Improvements

- Add more biometric options like fingerprint.
- Enhance UI/UX for better user experience.
- Implement additional security features.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
