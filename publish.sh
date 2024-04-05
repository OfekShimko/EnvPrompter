#!/bin/bash

# Ask the user for the version number
read -p "Enter the version number (e.g., 1.0.0): " version

# Define the tag and release notes file
tag="v$version"
release_notes="release-notes-$version.txt"

# Run tests, linting, and build before proceeding
if yarn test && yarn lint && yarn build; then
    # Create a Git tag with the user-provided version
    git tag "$tag"
    
    # Push the tag to the origin
    git push origin "$tag"
    
    # Publish the package to npm
    npm publish --registry=https://registry.npmjs.org/
    
    # Optionally, create a release notes file or gather information for release notes
    echo "Enter release notes, followed by [CTRL+D]:"
    cat > "$release_notes"

    # Create a GitHub release using the gh CLI
    gh release create "$tag" --title "$tag Release" --notes-file "$release_notes"
    
    # Optionally, remove the release notes file after the release has been created
    rm "$release_notes"
else
    echo "Tests, linting, or build failed. Fix the issues before trying again."
fi
