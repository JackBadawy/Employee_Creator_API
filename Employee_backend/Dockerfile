# Start with a base image containing Java runtime
FROM openjdk:17-slim

# Set the working directory in the container
WORKDIR /app

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Copy the jar file into the container at /app
COPY target/employee-repository-backend-1.0.0.jar /app/app.jar

# Run the jar file 
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

