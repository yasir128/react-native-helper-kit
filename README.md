
### How to Create Two Merges for the Badge

1. **Create the (`main`) branch**: This will have all the initial files as described.
   
2. **Create a new branch** (e.g., `feature-1`): 
   - In this branch, modify something small, like improving the README or refactoring one of the components.
   - Commit and push the changes.

3. **Create another branch** (e.g., `feature-2`): 
   - In this branch, make another small change. Perhaps add another utility function or change the styling slightly.
   - Commit and push the changes.

4. **Open a pull request (PR) from `feature-1` to `main`**: This will be the first merge.
   
5. **Open a pull request (PR) from `feature-2` to `main`**: This will be the second merge.
   
6. **Merge the PRs**: Once both PRs are approved, merge them into the `main` branch.

### Final Structure of the Repository

// plaintext
react-native-helper-kit/
├── components/
│   └── CustomButton.js
├── utils/
│   └── formValidation.js
├── App.js
├── index.js
├── package.json
├── .gitignore
├── README.md
└── app.json
