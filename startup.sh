#!/bin/bash

# Interval in seconds to check if X server is initialized
CHECK_INTERVAL=5

# Function to check if X server is running
check_x_server() {
    if xset q &>/dev/null; then
        return 0  # X server is ready
    else
        return 1  # X server is not ready
    fi
}

# Loop until X server is ready
while ! check_x_server; do
    sleep $CHECK_INTERVAL
done

# Start Postman in the background with GPU disabled, log output to a file
postman --disable-gpu > ~/postman_startup.log 2>&1 &
