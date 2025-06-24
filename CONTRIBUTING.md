# Contributing to PantryPal 🥫

Thank you for considering contributing to PantryPal! We're excited to have you help us build a better zero-waste kitchen planner. If an issue is labelled 'good first issue', feel free to comment "I'd like to work on this!" - we'll assign it to you.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)
- Git

### Local Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/abutler911/pantrypal.git
   cd pantrypal
   ```

2. **Install dependencies**

   ```bash
   npm run setup
   ```

3. **Set up environment variables**

   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URI and other config
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

## 🛠️ Project Structure

```
pantrypal/
├── client/                 # React frontend
│   ├── components/        # React components
│   ├── styles/           # CSS files
│   └── main.jsx          # Entry point
├── server/                # Express.js API
│   ├── controllers/      # Route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── utils/           # Helper functions
└── sample-data/          # Sample JSON data
```

## 📝 How to Contribute

### 🐛 Bug Reports

Before creating a bug report, please check existing issues. When creating a new issue:

1. Use the bug report template
2. Provide clear steps to reproduce
3. Include screenshots if applicable
4. Mention your environment (OS, Node version, browser)

### ✨ Feature Requests

1. Use the feature request template
2. Explain the problem you're trying to solve
3. Describe your proposed solution
4. Consider the scope and complexity

### 💻 Code Contributions

1. **Find an issue to work on**

   - Look for [`good first issue`](https://github.com/abutler911/pantrypal/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels for beginners
   - Comment on the issue to let others know you're working on it

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes**

   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic

4. **Test your changes**

   ```bash
   npm run lint
   npm test --workspaces
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # or
   git commit -m "fix: resolve issue with specific component"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin your-branch-name
   ```

## 🎯 Coding Guidelines

### General Principles

- Write clear, self-documenting code
- Keep functions small and focused
- Use meaningful variable and function names
- Follow the existing project patterns

### Frontend (React)

- Use functional components with hooks
- Keep components small and reusable
- Use descriptive prop names
- Handle loading and error states

### Backend (Express/Node.js)

- Use ES6+ features and modules
- Implement proper error handling
- Validate input data
- Use async/await over promises
- Follow RESTful API conventions

### Database (MongoDB/Mongoose)

- Use descriptive schema field names
- Add appropriate validations
- Index frequently queried fields
- Use proper data types

## 🧪 Testing

We use Jest for testing. When adding new features:

1. **Write tests for new functionality**

   - Unit tests for utilities and helpers
   - Integration tests for API endpoints
   - Component tests for React components

2. **Ensure all tests pass**

   ```bash
   npm test --workspaces
   ```

3. **Test manually**
   - Test your changes in the browser
   - Verify API endpoints with tools like Postman
   - Check edge cases and error scenarios

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] All tests pass (`npm test --workspaces`)
- [ ] Code lints without errors (`npm run lint`)
- [ ] Changes are well documented
- [ ] Commits have clear, descriptive messages

### PR Description

Please include:

- Brief description of changes
- Link to related issue(s)
- Screenshots (for UI changes)
- Testing notes
- Any breaking changes

### Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Delete your feature branch after merge

## 🏷️ Commit Message Format

We follow conventional commit format:

```
type(scope): brief description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(client): add expiry date notifications
fix(server): resolve recipe matching algorithm
docs: update API documentation
```

## 🤔 Need Help?

- Check existing [issues](https://github.com/abutler911/pantrypal/issues)
- Look for [`good first issue`](https://github.com/abutler911/pantrypal/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels
- Read the project documentation
- Feel free to ask questions in issue comments

## 📜 Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and inclusive in all interactions.

## 🎉 Recognition

Contributors will be recognized in our README.md and release notes. Thank you for helping make PantryPal better!

---

**Happy coding! 🚀**
