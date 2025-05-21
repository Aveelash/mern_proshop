# your-backend-directory/Dockerfile

# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container.
# All subsequent commands will run from this directory.
WORKDIR /app

# IMPORTANT CHANGE: Copy package.json and package-lock.json from the build context (root directory).
# The first '.' refers to the build context (which we'll set to the root in docker-compose.yml).
# The second './' refers to the WORKDIR inside the container.
COPY ./package.json ./package-lock.json ./

# Install production dependencies.
# These dependencies are for the entire project, but since your backend is in /app,
# npm will typically install them there if your backend's code relies on them.
RUN npm install --production

# Copy the rest of your backend application code into the container.
# This assumes your backend code is in the 'backend' folder relative to the root.
# The `.` here refers to the current directory inside the container, which is `/app`.
# The `backend/` refers to the source directory from the build context (root).
COPY backend/ .

# Expose the port your backend server listens on.
EXPOSE 5000

# Command to run your backend application when the container starts.
# 'node server.js' will start your Express server.
CMD ["node", "server.js"]
